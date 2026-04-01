import React from 'react';

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = 'blue',
  disabled = false,
}) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        padding: '10px 20px',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
