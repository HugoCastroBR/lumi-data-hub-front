import YearFilterItem from '../atoms/YearFilterItem'
import SearchInput from '../atoms/SearchInput'
import UploadFileBtn from '../molecules/UploadFileBtn'

export default function HomeOptions({
  onSearch
}:{onSearch: (value: string) => void}) {
  return (
    <div
      className='flex flex-row items-center justify-between w-11/12 h-16 mb-2 '
    >
      <div
        className='flex flex-row items-center w-2/3 h-full'
      >
        <UploadFileBtn />
        <YearFilterItem />
      </div>
      <div>
        <SearchInput
          onChange={onSearch}
        />
      </div>
    </div>
  )
}