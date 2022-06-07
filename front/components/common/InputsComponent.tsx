import { Field } from "formik";
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

export const InputCurrencyEuro: React.FC<{ name: string; title: string }> = ({
  name,
  title,
}) => {
  return (
    <div className="">
      <div className="text-lg font-normal">{title}</div>
      <div className="flex items-center">
        <Field
          type="number"
          name={name}
          placeholder={title}
          className="flex-1 border px-8 py-4 rounded-l-lg"
        />
        <div className="border-y border-r rounded-r-lg px-8 py-4">€</div>
      </div>
    </div>
  );
};

export const DelayDropDown: React.FC<{}> = () => {
  return (
    <Field
      name="color"
      as="select"
      className="flex-1 border px-8 py-4 rounded-l-lg"
    >
      {[...Array(25)].map((x, i) => (
        <option key={i} value={25 - i}>
          {i + 1} ans
        </option>
      ))}
    </Field>
  );
};
