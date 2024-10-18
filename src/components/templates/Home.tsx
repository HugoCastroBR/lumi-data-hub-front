import React, { useEffect, useState } from 'react';
import Table from '../organisms/Table';
import HomeOptions from '../organisms/HomeOptions';
import Header from '../atoms/Header';
import { GetAllUc } from '../api/uc';
import handlerFilters from '../utils/handlerFilters';
import { UC } from '../utils/types';

export default function Home() {
  const [search, setSearch] = React.useState('');

  const [ucs, setUcs] = useState<UC[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string>('');

  const getUcs = async () => {
    const json = await GetAllUc({ page, order, orderby: orderBy, search });
    if (json) {
      setTotalPages(json.totalPages || 1);
      setUcs(json.data || []);
    }
  };

  useEffect(() => {
    getUcs();
  }, [search, page, order, orderBy]);

  const handlerFilterChange = async (order: 'asc' | 'desc', orderBy: string) => {
    const json = await GetAllUc({ page, order, orderby: handlerFilters(orderBy), search });
    if (json) {
      setTotalPages(json.totalPages || 1);
      setUcs(json.data || []);
    }
  };

  return (
    <main className='flex flex-col items-center'>
      <Header />
      <HomeOptions
        onSearch={setSearch}
        onFileUpload={() => {
          getUcs();
        }} 
      />
      <Table
        ucs={ucs}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        setOrderBy={setOrderBy}
        setOrder={setOrder}
        handlerFilterChange={handlerFilterChange}
        search={search}
      />
    </main>
  );
}
