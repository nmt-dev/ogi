import React from "react";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return <Component {...pageProps} />;
}
