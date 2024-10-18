import { IconUpload } from "@tabler/icons-react"

export default function UploadFileBtn() {
  return (
    <div
      className='flex items-center justify-center w-32 h-10 shadow-md rounded-xl'
    >
      <label
        htmlFor="custom-input"
        className="flex text-sm font-semibold border-0 cursor-pointer"
      >
        <IconUpload
          size={20}
          stroke={1.5}
          className='mx-1 text-black'
        />
        Upload PDF
      </label>
      <input
        id="custom-input"
        type="file"
        accept=".pdf"
        className="inset-0 w-full h-full cursor-pointer opacity-40"
        hidden
      />
    </div>
  )
}

