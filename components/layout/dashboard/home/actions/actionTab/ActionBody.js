import { TabPanel, TabsBody } from "@material-tailwind/react";

import SwapBody from "../../../wallets/swap/SwapBody";
import DepositBody from "../../../wallets/deposit/DepositBody";
import TransferBody from "../../../wallets/transfer/TransferBody";

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
    <TabsBody className="mt-6 overflow-visible">
      {data.map(({ value, body }) => (
        <TabPanel className="p-0" key={value} value={value}>
          {body}
        </TabPanel>
      ))}
    </TabsBody>
  );
};

export default ActionBody;
