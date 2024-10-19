import { useNavigate } from "react-router-dom";
import { IconHome } from "@tabler/icons-react";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header
      className='flex items-center justify-between w-full h-16 mb-2 bg-primary'
    >
      <div
        className='flex flex-row items-center justify-around w-full h-full'
      >
        <IconHome
          size={32}
          stroke={1.5}
          className='ml-4 text-white cursor-pointer'
          onClick={() => navigate('/')}
        />
        <span
          className='flex items-center w-full h-full ml-4 text-xl font-bold text-white'
        >
          LUMI DATA HUB
        </span>
      </div>
    </header>
  )
}