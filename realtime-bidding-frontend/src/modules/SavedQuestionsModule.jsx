import React, { useState } from "react";

const FormControlConfigurations = () => {
  // State to handle inputs
  const [textFields, setTextFields] = useState([
    { label: "Mobile phone number", currentValue: "6315689520", counter: 22 },
    { label: "How many years of work experience do you have with Python (Programming Language)?", currentValue: "5", counter: 3 },
  ]);

  const [radioFields, setRadioFields] = useState([
    { label: "Will you now, or in the future, require sponsorship for employment visa status?", counter: 6, options: ["Yes", "No"] },
    { label: "Are you legally authorized to work in the United States?", counter: 6, options: ["Yes", "No"] },
  ]);

  const [dropdownFields, setDropdownFields] = useState([
    { label: "Email address", counter: 21, options: ["ahmede7th@gmail.com"] },
    { label: "Phone country code", counter: 21, options: ["United States (+1)"] },
  ]);

  // Handle update and delete actions
  const handleUpdate = (index, newValue, type) => {
    if (type === "text") {
      setTextFields((prev) =>
        prev.map((field, i) => (i === index ? { ...field, currentValue: newValue } : field))
      );
    } else if (type === "dropdown") {
      setDropdownFields((prev) =>
        prev.map((field, i) => (i === index ? { ...field, options: [newValue] } : field))
      );
    }
  };

  const handleDelete = (index, type) => {
    if (type === "text") {
      setTextFields((prev) => prev.filter((_, i) => i !== index));
    } else if (type === "radio") {
      setRadioFields((prev) => prev.filter((_, i) => i !== index));
    } else if (type === "dropdown") {
      setDropdownFields((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-xl font-bold mb-4">Form Control Configurations</h1>
      <p className="text-center mb-6 text-gray-600">
        Here are the questions captured from LinkedIn, you can change the values here and next time
        they show up Auto Apply will use them.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Text Fields */}
        {textFields.map((field, index) => (
          <div key={index} className="border p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">{field.label}</h2>
            <p className="text-sm mb-2">
              <strong>Current Value:</strong> {field.currentValue}
            </p>
            <p className="text-sm mb-4">
              <strong>Counter:</strong> {field.counter}
            </p>
            <input
              type="text"
              className="w-full border p-2 rounded mb-4"
              placeholder="New Default Value"
              onBlur={(e) => handleUpdate(index, e.target.value, "text")}
            />
            <div className="flex justify-between">
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => console.log("Update clicked")}>
                Update
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDelete(index, "text")}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Radio Buttons */}
        {radioFields.map((field, index) => (
          <div key={index} className="border p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">{field.label}</h2>
            <p className="text-sm mb-4">
              <strong>Counter:</strong> {field.counter}
            </p>
            <div className="flex gap-4 mb-4">
              {field.options.map((option, i) => (
                <label key={i} className="flex items-center">
                  <input type="radio" name={`radio-${index}`} className="mr-2" />
                  {option}
                </label>
              ))}
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleDelete(index, "radio")}
            >
              Delete
            </button>
          </div>
        ))}

        {/* Dropdowns */}
        {dropdownFields.map((field, index) => (
          <div key={index} className="border p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">{field.label}</h2>
            <p className="text-sm mb-4">
              <strong>Counter:</strong> {field.counter}
            </p>
            <select
              className="w-full border p-2 rounded mb-4"
              defaultValue={field.options[0]}
              onBlur={(e) => handleUpdate(index, e.target.value, "dropdown")}
            >
              {field.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleDelete(index, "dropdown")}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormControlConfigurations;
