import React from 'react'
import TableFilters from '../molecules/TableFilters'

import TableItem from '../molecules/TableItem'


export default function Table() {
  return (
    <div
      className='flex flex-col w-11/12 overflow-hidden bg-gray-100 shadow-md min-h-96 rounded-xl'
    >
      <TableFilters />
      <div className='w-full h-72'>
        <TableItem 
        number={1} 
        clientName='CLIENT 1'
        ucRegisterN={123456}
        name='UC 1'
        />
        <TableItem 
        number={2} 
        clientName='CLIENT 2'
        ucRegisterN={22222123456}
        name='UC 2'
        />
      </div>
      <div className='w-full h-8 bg-gray-200'>
      </div>
    </div>
  )
}