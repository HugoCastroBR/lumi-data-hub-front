import { useState } from "react";
import FilterItem from "../atoms/TableFilterItem";
import TableMonths from "./TableMonths";

interface ITableFilters {
  onChange: (order: string, orderBy: string) => void;
}

export default function TableFilters({ onChange }: ITableFilters) {
  const [order, setOrder] = useState<'asc'|'desc'>('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFilterClick = (order: 'asc' | 'desc', orderBy: string) => {
    setOrder(order);
    setOrderBy(orderBy);
    setSelectedFilter(orderBy);
    onChange && onChange(order, orderBy);
  };

  return (
    <div className='flex flex-row items-center w-full h-16 bg-primary'>
      <FilterItem
        name='Name'
        alias="Nome da UC"
        selected={selectedFilter === 'Name'}
        onClick={handleFilterClick}
      />
      <FilterItem
        name='UcRegisterN'
        alias="Numero da UC"
        selected={selectedFilter === 'UcRegisterN'}
        onClick={handleFilterClick}
      />
      <FilterItem
        name='Distribuidora'
        alias="Distribuidora"
        sortable={false}
      />
      <FilterItem
        name='ClientName'
        alias="Consumidor"
        selected={selectedFilter === 'ClientName'}
        onClick={handleFilterClick}
      />
      <div className='flex flex-row items-center w-2/6 h-16'>
        <TableMonths />
      </div>
    </div>
  );
}
