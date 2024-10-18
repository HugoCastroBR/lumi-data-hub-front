import React from 'react'
import Table from '../organisms/Table'
import HomeOptions from '../organisms/HomeOptions'
import Header from '../atoms/Header'


export default function Home(){

  const [search, setSearch] = React.useState('')

  return (
    <main
      className='flex flex-col items-center '
    >
      <Header/>
      <HomeOptions
        onSearch={setSearch}
      />
      <Table
        search={search}
      />
    </main>
  )
}