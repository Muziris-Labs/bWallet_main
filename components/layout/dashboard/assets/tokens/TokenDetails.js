import { TabPanel, TabsBody } from "@material-tailwind/react";

import TokenGraph from "./tokenGraph/TokenGraph";
import UserTokenDetails from "./UserTokenDetails";

const TokenDetails = ({ tokenData, isLoading }) => {
  const data = [
    {
      name: "bank",
      tokenName: "Bankless",
    },
    {
      name: "eth",
      tokenName: "Ethereum",
    },
    {
      name: "usdc",
      tokenName: "USD Coin",
    },
    {
      name: "usdt",
      tokenName: "Tether",
    },
    {
      name: "base",
      tokenName: "Base",
    },
  ];

  return (
    <TabsBody className="mb-4">
      {data.map(({ name, tokenName }) => (
        <TabPanel key={name} value={name} className="p-0">
          <div className="flex gap-5">
            <TokenGraph
              name={name}
              tokenName={tokenName}
              tokenData={tokenData}
              isLoading={isLoading}
            />

            <UserTokenDetails
              tokenName={name}
              isLoading={isLoading}
              tokenData={tokenData}
            />
          </div>
        </TabPanel>
      ))}
    </TabsBody>
  );
};

export default TokenDetails;
