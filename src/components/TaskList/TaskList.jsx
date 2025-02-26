import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  if (!data?.tasks?.length) {
    return (
      <div className="h-[55%] flex items-center justify-center text-white text-xl">
        No tasks available
      </div>
    );
  }

  const newTasks = data.tasks.filter(task => task.newTask);
  const activeTasks = data.tasks.filter(task => task.active);
  const completedTasks = data.tasks.filter(task => task.completed);
  const failedTasks = data.tasks.filter(task => task.failed);

  return (
    <div className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 py-5 flex-nowrap w-full mt-10">
      {newTasks.map((task, idx) => (
        <NewTask key={`new-${idx}`} data={task} />
      ))}
      {activeTasks.map((task, idx) => (
        <AcceptTask key={`active-${idx}`} data={task} />
      ))}
      {completedTasks.map((task, idx) => (
        <CompletedTask key={`complete-${idx}`} data={task} />
      ))}
      {failedTasks.map((task, idx) => (
        <FailedTask key={`failed-${idx}`} data={task} />
      ))}
    </div>
  );
};

export default TaskList;