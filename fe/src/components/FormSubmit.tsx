import React from 'react';

interface FormSubmitProps {
  disableCondition: boolean;
  additionalStyles?: string;
  value: string;
}

export default function FormSubmit({
  disableCondition,
  additionalStyles,
  value,
}: FormSubmitProps) {
  return (
    <input
      type="submit"
      name="login_button"
      value={value}
      disabled={disableCondition}
      className={`login-area-buttons bg-blue-300 cursor-pointer ${additionalStyles} ${
        disableCondition
          ? 'opacity-50 cursor-default'
          : 'opacity-100 cursor-pointer'
      }`}
    />
  );
}
