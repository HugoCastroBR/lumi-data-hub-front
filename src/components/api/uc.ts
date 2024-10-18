import { GetUcResponse, UC } from "../utils/types";

const api = 'http://localhost:8080/';

export type GetUcByIdResponse = UC | null;

interface IGetAllUc {
  page: number;
  order: 'asc' | 'desc';
  orderby: string;
  search: string;
}

const GetAllUc = async ({ page = 1, order = 'asc', orderby = 'id', search = '' }: IGetAllUc) => {
  try {
    const response = await fetch(`${api}ucs?page=${page}&order=${order}&orderby=${orderby}${search?`&search=${search}`:''}`);
    if (!response.ok) throw new Error('Failed to fetch data');
    
    const data = await response.json();
    return data as GetUcResponse;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getSpecificUc = async (id: number): Promise<GetUcByIdResponse> => {
  try {
    const response = await fetch(`${api}ucs/${id}`);
    if (!response.ok) throw new Error('Failed to fetch data');
    
    const data = await response.json();
    return data as GetUcByIdResponse;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { GetAllUc,getSpecificUc };
