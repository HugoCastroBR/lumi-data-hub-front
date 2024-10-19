import { UC } from "../utils/types";
import TableItem from "./TableItem";

const RenderTableItems = (ucs: UC[]) => (
  ucs.map((uc: UC, index: number) => (
    <TableItem
      id={uc.id}
      key={index}
      number={index + 1}
      clientName={uc.client.name}
      ucRegisterN={Number(uc.registerN) || 0}
      name={uc.client.name}
      bills={uc.bills}
    />
  ))
);

export default function TableItemsContainer ({ ucs }: { ucs: UC[] }) {
  return (
    <>
      {
          ucs.length > 0 ? (
            RenderTableItems(ucs)
          ) : (
            <div className='flex items-center justify-center w-full h-full'>
              <h1 className='text-2xl font-bold text-gray-500'>Sem dados</h1>
            </div>
          )
        }
    </>
  )
}