
interface YearFilterItemProps {
  year: number
  active: boolean
  onClick: () => void
}

export default function YearFilterItem({
  year,
  active,
  onClick
}:YearFilterItemProps) {
  return(
    <div
    onClick={onClick}
    className={
      `flex items-center justify-center w-28 cursor-pointer h-10 ml-4 shadow-md rounded-xl 
      ${active ? 'bg-white' : 'bg-gray-100'}
      hover:bg-white transition-colors duration-200 ease-in-out
      `
    }
  >
    <span
      className='font-semibold text-black text-md'
    >
      {year}
    </span>
  </div>
  )
}