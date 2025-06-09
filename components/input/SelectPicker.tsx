import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";

interface Option {
  value: string;
  label: string;
}

interface SelectPickerProps {
  label?: string;
  options: Option[];
  selectedValues: string[] | string;
  onChange: (values: string[] | string) => void;
  placeholder?: string;
  isMulti?: boolean;
  isCreatable?: boolean;
}

export const SelectPicker: React.FC<SelectPickerProps> = ({
  label = "Select options",
  options,
  selectedValues,
  onChange,
  placeholder = "Select or type...",
  isMulti = true,
  isCreatable = false,
}) => {
  // Keep internal state for options to support adding new tags
  const [internalOptions, setInternalOptions] = useState<Option[]>(options);

  useEffect(() => {
    // Sync internalOptions if props.options change
    setInternalOptions(options);
  }, [options]);

  const selectedOption = isMulti
    ? internalOptions.filter((opt) =>
        (selectedValues as string[]).includes(opt.value)
      )
    : internalOptions.find((opt) => opt.value === selectedValues) || null;

  const handleChange = (selected: any) => {
    if (isMulti) {
      const values = selected ? selected.map((opt: Option) => opt.value) : [];
      onChange(values);
    } else {
      onChange(selected ? selected.value : "");
    }
  };

  const handleCreate = (inputValue: string) => {
    const newOption = { label: inputValue, value: inputValue };
    const newOptions = [...internalOptions, newOption];
    setInternalOptions(newOptions);

    // Also update selectedValues immediately
    if (isMulti) {
      const updatedValues = [...(selectedValues as string[]), inputValue];
      onChange(updatedValues);
    } else {
      onChange(inputValue);
    }
  };

  return (
    <div>
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <CreatableSelect
        isMulti={isMulti}
        value={selectedOption}
        options={internalOptions}
        onChange={handleChange}
        onCreateOption={isCreatable ? handleCreate : undefined}
        placeholder={placeholder}
        className="text-sm"
        classNamePrefix="select"
        isClearable
      />
    </div>
  );
};
