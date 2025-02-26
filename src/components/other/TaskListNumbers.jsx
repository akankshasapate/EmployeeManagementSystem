import React from "react";

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex flex-wrap w-full justify-between gap-5 mt-24 px-2">
       <div className="w-80 h-24 p-5 bg-[#6495ED] rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-semibold text-white">New Task</h3>
      </div>

      <div className="w-80 h-24 p-5 bg-[#98FB98] rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-semibold text-white">Completed Task</h3>
      </div>

      <div className="w-80 h-24 p-5 bg-[#FFD700] rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-black">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-semibold text-black">Accepted Task</h3>
      </div>

      <div className="w-80 h-24 p-5 bg-[#F08080] rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-semibold text-white">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;