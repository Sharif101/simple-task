import React, { useState } from "react";
import { accordionData } from "../../data/simpledata";

const AccordionItem = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-gray-200 pl-${depth * 2}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 bg-slate-50 hover:bg-slate-100 transition"
      >
        <span className="font-medium text-slate-700 text-left">
          {item.title}
        </span>
        <span
          className={`text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="px-4 py-3 bg-white border-t border-gray-100 animate-slideDown text-slate-600">
          <p className="mb-3">{item.content}</p>
          {item.children.length > 0 && (
            <div className="pl-4 border-l-2 border-blue-500">
              {item.children.map((child) => (
                <AccordionItem key={child.id} item={child} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function NestedAccordion() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-300 rounded-md shadow">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">
        Custom Accordion with Nested Items
      </h2>

      <div className="rounded overflow-hidden border border-gray-200">
        {accordionData.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
