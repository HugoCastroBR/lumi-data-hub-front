import { IconSearch } from '@tabler/icons-react'


export default function SearchInput() {
  return (
    <div
      className='flex overflow-hidden shadow-md rounded-xl'
    >
      <div
        className='flex items-center justify-center w-12 h-10'
      >
        <IconSearch
          size={24}
          stroke={1.5}
          className='text-black '
        />
      </div>
      <input
        type='text'
        placeholder='Search'
        className='w-64 h-10 outline-none '
      />
    </div>
  )
}