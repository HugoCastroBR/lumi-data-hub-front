import React from 'react';
import { IconDownload, IconFileTypePdf } from "@tabler/icons-react";

interface BillCardProps {
  month: number;
  year: number;
  onClick: () => void;
  isSelected: boolean; 
}

export default function BillCard({ month, year, onClick, isSelected }: BillCardProps) {
  return (
    <div
      className={`overflow-hidden flex flex-col items-center justify-between h-56 w-36 mx-2 my-4 bg-white rounded-xl cursor-pointer ${isSelected ? 'shadow-none' : 'shadow-md'}`} 
      onClick={onClick} 
    >
      <div className="flex flex-col items-center justify-center w-full h-36">
        <IconFileTypePdf size={96} />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-20 bg-gray-200">
        <span className="font-semibold text-md">{`${month}/${year}`}</span>
        <button>
          <IconDownload size={32} />
        </button>
      </div>
    </div>
  );
}