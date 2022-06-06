import Link from "next/link";
import React, { ReactNode } from "react";

export const SubLinkMenu: React.FC<{
  children: ReactNode;
  link: string;
}> = ({ children, link }) => {
  return (
    <Link href={link}>
      <div className="">{children}</div>
    </Link>
  );
};

export const LinkWrap: React.FC<{
  children: ReactNode;
  link: string;
}> = ({ children, link }) => {
  return <Link href={link}>{children}</Link>;
};
