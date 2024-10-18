import React, { useEffect, useMemo, useState } from 'react';
import TableFilters from '../molecules/TableFilters';
import TableItem from '../molecules/TableItem';
import TablePagination from '../molecules/TablePagination';
import { GetAllUc } from '../api/uc';
import { UC } from '../utils/types';
import handlerFilters from '../utils/handlerFilters';

interface ITable {
  ucs: UC[];
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  setOrderBy: (orderBy: string) => void;
  setOrder: (order: 'asc' | 'desc') => void;
  handlerFilterChange: (order: 'asc' | 'desc', orderBy: string) => void;
  search: string;
}

export default function Table({ 
  ucs, 
  page, 
  totalPages, 
  setPage, 
  setOrderBy, 
  setOrder, 
  handlerFilterChange,
 }:ITable) {
  

  const RenderTableItems = () => (
    ucs.map((uc: UC, index: number) => (
      <TableItem
        id={uc.id}
        key={index}
        number={index + 1}
        clientName={uc.client.name}
        ucRegisterN={Number(uc.registerN) || 0}
        name={uc.client.name}
        bills={uc.bills}
      />
    ))
  );

  return (
    <div className='flex flex-col w-11/12 overflow-hidden bg-gray-100 shadow-md min-h-96 rounded-xl'>
      <TableFilters
        onChange={(order, orderBy) => {
          setOrderBy(orderBy);
          if (order === 'asc' || order === 'desc') {
            setOrder(order);
            handlerFilterChange(order, orderBy);
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
