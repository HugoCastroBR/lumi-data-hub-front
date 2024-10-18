import { GetUcResponse } from "../utils/types"

const api = 'http://localhost:8080/'

interface IGetAllUc {
  page: number
  order: 'asc' | 'desc'
  orderby: string
}
const GetAllUc = async (
  { page, order, orderby }: IGetAllUc
) => {
  try {
    const req = await fetch(`${api}ucs?page=${page || 1}&order=${order || 'asc'}&orderby=${orderby || 'id'}`)
    const res = await req.json()
    if(res) {
      return res as GetUcResponse
    }else{
      console.log('error')
    }
  } catch (error) {
    console.log(error)
    return 
  }
}

export {
  GetAllUc
}