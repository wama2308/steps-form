import React from "react";
import clsx from "clsx";
import { fechaHoy } from "@/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error: boolean;
  errorMessage: string;
}

/**
 * Componente de input personalizado.
 * @param props Propiedades del input.
 * @returns JSX.Element
 */
const Input = ({
  value,
  label,
  name,
  placeholder,
  type,
  error,
  errorMessage,
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
      <input
        value={value}
        type={type}
        id={name}
        name={name}
        className={clsx(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",
          {
            "bg-red-50 border border-red-500 text-red-500 placeholder-red-500":
              error,
          }
        )}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="new-password"
        max={type === "date" && name === "date_of_birth" ? fechaHoy : ""}
      />
      {error && <p className="mt-2 text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default Input;
