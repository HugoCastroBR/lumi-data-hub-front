import React from 'react';

interface SummaryCardProps {
  title: string;
  value: number | string;
  unit?: string; 
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, unit }) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-32 mx-2 my-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-2xl font-bold">
        {value}
        {unit && <span className="text-md"> {unit}</span>}
      </p>
    </div>
  );
};

export default SummaryCard;
