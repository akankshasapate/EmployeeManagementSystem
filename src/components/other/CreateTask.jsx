import React, { useState } from "react";

const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    date: "",
    assignTo: "",
    category: "",
    description: "",
  });

  const [newTask, setNewTask] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the new task first
    const taskToAdd = {
      title: taskData.title,
      description: taskData.description,
      date: taskData.date,
      category: taskData.category,
      assignTo: taskData.assignTo, // Add this back as we need it for reference
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    // Set the newTask state
    setNewTask(taskToAdd);

    try {
      // Get employees data from localStorage
      const employeesData = JSON.parse(localStorage.getItem("employees")) || [];
      
      // Find and update the employee with the new task
      const updatedEmployees = employeesData.map(employee => {
        if (employee.firstname === taskData.assignTo) {
          return {
            ...employee,
            tasks: [...(employee.tasks || []), taskToAdd]
          };
        }
        return employee;
      });

      // Save back to localStorage
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));

      localStorage.setItem("emplyees", JSON.stringify(updatedEmployees))
      
      // Reset the form after successful submission
      setTaskData({
        title: "",
        date: "",
        assignTo: "",
        category: "",
        description: "",
      });

      console.log("Task successfully assigned to employee:", taskToAdd);
    } catch (error) {
      console.error("Error handling task submission:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-24">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap w-full gap-8 p-8 rounded-lg bg-[#222222]"
      >
        <div className="w-[45%] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-sm">Task Title</h3>
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              placeholder="Make a UI design"
              required
              className="w-full p-3 rounded bg-[#333333] text-white border border-[#444444] placeholder-gray-400 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white text-sm">Date</h3>
            <input
              type="date"
              name="date"
              value={taskData.date}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-[#333333] text-white border border-[#444444] focus:outline-none focus:border-gray-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white text-sm">Assign to</h3>
            <input
              type="text"
              name="assignTo"
              value={taskData.assignTo}
              onChange={handleChange}
              placeholder="employee name"
              required
              className="w-full p-3 rounded bg-[#333333] text-white border border-[#444444] placeholder-gray-400 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white text-sm">Category</h3>
            <input
              type="text"
              name="category"
              value={taskData.category}
              onChange={handleChange}
              placeholder="design, dev, etc"
              required
              className="w-full p-3 rounded bg-[#333333] text-white border border-[#444444] placeholder-gray-400 focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>

        <div className="w-[45%] flex flex-col gap-2">
          <h3 className="text-white text-sm">Description</h3>
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            required
            className="w-full h-64 p-3 rounded bg-[#333333] text-white border border-[#444444] resize-none focus:outline-none focus:border-gray-500"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-[#66BB6A] hover:bg-[#4CAF50] text-white py-3 px-6 rounded transition-colors duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;