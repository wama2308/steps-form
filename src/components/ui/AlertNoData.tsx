import React from "react";

const AlertNoData = () => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">No hay data de resumen para mostrar!</strong>
    </div>
  );
};

export default AlertNoData;
