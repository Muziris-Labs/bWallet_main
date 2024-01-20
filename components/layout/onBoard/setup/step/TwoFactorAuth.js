import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

const TwoFactorAuth = () => {
  const [walletDomain,setWalletDomain]=useState();
  return (
    <div className="w-full flex justify-center">
      <div className="w-fit">
      <Typography variant="h4" color="white" className="mb-4">
        Wallet Name
      </Typography>
      <Input
        size="lg"
        placeholder="name@valerium"
        className=" !border-t-blue-gray-400 text-white focus:!border-gray-100 w-[120%]"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        onChange={(e) => setWalletDomain(e.target.value)}
      />
    </div>
    </div>
    
  );
};

export default TwoFactorAuth;
