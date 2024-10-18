import React from 'react'
import { 
  IconSortAscending,
  IconSortDescending,
} from '@tabler/icons-react'

interface IFilterItem{
  alias?: string
  name: string,
  type?: 'text' | 'number',
  sortable?: boolean
}
export default function FilterItem({
  alias,
  name,
  type='text',
  sortable=true
}:IFilterItem){

  const [isAscending, setIsAscending] = React.useState(true)
  const handlerOrder = () => {
    setIsAscending(!isAscending)
  }

  return (
    <div className='flex flex-row items-center justify-center w-1/6 h-16 cursor-pointer '
      onClick={handlerOrder}
    >
      {
        isAscending ? (
          <IconSortAscending
            size={24}
            stroke={1.5}
            className='text-white '
            onClick={()=>setIsAscending(false)}
          />
        ) : (
          <IconSortDescending
            size={24}
            stroke={1.5}
            className='text-white '
            onClick={()=>setIsAscending(true)}
          />
        )
      }
      <p
        className='font-semibold text-white text-md'
      >
        {alias || name}
      </p>
    </div>
  )
}