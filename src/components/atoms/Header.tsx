import { useNavigate } from "react-router-dom";
import { IconHome } from "@tabler/icons-react";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header
      className='flex items-center justify-between w-full h-16 mb-2 bg-primary'
    >
      <div
        className='flex flex-col items-center justify-center w-full h-full'
      >
        <span
          className='text-xl font-bold text-white'
        >
          LUMI DATA HUB
        </span>
        <IconHome
          size={32}
          stroke={1.5}
          className='ml-2 text-white cursor-pointer'
          onClick={() => navigate('/')}
        />
      </div>
    </header>
  )
}