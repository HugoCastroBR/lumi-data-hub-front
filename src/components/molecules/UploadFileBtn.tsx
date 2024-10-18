import { IconUpload } from "@tabler/icons-react";
import { createBill } from "../api/bill";

export default function UploadFileBtn({
  onFileUpload
}:{onFileUpload: () => void }) {

  const handleSubmit = async (file: File) => {
    if (!file) {
      console.log(file)
      console.error("Nenhum arquivo selecionado.");
      return;
    }
    
    const createdBill = await createBill(file);

    if (createdBill) {
      console.log('Fatura criada com sucesso:', createdBill);
      onFileUpload();
    } else {
      console.error('Falha ao criar a fatura');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      handleSubmit(selectedFile); 
    }
  };

  return (
    <div className='flex items-center justify-center w-32 h-10 shadow-md rounded-xl'>
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
        onChange={handleFileChange} 
        hidden
      />
    </div>
  );
}
