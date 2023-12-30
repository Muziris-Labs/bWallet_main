import ReduxProvider from "@/provider/ReduxProvider";

import { tokensStore } from "@/redux/tokensStore";

export const metadata = {
  title: "B-Wallet | Tokens",
  description: "By Bankless DAO",
};

export default function TokensLayout({ children }) {
  return <ReduxProvider store={tokensStore}>{children}</ReduxProvider>;
}
