
const api = process.env.api || 'http://localhost:8080/';

export const createBill = async (file: File): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append('title', file.name);
    formData.append('file', file);

    const response = await fetch(`${api}bills`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Failed to create bill');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

