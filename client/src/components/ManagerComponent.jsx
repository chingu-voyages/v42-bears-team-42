import React, { useState } from "react";
import Scheduler from "./Scheduler/Scheduler";
import EmployeeManageComponent from "./EmployeeManageComponent";

export default function ManagerComponent() {
  const [activeTab, setActiveTab] = useState('scheduler');
  const tabStyle = 'w-1/2 py-2 text-center rounded-lg border-2 border-purple-700';
  const activeScheduler = activeTab === 'scheduler' ? 'bg-white' : '';
  const activeEmployee = activeTab === 'employee' ? 'bg-white' : '';

  return (
    <div className="w-full h-full flex flex-col">
      <div className="tabRow flex flex-row h-2/6 bg-gray-500">
        <div onClick={(e) => setActiveTab('scheduler')} className={`${tabStyle} ${activeScheduler}`}>
          Scheduler
        </div>
        <div onClick={(e) => setActiveTab('employee')} className={`${tabStyle} ${activeEmployee}`}>
          Employee Management
        </div>
      </div>
      <div className="tabContent">
        { activeTab === 'scheduler' ? <Scheduler /> : <EmployeeManageComponent /> }
      </div>
    </div>
  );
}