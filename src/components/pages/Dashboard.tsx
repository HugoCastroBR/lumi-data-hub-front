import React, { useEffect, useState } from 'react';
import Header from "../atoms/Header";
import BillCard from "../molecules/BillCard";
import DashBoardHeader from "../molecules/DashboardHeader";
import BillsStats from "../organisms/BillsStats";
import BillsCharts from '../organisms/BillsCharts';
import { getSpecificUc } from '../../api/uc';
import { transformBillToBillStats } from '../../utils/functions'
import { useParams } from 'react-router-dom';
import { BillStatsProps } from '../../utils/interfaces';

export default function Dashboard() {
  const [billsData, setBillsData] = useState<BillStatsProps[]>([]);
  const [selectedBill, setSelectedBill] = useState<BillStatsProps | null>(null);
  const [registerN, setRegisterN] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [clientRegisterN, setClientRegisterN] = useState<string>("");
  const { ucid } = useParams();

  const handleCardClick = (bill: BillStatsProps) => {
    setSelectedBill(bill);
  };

  const fetchSpecificUC = async (id: number) => {
    const res = await getSpecificUc(id);
    if (res?.bills) {
      setBillsData(res.bills.map(bill => transformBillToBillStats(bill)));
      setClientName(res.client.name);
      setRegisterN(res.registerN);
      setClientRegisterN(res.client.registerN);
    }
  };
  useEffect(() => {
    if (ucid) {
      fetchSpecificUC(parseInt(ucid));
    }
  }, [ucid]);

  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col w-11/12 overflow-hidden bg-gray-100 shadow-md min-h-96 rounded-xl">
        <DashBoardHeader
          clientName={clientName}
          registerN={registerN}
          clientRegisterN={clientRegisterN}
        />
        <div className="flex flex-wrap justify-center w-auto mt-6 mb-8 overflow-x-auto">
          {billsData.map(bill => (
            <BillCard
              key={bill.id}
              month={bill.month}
              year={bill.year}
              onClick={() => handleCardClick(bill)}
              isSelected={selectedBill?.id === bill.id}
            />
          ))}
        </div>
        {selectedBill &&
          <BillsStats
            key={selectedBill.id}
            id={selectedBill.id}
            month={selectedBill.month}
            year={selectedBill.year}
            electricity={selectedBill.electricity}
            electricityCost={selectedBill.electricityCost}
            electricityScee={selectedBill.electricityScee}
            electricitySceeCost={selectedBill.electricitySceeCost}
            electricityCompensated={selectedBill.electricityCompensated}
            electricityCompensatedCost={selectedBill.electricityCompensatedCost}
            electricityPublicCost={selectedBill.electricityPublicCost}
          />
        }
        <BillsCharts
          billsData={billsData}
        />
      </div>

    </main>
  );
}
