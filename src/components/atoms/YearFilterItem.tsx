export default function YearFilterItem({
  year,
  active
}:{year:number,active:boolean}) {
  return(
    <div
    className={
      `flex items-center justify-center w-32 h-10 ml-4 shadow-md rounded-xl ${active ? 'bg-white' : 'bg-gray-100'}`
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