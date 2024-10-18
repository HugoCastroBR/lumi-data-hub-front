import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import SummaryCard from '../molecules/SummaryCard';
import { BillStatsProps } from './BillsStats';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement);

interface IBillCharts {
  billsData: BillStatsProps[];
}

export default function BillsCharts({ billsData }: IBillCharts) {

  const billsWithCalculations = billsData.map(bill => ({
    ...bill,
    totalWithoutGD: bill.electricityCost + bill.electricitySceeCost + bill.electricityPublicCost,
    gdrSaving: bill.electricityCompensatedCost,
  }));




  const energyData = {
    labels: billsData.map(bill => `${bill.month}/${bill.year}`),
    datasets: [
      {
        label: 'Consumo de Energia Elétrica (kWh)',
        data: billsData.map(bill => bill.electricity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Energia Compensada (kWh)',
        data: billsData.map(bill => bill.electricityCompensated),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const totalElectricity = billsData.reduce((acc, bill) => acc + bill.electricity, 0);
  const totalCompensated = billsData.reduce((acc, bill) => acc + bill.electricityCompensated, 0);
  const totalCostWithoutGD = billsWithCalculations.reduce((acc, bill) => acc + bill.totalWithoutGD, 0);
  const totalGdrSaving = billsWithCalculations.reduce((acc, bill) => acc + bill.gdrSaving, 0);
  const totalEconomyGD = billsWithCalculations.reduce((acc, bill) => acc + bill.gdrSaving, 0);


  const financialData = {
    labels: billsData.map(bill => `${bill.month}/${bill.year}`),
    datasets: [
      {
        label: 'Valor Total sem GD (R$)',
        data: billsWithCalculations.map(bill => bill.totalWithoutGD),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Economia GD (R$)',
        data: billsWithCalculations.map(bill => -bill.gdrSaving),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Custo Total (R$)',
        data: billsWithCalculations.map(bill => bill.totalWithoutGD + bill.gdrSaving),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };


  const pricePerKWhData = {
    labels: billsData.map(bill => `${bill.month}/${bill.year}`),
    datasets: [
      {
        label: 'Preço por kWh (R$)',
        data: billsData.map(bill => (bill.electricityCost / bill.electricity).toFixed(2)),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const averageConsumption = billsData.reduce((acc, bill) => acc + bill.electricity, 0) / billsData.length;
  const averageCost = billsData.reduce((acc, bill) => acc + bill.electricityCost, 0) / billsData.length;


  
  const averageConsumptionData = {
    labels: ['Média'],
    datasets: [
      {
        label: 'Média de Consumo (kWh)',
        data: [averageConsumption.toFixed(2)],
        backgroundColor: 'rgba(54, 235, 162, 0.6)',
        borderColor: 'rgba(54, 235, 162, 1)',
        borderWidth: 1,
      },
      {
        label: 'Média de Custo (R$)',
        data: [averageCost.toFixed(2)],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="flex flex-col items-center">
      <h1 className="my-6 text-3xl font-bold">Resumo de Consumo e Finanças</h1>
      <div className="flex flex-wrap justify-center mb-8">
        <SummaryCard title="Total de Energia (kWh)" value={totalElectricity.toFixed(2)} />
        <SummaryCard title="Energia Compensada (kWh)" value={totalCompensated.toFixed(2)} />
        <SummaryCard title="Valor Total sem GD (R$)" value={totalCostWithoutGD.toFixed(2)} unit="R$" />
        <SummaryCard title="Economia GD (R$)" value={totalGdrSaving.toFixed(2)} unit="R$" />
      </div>
      <div className="w-10/12 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Consumo de Energia Elétrica vs Energia Compensada (kWh)</h2>
        <Bar data={energyData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
      <div className="w-10/12 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Valor Total sem GD vs Economia GD (R$) vs Custo Total (R$)</h2>
        <Bar data={financialData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
      <div className="w-10/12 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Valor Total sem GD, Economia GD e Custo Total (R$) em linha</h2>
        <Line
          data={financialData}options={{responsive: true,plugins: {legend: { position: 'top' },},
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
      <div className="w-10/12 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Preço por kWh (R$)</h2>
        <Line data={pricePerKWhData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
      <div className="w-10/12">
        <h2 className="mb-4 text-2xl font-semibold">Média de Consumo e Custo</h2>
        <Bar data={averageConsumptionData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
    </div>
  );
}

