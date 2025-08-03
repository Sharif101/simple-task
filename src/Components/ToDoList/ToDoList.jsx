import React, { useState } from "react";
import { initialListV2 } from "../../data/simpledata";

const initialColumns = {
  todo: {
    title: "To Do",
    items: initialListV2.filter((item) => item.status === "todo"),
  },
  inProgress: {
    title: "In Progress",
    items: initialListV2.filter((item) => item.status === "inProgress"),
  },
  done: {
    title: "Done",
    items: initialListV2.filter((item) => item.status === "done"),
  },
};

let taskIdCounter = initialListV2.length + 1;

export default function ToDoList() {
  const [columns, setColumns] = useState(initialColumns);
  const [draggedItem, setDraggedItem] = useState(null);
  const [newTask, setNewTask] = useState("");
  const [taskColumn, setTaskColumn] = useState("todo");

  const handleDragStart = (e, item, sourceColumn) => {
    setDraggedItem({ item, sourceColumn });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumnKey) => {
    e.preventDefault();
    if (!draggedItem) return;

    const { item, sourceColumn } = draggedItem;

    if (sourceColumn === targetColumnKey) return;

    const newColumns = { ...columns };
    newColumns[sourceColumn].items = newColumns[sourceColumn].items.filter(
      (i) => i.id !== item.id
    );
    newColumns[targetColumnKey].items.push(item);

    setColumns(newColumns);
    setDraggedItem(null);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const newItem = {
      id: taskIdCounter++,
      text: newTask.trim(),
      status: taskColumn,
    };

    const newColumns = { ...columns };
    newColumns[taskColumn].items.push(newItem);
    setColumns(newColumns);
    setNewTask("");
  };

  return (
    <div className="px-4">
      <div className="flex justify-center my-6">
        <div className="flex flex-wrap gap-3 bg-gray-50 shadow p-5 rounded-xl w-full max-w-3xl items-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 min-w-[200px] px-3 py-2 border-2 border-slate-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <select
            value={taskColumn}
            onChange={(e) => setTaskColumn(e.target.value)}
            className="px-3 py-2 border-2 border-slate-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white"
          >
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-700 shadow-md whitespace-nowrap"
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="flex justify-between gap-4 flex-wrap max-w-7xl mx-auto p-6">
        {Object.entries(columns).map(([columnKey, column]) => (
          <div
            key={columnKey}
            className="flex-1 min-w-[300px] max-w-[33%] bg-slate-50 border-2 border-slate-200 rounded-xl p-4 shadow-sm"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, columnKey)}
          >
            <h3 className="text-xl font-bold text-slate-800 text-center mb-4">
              {column.title}
            </h3>
            {column.items.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item, columnKey)}
                className="flex items-center bg-white border-2 border-slate-200 rounded-md px-4 py-3 mb-3 shadow-sm cursor-move hover:border-blue-500 hover:-translate-y-[1px] transition-all duration-200 select-none"
              >
                <span className="text-gray-400 mr-3 text-xl cursor-grab">
                  ⋮⋮
                </span>
                <span className="flex-1 font-medium text-slate-700">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
