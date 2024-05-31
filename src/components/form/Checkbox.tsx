import React from "react";
import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error: boolean;
  errorMessage: string;
}

const Checkbox = ({
  value,
  label,
  name,
  error,
  errorMessage,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-4">
        <input
          id={name}
          name={name}
          type="checkbox"
          value={value}
          className={clsx(
            "w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600",
            {
              "border border-red-600 focus:ring-red-700 appearance-none rounded-full checked:bg-red-600":
                error,
            }
          )}
          onChange={onChange}
        />
        <label
          htmlFor={name}
          className={clsx("text-sm ms-2 font-medium text-gray-900", {
            "text-red-500": error,
          })}
        >
          {label}
        </label>
      </div>
      {error && (
        <p className="mt-2 text-xs text-red-500">Username already taken!</p>
      )}
    </div>
  );
};

export default Checkbox;
