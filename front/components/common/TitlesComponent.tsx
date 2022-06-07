import React, { ReactNode } from "react";

export const QuestionTitle: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="font-bold text-xl">{children}</div>;
};
