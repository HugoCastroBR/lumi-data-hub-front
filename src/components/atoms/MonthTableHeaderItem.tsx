export default function MonthTableHeaderItem({
  month,
  index
}:
{
  month: string,
  index: number
}
) {
  return (
    <div className="flex flex-row items-center w-1/12 h-16" key={index}>
      <p className="text-sm font-semibold text-white">
        {month}
      </p>
    </div>
  )
}