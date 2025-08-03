import React, { useState } from "react";

const initialData = {
  todo: [
    { id: "1", text: "Task A" },
    { id: "2", text: "Task B" },
  ],
  doing: [{ id: "3", text: "Task C" }],
  done: [{ id: "4", text: "Task D" }],
};

export default function DragAndDrop() {
  const [columns, setColumns] = useState(initialData);
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (task, fromColumn) => {
    setDraggedTask({ task, fromColumn });
  };

  const handleDrop = (toColumn) => {
    if (!draggedTask) return;

    const { task, fromColumn } = draggedTask;
    if (fromColumn === toColumn) return;

    setColumns((prev) => {
      const newFrom = prev[fromColumn].filter((t) => t.id !== task.id);
      const newTo = [...prev[toColumn], task];
      return {
        ...prev,
        [fromColumn]: newFrom,
        [toColumn]: newTo,
      };
    });

    setDraggedTask(null);
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div className="flex gap-6 overflow-auto">
      {Object.entries(columns).map(([columnName, tasks]) => (
        <div
          key={columnName}
          className="bg-white rounded-lg shadow w-1/3 p-4 min-h-[300px] border border-gray-300"
          onDragOver={allowDrop}
          onDrop={() => handleDrop(columnName)}
        >
          <h3 className="text-xl font-semibold mb-4">
            {columnName.toUpperCase()}
          </h3>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-blue-100 hover:bg-blue-200 transition rounded p-3 mb-3 cursor-grab border border-gray-300"
              draggable
              onDragStart={() => handleDragStart(task, columnName)}
            >
              {task.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
