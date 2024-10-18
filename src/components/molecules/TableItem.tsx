import { useEffect, useState } from "react"
import ItemCol from "../atoms/TableItemCol"
import { IconFileFilled } from "@tabler/icons-react"
import { Bill } from "../utils/types"

interface ITableItem {
  number: number
  name: string
  ucRegisterN: number
  clientName: string
  distribuidora?: string
  bills?: Bill[]
}

interface ITableItemFileRow{
  files: IFileItemProps[]
}

interface IFileItemProps{
  year: number
  month: number
  filename: string
}

function TableItemFileRow({ files }: ITableItemFileRow) {

  const verifyIfFileExists = (year: number, month: number) => {
    const found = files.some(file => file.year === year && file.month === month);
    return found;
  };

  const yearToCheck = 2024; 

  return (
    <div className="flex flex-row items-center w-full h-full">
      {Array.from({ length: 12 }, (_, monthIndex) => {
        const month = monthIndex + 1; 
        const fileExists = verifyIfFileExists(yearToCheck, month);
        
        return (
          <div 
          className={`${fileExists ? "cursor-pointer" : "cursor-default"} w-1/12`} 
          key={month}
          onClick={() => {
            console.log(files[monthIndex].filename);
          }}
          >
            <IconFileFilled className={fileExists ? "" : "text-gray-400"} />
          </div>
        );
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
  bills
}: ITableItem) {

  const [files, setFiles] = useState<ITableItemFileRow>()

  const billsToFiles = () => {
    if (bills) {
      const newFiles: ITableItemFileRow = {
        files: bills.map(e => ({
          year: e.year,
          month: e.month,
          filename: e.filename,
        })),
      };
      setFiles(newFiles);
      return newFiles
    }
    console.log(files)
  };

  useEffect(() => {
    billsToFiles();
  }, [bills]);

  return (
    <div className={`
      'flex flex-row items-center justify-between w-full h-12
      ${number % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}
    `}>
      <div className='flex flex-row items-center h-full'>
        <ItemCol value={name} />
        <ItemCol value={ucRegisterN} />
        <ItemCol value={distribuidora} />
        <ItemCol value={clientName} />
        <div
          className="w-2/6 h-full"
        >
          <TableItemFileRow
            key={ucRegisterN}
            files={files?.files || []}
          />
        </div>
      </div>
    </div>
  )

}