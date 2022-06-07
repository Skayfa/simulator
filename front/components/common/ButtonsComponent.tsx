import React, { ReactNode } from "react";

export const NextStepButton: React.FC<{
  children: ReactNode;
  onClick: any;
}> = ({ children, onClick }) => {
  return (
    <button
      className="bg-yellow-600 px-5 py-3
        hover:cursor-pointer hover:bg-yellow-700
        rounded-full text-xl text-white"
      onClick={onClick}
      type="submit"
    >
      {children}
    </button>
  );
};
