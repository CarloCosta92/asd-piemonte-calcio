import React, { useEffect } from "react";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success" ? "bg-(--color-success)" : "bg-(--color-error)";

  return (
    <div
      className={`${bgColor} text-white px-6 py-3 rounded-md shadow-md fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in`}
    >
      {message}
    </div>
  );
};

export default Toast;
