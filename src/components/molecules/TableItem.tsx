import ItemCol from "../atoms/TableItemCol"
import { IconFileFilled } from "@tabler/icons-react"

interface ITableItem {
  number: number
  name: string
  ucRegisterN: number
  clientName: string
  distribuidora?: string

}



interface ITableItemFileRow{
  files: IFileItemProps[]
}

interface IFileItemProps{
  year: number
  month: number
  filename: string
}

const files: ITableItemFileRow = {
  files: [
    {
      year: 2021,
      month: 3,
      filename: 'file3'
    },
    {
      year: 2021,
      month: 4,
      filename: 'file4'
    },
    {
      year: 2021,
      month: 5,
      filename: 'file5'
    },
    {
      year: 2021,
      month: 6,
      filename: 'file6'
    },
    {
      year: 2021,
      month: 7,
      filename: 'file7'
    },
    {
      year: 2021,
      month: 8,
      filename: 'file8'
    },
    {
      year: 2021,
      month: 9,
      filename: 'file9'
    },
    {
      year: 2021,
      month: 10,
      filename: 'file10'
    },
    {
      year: 2021,
      month: 11,
      filename: 'file11'
    },
    {
      year: 2021,
      month: 12,
      filename: 'file12'
    },
  ]
}

function TableItemFileRow({ files }: ITableItemFileRow) {
  const verifyIfFileExists = (year: number, month: number) => {
    return files.some(file => file.year === year && file.month === month);
  };

  const yearToCheck = 2021;

  return (
    <div className="flex flex-row items-center w-full h-full ">
      {Array.from({ length: 12 }, (_, i) => i + 1).map(month => {
        const fileExists = verifyIfFileExists(yearToCheck, month);
        if(fileExists){
          return(
            <div
              className="w-1/12"
            >
              <IconFileFilled
              
              />
            </div>
          )
        }else{
          return(
            <div
              className="w-1/12"
            >
              <IconFileFilled
                className="text-gray-400"
              />
            </div>
          )
        }
      })}
    </div>
  );
}


export default function TableItem({
  number,
  name,
  clientName,
  ucRegisterN,
  distribuidora = 'CEMIG',
}: ITableItem) {

  return (
    <div className={`
      'flex flex-row items-center justify-between w-full h-12
      ${number % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}
    `}>
      <div className='flex flex-row items-center h-full'>
        <ItemCol value={name} />
        <ItemCol value={clientName} />
        <ItemCol value={distribuidora} />
        <ItemCol value={ucRegisterN} />
        <div
          className="w-2/6 h-full"
        >
          <TableItemFileRow
            files={files.files}
          />
        </div>
      </div>
    </div>
  )

}