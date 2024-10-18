import React from 'react';
import MonthTableHeaderItem from '../atoms/MonthTableHeaderItem';

export default function TableMonths(){
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ];

  return (
    <>
      {months.map((month, index) => (
        <MonthTableHeaderItem
          month={month}
          index={index}
          key={index}
        />
      ))}
    </>
  );
};


