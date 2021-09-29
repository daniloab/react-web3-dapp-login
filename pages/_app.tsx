import type { AppProps } from "next/app";
import { DAppProvider } from "@usedapp/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={{}}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;
