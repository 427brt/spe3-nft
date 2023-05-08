import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    sdkOptions={{
      gasless: {
        openzeppelin: {
          relayerUrl: "https://api.defender.openzeppelin.com/autotasks/23ef3f9e-ef7f-4f0e-9655-6cb9e7cbad6b/runs/webhook/26c6522d-02d9-4931-8267-af1ff71eaab6/BfXYmYmkheEgffuFvLQEnf",
        },
      },
    }}
    activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
