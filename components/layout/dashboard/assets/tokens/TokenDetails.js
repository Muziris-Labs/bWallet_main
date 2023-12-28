import { TabPanel, TabsBody } from "@material-tailwind/react";
import TokenDeatilsHeader from "./TokenDeatilsHeader";
import TokenGraph from "./TokenGraph";

const TokenDetails = () => {
  const data = [
    {
      value: "bankless",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      value: "eth",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      value: "usdc",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      value: "usdt",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      value: "base",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <TabsBody>
      {data.map(({ value, desc }) => (
        <TabPanel key={value} value={value}>
          {desc}
        </TabPanel>
      ))}
    </TabsBody>
  );
};

export default TokenDetails;
