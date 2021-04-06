import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connectors";
import Button from "../components/Button/Button";

enum ConnectorNames {
  Injected = "Injected",
  WalletConnect = "WalletConnect",
}

const connectorsByName: any = {
  [ConnectorNames.Injected]: injected,
  // [ConnectorNames.WalletConnect]: walletconnect,
};

const connectorUi: any = {
  Injected: {
    title: "Connect wallet",
  },
  WalletConnect: {
    title: "Mobile wallet",
  },
};

function Wallet() {
  const { connector, activate, active } = useWeb3React();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  if (!active) {
    return (
      <div className="wallet">
        {Object.keys(connectorsByName).map((name: any) => {
          const currentConnector = connectorsByName[name];

          return (
            <Button
              handler={() => {
                setActivatingConnector(currentConnector);
                activate(connectorsByName[name]);
              }}
              key={name}
            >
              <div className="connector">
                <div className="connector-title">{connectorUi[name].title}</div>
              </div>
            </Button>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Wallet;
