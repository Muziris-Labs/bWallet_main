"use client";

import { Option, Select } from "@material-tailwind/react";

const BanklessSelect = () => {
  return (
    <Select label="Select Version">
      <Option>Material Tailwind HTML</Option>
      <Option>Material Tailwind React</Option>
      <Option>Material Tailwind Vue</Option>
      <Option>Material Tailwind Angular</Option>
      <Option>Material Tailwind Svelte</Option>
    </Select>
  );
};

export default BanklessSelect;
