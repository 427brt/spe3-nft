import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    sdkOptions={{
      gasless: {
        openzeppelin: {
          relayerUrl: "https://api.defender.openzeppelin.com/autotasks/77d75582-48a4-4f84-9b21-4b9d32c587d6/runs/webhook/26c6522d-02d9-4931-8267-af1ff71eaab6/9jndWsSGoyATs6qNR5Adfq",
        },
      },
    }}
    activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
