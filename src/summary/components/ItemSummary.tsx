import React from "react";

interface Props {
  label: string;
  value: string;
}

const ItemSummary = ({ label, value }: Props) => {
  return (
    <div className="border-b border-gray-100 py-[10px]">
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <p className="text-sm font-medium leading-6 text-gray-900">{label}</p>
        <p className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {value}
        </p>
      </div>
    </div>
  );
};

export default ItemSummary;
