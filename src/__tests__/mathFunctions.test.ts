import handlerOrderByFilters, {
  transformBillToBillStats,
  truncateString,
  calculateTotalElectricity,
  calculateTotalCompensated,
  calculateTotalCostWithoutGD,
  calculateTotalGdrSaving,
  sortBillsByDate,
  groupMonthlyData
} from '../utils/functions'; // Substitua pelo caminho correto
import { BillStatsProps, BillStatsWithCalculations } from '../utils/interfaces';
import { Bill } from '../utils/types';

describe('handlerOrderByFilters', () => {
  it('should return "clientName" for "Name" filter', () => {
    expect(handlerOrderByFilters('Name')).toBe('clientName');
  });

  it('should return "UcRegisterN" for "UcRegisterN" filter', () => {
    expect(handlerOrderByFilters('UcRegisterN')).toBe('UcRegisterN');
  });

  it('should return "id" for unknown filter', () => {
    expect(handlerOrderByFilters('unknown')).toBe('id');
  });
});

describe('transformBillToBillStats', () => {
  const bill: Bill = {
    id: 1,
    month: 5,
    year: 2023,
    electricity: '100.5',
    electricityCost: '50.75',
    electricityScee: '20.1',
    electricitySceeCost: '10.3',
    electricityCompensated: '30.5',
    electricityCompensatedCost: '15.2',
    electricityPublicCost: '5.0',
    filename: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    ucId: 0
  };

  it('should transform Bill to BillStatsProps', () => {
    const result = transformBillToBillStats(bill);
    expect(result).toEqual({
      id: 1,
      month: 5,
      year: 2023,
      electricity: 100.5,
      electricityCost: 50.75,
      electricityScee: 20.1,
      electricitySceeCost: 10.3,
      electricityCompensated: 30.5,
      electricityCompensatedCost: 15.2,
      electricityPublicCost: 5.0,
    });
  });
});

describe('truncateString', () => {
  it('should truncate a string that exceeds the given length', () => {
    expect(truncateString('This is a long string', 10)).toBe('This is a ...');
  });

  it('should return the string as is if it does not exceed the length', () => {
    expect(truncateString('Short', 10)).toBe('Short');
  });
});

describe('calculateTotalElectricity', () => {
  it('should calculate the total electricity', () => {
    const bills: BillStatsProps[] = [
      { electricity: 100, month: 1, year: 2021, id: 1, electricityCost: 0, electricityScee: 0, electricitySceeCost: 0, electricityCompensated: 0, electricityCompensatedCost: 0, electricityPublicCost: 0 },
      { electricity: 200, month: 2, year: 2021, id: 2, electricityCost: 0, electricityScee: 0, electricitySceeCost: 0, electricityCompensated: 0, electricityCompensatedCost: 0, electricityPublicCost: 0 }
    ];
    expect(calculateTotalElectricity(bills)).toBe(300);
  });
});

describe('calculateTotalCompensated', () => {
  it('should calculate the total compensated electricity', () => {
    const bills: BillStatsProps[] = [
      { electricityCompensated: 50, month: 1, year: 2021, id: 1, electricity: 0, electricityCost: 0, electricityScee: 0, electricitySceeCost: 0, electricityCompensatedCost: 0, electricityPublicCost: 0 },
      { electricityCompensated: 100, month: 2, year: 2021, id: 2, electricity: 0, electricityCost: 0, electricityScee: 0, electricitySceeCost: 0, electricityCompensatedCost: 0, electricityPublicCost: 0 }
    ];
    expect(calculateTotalCompensated(bills)).toBe(150);
  });
});

describe('calculateTotalCostWithoutGD', () => {
  it('should calculate total cost without GD', () => {
    const bills: BillStatsWithCalculations[] = [
      {
        totalWithoutGD: 200, gdrSaving: 0,
        id: 0,
        month: 0,
        year: 0,
        electricity: 0,
        electricityCost: 0,
        electricityScee: 0,
        electricitySceeCost: 0,
        electricityCompensated: 0,
        electricityCompensatedCost: 0,
        electricityPublicCost: 0
      },
      {
        totalWithoutGD: 300, gdrSaving: 0,
        id: 0,
        month: 0,
        year: 0,
        electricity: 0,
        electricityCost: 0,
        electricityScee: 0,
        electricitySceeCost: 0,
        electricityCompensated: 0,
        electricityCompensatedCost: 0,
        electricityPublicCost: 0
      }
    ];
    expect(calculateTotalCostWithoutGD(bills)).toBe(500);
  });
});

describe('calculateTotalGdrSaving', () => {
  it('should calculate total GDR saving', () => {
    const bills: BillStatsWithCalculations[] = [
      {
        totalWithoutGD: 0, gdrSaving: 50,
        id: 0,
        month: 0,
        year: 0,
        electricity: 0,
        electricityCost: 0,
        electricityScee: 0,
        electricitySceeCost: 0,
        electricityCompensated: 0,
        electricityCompensatedCost: 0,
        electricityPublicCost: 0
      },
      {
        totalWithoutGD: 0, gdrSaving: 100,
        id: 0,
        month: 0,
        year: 0,
        electricity: 0,
        electricityCost: 0,
        electricityScee: 0,
        electricitySceeCost: 0,
        electricityCompensated: 0,
        electricityCompensatedCost: 0,
        electricityPublicCost: 0
      }
    ];
    expect(calculateTotalGdrSaving(bills)).toBe(150);
  });
});

describe('sortBillsByDate', () => {
  it('should sort bills by year and month', () => {
    const bills: BillStatsProps[] = [
      { id: 1, month: 3, year: 2022, electricity: 0, electricityCost: 0, electricityScee: 0, electricitySceeCost: 0, electricityCompensated: 0, electricityCompensatedCost: 0, electricityPublicCost: 0 },
      { id: 2, month: 1, year: 2022, electricity: 0, electricityCost: 0, electricityScee: 0, electricitySceeCost: 0, electricityCompensated: 0, electricityCompensatedCost: 0, electricityPublicCost: 0 },
      { id: 3, month: 12, year: 2021, electricity: 0, electricityCost: 0, electricityScee: 0, electricitySceeCost: 0, electricityCompensated: 0, electricityCompensatedCost: 0, electricityPublicCost: 0 },
    ];
    const sorted = sortBillsByDate(bills);
    expect(sorted.map(bill => bill.id)).toEqual([3, 2, 1]);
  });
});

describe('groupMonthlyData', () => {
  it('should group data by month and year', () => {
    const bills: BillStatsProps[] = [
      { id: 1, month: 1, year: 2021, electricity: 100, electricityCost: 50, electricityScee: 0, electricitySceeCost: 0, electricityCompensated: 0, electricityCompensatedCost: 0, electricityPublicCost: 0 },
      { id: 2, month: 1, year: 2021, electricity: 200, electricityCost: 100, electricityScee: 0, electricitySceeCost: 0, electricityCompensated: 0, electricityCompensatedCost: 0, electricityPublicCost: 0 }
    ];
    const grouped = groupMonthlyData(bills);
    expect(grouped).toEqual({
      '1/2021': { totalConsumption: 300, totalCost: 150, count: 2 }
    });
  });
});
