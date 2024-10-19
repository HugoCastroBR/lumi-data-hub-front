import { truncateString } from "../../utils/functions"

interface IItemCol {
  value: string | number
}

export default function ItemCol({ value }: IItemCol) {
  return (
    <div className='flex flex-row items-center justify-center w-1/6 h-full'>
      <p className='font-medium text-black text-md'>
        {truncateString(value.toString(), 20)}
      </p>
    </div>
  )
}