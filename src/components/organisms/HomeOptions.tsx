import YearFilterItem from '../atoms/YearFilterItem'
import SearchInput from '../atoms/SearchInput'
import UploadFileBtn from '../molecules/UploadFileBtn'

interface HomeOptionsProps {
  onSearch: (search: string) => void
  onFileUpload: () => void
}
export default function HomeOptions({ onSearch, onFileUpload }: HomeOptionsProps) {
  return (
    <div
      className='flex flex-row items-center justify-between w-11/12 h-16 mb-2 '
    >
      <div
        className='flex flex-row items-center w-2/3 h-full'
      >
        <UploadFileBtn
          onFileUpload={onFileUpload}
        />
        {Array.from({ length: 4 }, (_, i) => (
          <YearFilterItem
            key={i}
            year={2020 + i}
            active={2020 + i === 2024}
          />
        ))}
      </div>
      <div>
        <SearchInput
          onChange={onSearch}
        />
      </div>
    </div>
  )
}