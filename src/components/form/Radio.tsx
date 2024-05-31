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

const Radio = ({
  value,
  label,
  name,
  id,
  error,
  errorMessage,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-4">
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          className={clsx(
            "w-5 h-5 border-gray-300 focus:ring-2 focus:ring-blue-300",
            {
              "border border-red-600 focus:ring-red-700 appearance-none rounded-full checked:bg-red-600":
                error,
            }
          )}
          onChange={onChange}
        />
        <label
          htmlFor={id}
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

export default Radio;
