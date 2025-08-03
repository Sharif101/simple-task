import React, { useState } from "react";
import { initialFormFields } from "../../data/simpledata";

const FormField = ({ field, formData, onFieldChange, depth = 0 }) => {
  const shouldShowChildren = field.children.some(
    (child) => !child.condition || formData[field.id] === child.condition
  );

  const renderField = () => {
    switch (field.type) {
      case "text":
      case "email":
      case "number":
        return (
          <input
            type={field.type}
            value={formData[field.id] || ""}
            onChange={(e) => onFieldChange(field.id, e.target.value)}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            className="px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        );

      case "select":
        return (
          <select
            value={formData[field.id] || ""}
            onChange={(e) => onFieldChange(field.id, e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="">Select an option</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      default:
        return null;
    }
  };

  return (
    <div className="my-4" style={{ marginLeft: `${depth * 20}px` }}>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {renderField()}
      </div>

      {shouldShowChildren && field.children.length > 0 && (
        <div className="bg-gray-100 border-l-4 border-blue-500 p-4 rounded-md my-4">
          {field.children
            .filter(
              (child) =>
                !child.condition || formData[field.id] === child.condition
            )
            .map((child) => (
              <FormField
                key={child.id}
                field={child}
                formData={formData}
                onFieldChange={onFieldChange}
                depth={depth + 1}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default function FormBuilder() {
  const [formData, setFormData] = useState({});
  const [fields, setFields] = useState(initialFormFields);

  const handleFieldChange = (fieldId, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const addField = () => {
    const newField = {
      id: Date.now(),
      type: "text",
      label: "New Field",
      required: false,
      children: [],
    };
    setFields((prev) => [...prev, newField]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">
        Mini Form Builder
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Form Preview
          </h3>
          <form className="space-y-4">
            {fields.map((field) => (
              <FormField
                key={field.id}
                field={field}
                formData={formData}
                onFieldChange={handleFieldChange}
              />
            ))}

            <button
              type="button"
              onClick={addField}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md font-medium"
            >
              + Add Field
            </button>
          </form>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Form Data
          </h3>
          <pre className="bg-slate-800 text-slate-100 p-4 rounded-md text-sm max-h-[300px] overflow-y-auto whitespace-pre-wrap font-mono">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
