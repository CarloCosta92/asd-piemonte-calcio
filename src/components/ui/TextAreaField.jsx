import React from "react";

const TextAreaField = ({ label, error, rows = 4, ...props }) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <textarea
        rows={rows}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary-light)"
        {...props}
      />
      {error && <p className="text-(--color-error) text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextAreaField;
