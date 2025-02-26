import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, onLogout }) => {
  return (
    <div className="w-screen h-screen bg-[#1c1c1c] flex flex-col p-5">
      <Header data={data} onLogout={onLogout} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;