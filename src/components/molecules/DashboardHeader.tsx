import React from 'react';

interface IDashBoardHeader {
  clientName: string
  registerN: string
  clientRegisterN: string
}
export default function DashBoardHeader({
  clientName,
  registerN,
  clientRegisterN
}: IDashBoardHeader) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-16 text-white bg-primary">
      <span className="text-xl font-bold">
        Nº{registerN}
      </span>
      <span>
        {clientName} - Nº {clientRegisterN}
      </span>
    </div>
  )
}
