"use client";

type Props = {
  icon: any;
  title: string;
  value: number;
};

const StatisticCard = ({ icon, title, value }: Props) => {
  return (
    <div className="rounded-2xl p-4 border flex-1 min-w-[130px] bg-slate-50 dark:bg-transparent">
      {/* <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white dark:text-gray-500 px-2 py-1 rounded-full">
          2024/05
        </span>
        <MoreHorizontalIcon />
      </div> */}
      <div className="flex justify-between items-center py-1">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-lg">
          {icon}
        </div>
        <h1 className="text-2xl font-medium my-4">+{value}</h1>
      </div>
      <h2 className="capitalize text-sm font-medium">{title}</h2>
    </div>
  );
};

export default StatisticCard;
