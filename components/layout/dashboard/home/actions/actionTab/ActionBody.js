import { TabPanel, TabsBody } from "@material-tailwind/react";

import SwapBody from "../SwapBody";
import DepositBody from "../DepositBody";
import TransferBody from "../TransferBody";

const ActionBody = () => {
  const data = [
    {
      label: "Transfer",
      value: "transfer",
      body: <TransferBody />,
    },
    {
      label: "Deposit",
      value: "deposit",
      body: <DepositBody />,
    },
    {
      label: "Swap",
      value: "swap",
      body: <SwapBody />,
    },
  ];

  return (
    <TabsBody>
      {data.map(({ value, body }) => (
        <TabPanel key={value} value={value}>
          {body}
        </TabPanel>
      ))}
    </TabsBody>
  );
};

export default ActionBody;
