import { BillStatsProps } from "../organisms/BillsStats";
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