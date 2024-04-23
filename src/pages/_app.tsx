import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Header from "@/components/ui/Header";
import "@/styles/globals.css";
import { RecoilRoot } from "recoil";

// Define the props to include session data
type MyAppProps = AppProps & {
  pageProps: {
    session: any;
  };
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

