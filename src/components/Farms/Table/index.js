import Header from "./Header";
import NoResults from "./NoResults";
import React from "react";
//import ColumnActions from "../Columns/ActionsStacked";
//import { getUserFarms } from "../getUserFarms";
import { useActiveWeb3React } from "../../../services/exchange/hooks";

const TableFarms = ({ title, farms, columns, requestSort, getClassNamesFor }) => {
  const { account } = useActiveWeb3React();

  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <div className="sushi-inline-block sushi-min-w-full sushi-align-middle sushi-shadow sm:sushi-rounded-lg">
          <table className="sushi-min-w-full sushi-divide-y sushi-divide-gray-200">
            <thead>
              <tr>
                {columns.map((header, index) => {
                  // If no wallet connected and column does not depend on wallet
                  if (header.account === false && header.selected === true) {
                    return (
                      <Header
                        key={header.name + "_" + index}
                        header={header}
                        index={index}
                        requestSort={requestSort}
                        getClassNamesFor={getClassNamesFor}
                      />
                    );
                  }
                  if (account && header.account && header.selected === true) {
                    return (
                      <Header
                        key={header.name + "_" + index}
                        header={header}
                        index={index}
                        requestSort={requestSort}
                        getClassNamesFor={getClassNamesFor}
                      />
                    );
                  }
                })}
              </tr>
            </thead>
            <tbody className="sushi-bg-white sushi-divide-y sushi-divide-grays-200">
              {farms && farms.length > 0
                ? farms.map((farm) => {
                    // Temporary measure until subgraph is updated
                    if (farm?.liquidityPair?.token0?.symbol === "yyDAI+yUSDC+yUSDT+yTUSD") {
                      farm.liquidityPair.token0.symbol = "yUSD";
                    }
                    return (
                      <tr>
                        {columns.map((column) => {
                          if (column.account === false && column.selected === true) {
                            return React.cloneElement(column.component, { farm });
                          }
                          if (account && column.account && column.selected === true) {
                            return React.cloneElement(column.component, { farm });
                          }
                        })}
                        {/* {account ? (
                          <>
                            <ColumnActions farmId={farm.id} farm={farm} />
                          </>
                        ) : null} */}
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
      {!farms || (farms && farms.length === 0) ? <NoResults /> : null}
    </>
  );
};

export default TableFarms;
