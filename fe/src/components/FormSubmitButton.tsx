import React from 'react';

interface FormSubmitButtonProps {
  disableCondition: boolean;
  additionalStyles?: string;
  value: string;
}

function FormSubmitButton({
  disableCondition,
  additionalStyles,
  value,
}: FormSubmitButtonProps) {
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

export default React.memo(FormSubmitButton);
