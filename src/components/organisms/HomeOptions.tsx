import YearFilterItem from '../atoms/YearFilterItem'
import SearchInput from '../atoms/SearchInput'
import UploadFileBtn from '../molecules/UploadFileBtn'
import { useState } from 'react'

interface HomeOptionsProps {
  onSearch: (search: string) => void
  onFileUpload: () => void
  onYearChange: (year: number) => void
}
export default function HomeOptions({ onSearch, onFileUpload, onYearChange }: HomeOptionsProps) {

  const [yearSelected, setYearSelected] = useState<number>(2024);

  const handlerClick = (year: number) => {
    setYearSelected(year);
    onYearChange(year);
  };

  return (
    <div
      className='flex flex-row items-center justify-between w-11/12 h-16 mb-2 '
    >
      <div
        className='flex flex-row items-center w-4/5 h-full'
      >
        <UploadFileBtn
          onFileUpload={onFileUpload}
        />
        {Array.from({ length: 7 }, (_, i) => (
          <YearFilterItem
            key={i}
            year={2018 + i}
            active={2018 + i === yearSelected}
            onClick={() => handlerClick(2018 + i)}
          />
        ))}
      </div>
      <div
        className='flex items-center justify-center w-1/5'
      >
        <SearchInput
          onChange={onSearch}
        />
      </div>
    </div>
  )
}

