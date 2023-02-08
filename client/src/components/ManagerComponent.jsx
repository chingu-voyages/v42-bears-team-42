import React, { useState } from "react";
import Scheduler from "./Scheduler/Scheduler";

export default function ManagerComponent() {
  const [activeTab, setActiveTab] = useState('scheduler');

  return (
    <div className="w-full h-full flex flex-col">
      <div className="tabRow flex flex-row h-2/6 bg-gray-500">
        <div onClick={() => setActiveTab('scheduler')} className="tabLeft w-1/2 py-2 text-center rounded-lg border-2 border-purple-700 bg-white">Scheduler</div>
        <div onClick={() => setActiveTab('employee')} className="tabRight w-1/2 py-2 text-center rounded-lg border-2 border-purple-700">Employee Management</div>
      </div>
      <div className="tabContent">
        { activeTab === 'scheduler' ? <Scheduler /> : <Scheduler /> }

      </div>
    </div>
  );
}
