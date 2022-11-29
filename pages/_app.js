import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      {/* Next Auth Session Provider */}
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>web3sdkio Community Rewards Example</title>
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </Web3sdkioProvider>
  );
}

export default MyApp;
