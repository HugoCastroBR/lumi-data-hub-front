import { Bill } from "./types";

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

export interface IBillWithCalculations extends Bill {
  totalWithoutGD: number;
  gdrSaving: number;
}

export interface BillStatsProps {
  id: number;
  month: number;
  year: number;
  electricity: number;
  electricityCost: number;
  electricityScee: number;
  electricitySceeCost: number;
  electricityCompensated: number;
  electricityCompensatedCost: number;
  electricityPublicCost: number;
  filename?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  ucId?: number;
  
}

export interface BillStatsWithCalculations extends BillStatsProps {
  totalWithoutGD: number;
  gdrSaving: number;
}
