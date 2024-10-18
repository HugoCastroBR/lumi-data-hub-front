import React from 'react';

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
}

const BillStats = ({
  id,
  month,
  year,
  electricity,
  electricityCost,
  electricityScee,
  electricitySceeCost,
  electricityCompensated,
  electricityCompensatedCost,
  electricityPublicCost,
}: BillStatsProps) => {
  const totalElectricity = electricity + electricityScee;
  const totalCostWithoutGD = electricityCost + electricitySceeCost + electricityPublicCost;
  const economyGD = electricityCompensatedCost;

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-bold">
        Estatísticas de Conta - {month}/{year}
      </h2>
      <div className="mt-2">
        <div className="flex justify-between">
          <span>Consumo de Energia Elétrica (kWh):</span>
          <span>{totalElectricity} kWh</span>
        </div>
        <div className="flex justify-between">
          <span>Energia Compensada (kWh):</span>
          <span>{electricityCompensated} kWh</span>
        </div>
        <div className="flex justify-between">
          <span>Valor Total sem GD (R$):</span>
          <span>R$ {totalCostWithoutGD.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Economia GD (R$):</span>
          <span>R$ {economyGD.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default BillStats;
