import React from "react";
import clsx from "clsx";

interface IOptions {
  label: string;
  value: string;
}

interface Props
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
  error: boolean;
  errorMessage: string;
  options: IOptions[];
}

const Select = ({
  label,
  name,
  error,
  errorMessage,
  options,
  onChange,
  onBlur,
}: Props) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className={clsx("block mb-2 text-sm font-medium text-gray-900", {
          "text-red-500": error,
        })}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={clsx(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          {
            "bg-red-50 border border-red-500 text-red-500 placeholder-red-500":
              error,
          }
        )}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">Seleccione...</option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-2 text-xs text-red-500">Username already taken!</p>
      )}
    </div>
  );
};

export default Select;
