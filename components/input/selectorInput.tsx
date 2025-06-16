"use client";

import { ErrorMessage, useField } from "formik";
import React from "react";
import { ApText } from "../typograph/text";

interface Option {
  label: string;
  value: string;
}

interface IProps {
  label?: string;
  name: string;
  options: Option[];
  containerClassName?: string;
  selectClassName?: string;
  disabled?: boolean;
  ignoreFormik?: boolean;
  onChange?: (val: string) => void;
}

export const ApSelectInput: React.FC<IProps> = ({
  label,
  name,
  options,
  containerClassName = "",
  selectClassName = "",
  disabled = false,
  ignoreFormik = false,
  onChange,
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!ignoreFormik) {
      helpers.setValue(e.target.value);
    }
    onChange?.(e.target.value);
  };

  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {label && (
        <ApText className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </ApText>
      )}
      <select
        id={name}
        className={`w-full h-11 rounded-md border border-gray-300 px-3 text-sm focus:border-black focus:outline-none disabled:opacity-50 ${selectClassName}`}
        disabled={disabled}
        {...(!ignoreFormik ? field : {})}
        onChange={handleChange}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {!ignoreFormik && meta.touched && meta.error && (
        <div className="mt-1 text-xs text-red-500">{meta.error}</div>
      )}
    </div>
  );
};
