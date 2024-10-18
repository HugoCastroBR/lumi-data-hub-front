import React from 'react'
import Table from '../organisms/Table'
import HomeOptions from '../organisms/HomeOptions'
import Header from '../atoms/Header'


export default function Home(){
  return (
    <main
      className='flex flex-col items-center '
    >
      <Header/>
      <HomeOptions/>
      <Table/>
    </main>
  )
}