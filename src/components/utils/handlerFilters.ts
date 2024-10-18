export default function handlerFilters(filterName: string) {
  switch (filterName) {
    case 'Name':
      return 'clientName';
    case 'UcRegisterN':
      return 'UcRegisterN';
    case "ClientName":
      return 'clientName'
    default:
      return 'id'; 
  }
}
