import React, { useEffect, useMemo, useState } from 'react'
import TableFilters from '../molecules/TableFilters'
import TableItem from '../molecules/TableItem'
import TablePagination from '../molecules/TablePagination'
import { GetAllUc } from '../api/uc'
import { UC } from '../utils/types'
import handlerFilters from '../utils/handlerFilters'



export default function Table() {
  const [ucs, setUcs] = useState<UC[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const getUcs = async () => {
    const json = await GetAllUc({
      page,
      order,
      orderby: orderBy,
    });
    const ucs = await json?.data;
    setTotalPages(json?.totalPages || 1);
    setPage(json?.page || 1);
    setOrder(json?.order || 'asc');
    setOrderBy(json?.orderby || '');
    setUcs(ucs || []);
  };

  // useEffect(() => {
  //   getUcs();
  // }, [page, order, orderBy, search]);

  useMemo(() => {
    getUcs();
  }, []);

  const handlerFilterChange = async (order: 'asc' | 'desc', orderBy: string) => {

    
    const json = await GetAllUc({
      page,
      order,
      orderby: handlerFilters(orderBy),
    });
    const ucs = await json?.data;
    setTotalPages(json?.totalPages || 1);
    setPage(json?.page || 1);
    setOrder(json?.order || 'asc');
    setOrderBy(json?.orderby || '');
    setUcs(ucs || []);
    
  }

  const RenderTableItems = () => {
    return ucs.map((uc:UC, index:number) => (
      <TableItem
        key={index}
        number={index + 1}
        clientName={uc.client.name}
        ucRegisterN={Number(uc.registerN) || 0}
        name={uc.client.name}
        bills={
          uc.bills
        }
      />
    ));
  };

  return (
    <div className='flex flex-col w-11/12 overflow-hidden bg-gray-100 shadow-md min-h-96 rounded-xl'>
      <TableFilters
        onChange={(order, orderBy) => {
          setOrderBy(orderBy);
          if (order === 'asc' || order === 'desc') {
            setOrder(order);
            handlerFilterChange(order,orderBy)
          }
          setPage(1); 
          
        }}
      />
      <div className='w-full h-72'>
        {RenderTableItems()}
      </div>
      <div className='w-full h-8 bg-gray-200'>
        <TablePagination page={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
