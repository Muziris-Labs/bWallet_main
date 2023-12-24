import { store } from "@/redux/store";
import localFont from "next/font/local";
import ReduxProvider from "@/provider/ReduxProvider";

import "./globals.css";

const grotesque = localFont({
  src: [
    {
      path: "../public/fonts/basis-grotesque/BasisGrotesqueArabicPro-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/basis-grotesque/BasisGrotesqueArabicPro-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/basis-grotesque/BasisGrotesqueArabicPro-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/basis-grotesque/BasisGrotesqueArabicPro-Bold.woff2",
      weight: "700",
    },
  ],

  variable: "--font-grotesque",
});

const clashDisplay = localFont({
  src: "../public/fonts/clash-display/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
});

const conthrax = localFont({
  src: "../public/fonts/conthrax/conthrax-sb.ttf",
  variable: "--font-conthrax",
});

const neue = localFont({
  src: [
    {
      path: "../public/fonts/neue-machina/NeueMachina-Ultralight.woff2",
      weight: "200",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Ultrabold.woff2",
      weight: "800",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Black.woff2",
      weight: "900",
    },
  ],

  variable: "--font-neue",
});

export const metadata = {
  title: "B-Wallet",
  description: "By Bankless DAO",
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${grotesque.variable} ${clashDisplay.variable} ${conthrax.variable} ${neue.variable}`}
      lang="en"
    >
      <body className="overflow-x-hidden font-grotesque">
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </body>
    </html>
  );
}
