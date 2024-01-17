"use client";

import { Button } from "@material-tailwind/react";

const DefaultButton = ({ children, style, icon, ...props }) => {
  return (
    <Button
      className={`font-grotesque ${style} ${
        icon && " flex items-center justify-center gap-2"
      }`}
      {...props}
    >
      {children}
      {icon && icon}
    </Button>
  );
};

export { DefaultButton };
