import React from 'react';

type ButtonType = {
  children: React.ReactNode;
  variant?: string;
  textColor?: string;
};

export default function CustomButton(props: ButtonType) {
  const {
    variant = 'bg-orange-50',
    textColor = 'text-black',
    children,
  } = props;

  return (
    <button
      type="button"
      className={`${variant} h-10 rounded-none p-2  ${textColor}`}
    >
      {children}
    </button>
  );
}
