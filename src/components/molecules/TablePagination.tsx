import React from 'react'

interface TablePaginationProps {
  page: number
  totalPages: number
}

interface IPageItem {
  text: string,
  active?: boolean
  clickable?: boolean
}

function PageItem({
  text,
  active=false,
  clickable=true
}: IPageItem) {
  return (
    <span
      className={
        `
          flex items-center justify-center w-6 h-6 pb-1 mx-0.5 rounded-lg shadow-md 
          font-bold text-md
          ${active ? 'bg-white' : 'bg-gray-100 text-gray-600'}
          ${clickable ? 'cursor-pointer' : 'cursor-not-allowed'}
        `
      }
    >
      {text}
    </span>
  )
}

export default function TablePagination({
  page,
  totalPages
}: TablePaginationProps) {
  return (
    <div
      className='flex items-center justify-center w-full h-full bg-red-100'
    >
      <PageItem
        text='<'
        clickable={page > 1}
      />
      <PageItem
        text='1'
        active
      />
      <PageItem
        text='>'
        clickable={page < totalPages}
      />

    </div>
  )
}