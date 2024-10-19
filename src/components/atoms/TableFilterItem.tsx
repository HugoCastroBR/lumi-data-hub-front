import React from 'react';
import { IconSortAscending, IconSortDescending, IconFilter } from '@tabler/icons-react';

interface IFilterItem {
  alias?: string;
  name: string;
  type?: 'text' | 'number';
  sortable?: boolean;
  selected?: boolean;
  onClick?: (order: 'asc' | 'desc', orderBy: string) => void;
}

export default function FilterItem({
  alias,
  name,
  type = 'text',
  sortable = true,
  selected = false,
  onClick,
}: IFilterItem) {
  const [isAscending, setIsAscending] = React.useState(true);

  const handlerOrder = () => {
    const order = isAscending ? 'asc' : 'desc';
    setIsAscending(!isAscending);
    onClick && onClick(order, name);
  };

  return (
    <div
      className={`flex flex-row items-center justify-center w-1/6 h-16 ${sortable ? 'cursor-pointer' : 'cursor-auto'} ${selected ? 'bg-highlight' : ''}`}
      onClick={handlerOrder}
    >
      {sortable && !selected && (
        <IconFilter
          size={20}
          stroke={1.5}
          className='text-white'
        />
      )}
      {sortable && selected && (
        isAscending ? (
          <IconSortAscending
            size={20}
            stroke={1.5}
            className='text-white'
          />
        ) : (
          <IconSortDescending
            size={20}
            stroke={1.5}
            className='text-white'
          />
        )
      )}
      <p className="font-semibold text-white ml text-md">
        {alias || name}
      </p>
    </div>
  );
}
