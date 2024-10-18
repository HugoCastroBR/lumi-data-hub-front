import FilterItem from "../atoms/TableFilterItem";
import TableMonths from "./TableMonths";


export default function TableFilters(){
  return(
    <div
    className='flex flex-row items-center w-full h-16 bg-primary'
  >
    <FilterItem
      name='Name'
      alias="Nome da UC"
    />
    <FilterItem
      name='UcRegisterN'
      alias="Numero da UC"
    />
    <FilterItem
      name='Distribuidora'
      alias="Distribuidora"
    />
    <FilterItem
      name='ClientName'
      alias="Consumidor"
    />
    <div
      className='flex flex-row items-center w-2/6 h-16'
    >
      <TableMonths />
    </div>
  </div>
  )
}