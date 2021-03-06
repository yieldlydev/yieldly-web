import React from "react";
import ReactDOM from "react-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { providers } from "ethers";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createLocalStoragePersistor } from "react-query/createLocalStoragePersistor-experimental";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: process.env.NODE_ENV === "development" ? 1000 * 30 : 1000 * 60 * 1, // 30 seconds on dev - 1 minute on prod.
    },
  },
});
const localStoragePersistor = createLocalStoragePersistor();
persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});

function getLibrary(provider: any, connector: any) {
  return new providers.Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
