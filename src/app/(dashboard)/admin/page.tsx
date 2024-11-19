import React from "react";

import { BoxesIcon, ChartBarIcon, User2Icon, UserPlusIcon } from "lucide-react";
import EventCalendar from "../../components/EventCalendar";
import { PieChartStudents } from "../../components/PieChart";
import CountChart from "../../components/RadialChart";
import StatisticCard from "../../components/StatisticCard";

export const statisticsCardsData = [
  {
    id: 1,
    color: "gray",
    icon: BoxesIcon,
    title: "Today's Money",
    value: 53,
  },
  {
    id: 2,
    color: "gray",
    icon: User2Icon,
    title: "Today's Users",
    value: 2300,
  },
  {
    id: 3,
    color: "gray",
    icon: UserPlusIcon,
    title: "New Clients",
    value: 3462,
  },
  {
    id: 4,
    color: "gray",
    icon: ChartBarIcon,
    title: "Sales",
    value: 103430,
  },
];

const AdminPage = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        <div className="flex gap-4 justify-between flex-wrap">
          {statisticsCardsData.map((data) => (
            <StatisticCard
              key={data.id}
              icon={React.createElement(data.icon, {
                className: "w-6 h-6 text-white",
              })}
              value={data.value}
              title={data.title}
            />
          ))}
        </div>
        {/* Middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <PieChartStudents />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <CountChart />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  );
};

export default AdminPage;
