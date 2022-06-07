import React, { ReactNode } from "react";

export const Card: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="h-full w-full bg-white rounded-md shadow-md px-8 py-6">
      {children}
    </div>
  );
};
