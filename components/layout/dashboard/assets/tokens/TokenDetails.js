import { TabPanel, TabsBody } from "@material-tailwind/react";

import TokenGraph from "./TokenGraph";
import UserTokenDetails from "./UserTokenDetails";
import TokenDeatilsHeader from "./TokenGraphHeader";

const TokenDetails = () => {
  const data = [
    {
      value: "bank",
    },
    {
      value: "eth",
    },
    {
      value: "usdc",
    },
    {
      value: "usdt",
    },
    {
      value: "base",
    },
  ];

  return (
    <TabsBody>
      {data.map(({ value }) => (
        <TabPanel key={value} value={value}>
          <div className="flex gap-5">
            <TokenGraph />
            <UserTokenDetails tokenName={value} />
          </div>
        </TabPanel>
      ))}
    </TabsBody>
  );
};

export default TokenDetails;
