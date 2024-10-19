import handlerOrderByFilters from "../utils/functions";
import { GetUcResponse, UC } from "../utils/types";

const api = 'http://localhost:8080/';

export type GetUcByIdResponse = UC | null;

interface IGetAllUc {
  page: number;
  order: 'asc' | 'desc';
  orderby: string;
  search: string;
  year: number;
}

const GetAllUc = async ({ 
  page = 1, 
  order = 'asc',
  orderby = 'id',
  search = '',
  year = 2024

}: IGetAllUc) => {
  
  try {
    const response = await fetch(
      `${api}ucs?page=${page}&order=${order}&orderby=${handlerOrderByFilters(orderby)}${search?`&search=${search}`:''}&year=${year}`
    );
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
