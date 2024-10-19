import React from 'react';
import TableFilters from '../molecules/TableFilters';
import TablePagination from '../molecules/TablePagination';
import { UC } from '../../utils/types';
import TableItemsContainer from '../molecules/TableItemsContainer';

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
}: ITable) {

  const handleNewFilter = (order: "asc" | "desc", orderBy: string) => {
    setOrder(order);
    setOrderBy(orderBy);
    handlerFilterChange(order, orderBy);
    setPage(1);
  };

  return (
    <div className='flex flex-col w-11/12 overflow-hidden bg-gray-100 shadow-md min-h-96 rounded-xl'>
      <TableFilters
        onChange={handleNewFilter}
      />
      <div className='w-full h-72'>
        <TableItemsContainer ucs={ucs} />
      </div>
      <div className='w-full h-8 bg-gray-200'>
        <TablePagination page={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
