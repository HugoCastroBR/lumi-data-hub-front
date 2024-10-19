import { BillStatsProps, BillStatsWithCalculations } from "./interfaces";
import { Bill } from "./types";

export function handlerOrderByFilters(filterName: string) {
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

export function transformBillToBillStats(bill: Bill): BillStatsProps {
  return {
    id: bill.id,
    month: bill.month,
    year: bill.year,
    electricity: parseFloat(bill.electricity),
    electricityCost: parseFloat(bill.electricityCost),
    electricityScee: parseFloat(bill.electricityScee),
    electricitySceeCost: parseFloat(bill.electricitySceeCost),
    electricityCompensated: parseFloat(bill.electricityCompensated),
    electricityCompensatedCost: parseFloat(bill.electricityCompensatedCost),
    electricityPublicCost: parseFloat(bill.electricityPublicCost),
  };
}

export function truncateString(str: string, num: number): string {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export const calculateTotalElectricity = (sortedBillsData: BillStatsProps[]): number => {
  return sortedBillsData.reduce((acc, bill) => Number(acc + bill.electricity), 0);
};

export const calculateTotalCompensated = (sortedBillsData: BillStatsProps[]): number => {
  return sortedBillsData.reduce((acc, bill) => Number(acc) + Number(bill.electricityCompensated), 0);
};

export const calculateTotalCostWithoutGD = (billsWithCalculations: BillStatsWithCalculations[]): number => {
  return billsWithCalculations.reduce((acc, bill) => acc + bill.totalWithoutGD, 0);
};

export const calculateTotalGdrSaving = (billsWithCalculations: BillStatsWithCalculations[]): number => {
  return billsWithCalculations.reduce((acc, bill) => acc + bill.gdrSaving, 0);
};

export const sortBillsByDate = (billsData: BillStatsProps[]): BillStatsProps[] => {
  return [...billsData].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.month - b.month;
  });
}
export const groupMonthlyData = (
  sortedBillsData: BillStatsProps[]
): Record<string, { totalConsumption: number; totalCost: number; count: number }> => {
  return sortedBillsData.reduce((acc, bill) => {
    const monthYear = `${bill.month}/${bill.year}`;
    if (!acc[monthYear]) {
      acc[monthYear] = { totalConsumption: 0, totalCost: 0, count: 0 };
    }
    acc[monthYear].totalConsumption += bill.electricity;
    acc[monthYear].totalCost += bill.electricityCost;
    acc[monthYear].count += 1;
    return acc;
  }, {} as Record<string, { totalConsumption: number; totalCost: number; count: number }>);
};