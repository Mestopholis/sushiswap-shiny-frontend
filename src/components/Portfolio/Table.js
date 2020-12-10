import React from "react";
import SushiLogo from "../../assets/img/logo.png";
import xSushiLogo from "../../assets/img/logo-xsushi-background.png";

const Table = ({ balances, price, total, SushiBalanceUSD, totalSushiBalance, totalSushiBalanceUSD }) => {
  return (
    <>
      <div className="flex overflow-hidden bg-white">
        {/* Main column */}
        {/* Title */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
              <div className="ml-4 mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">SUSHI balance</h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">1 SUSHI = {price}</p>
              </div>
              <div className="ml-4 mt-4 flex-shrink-0">
                <h3 className="text-lg text-right leading-6 font-medium text-gray-900">{totalSushiBalanceUSD}</h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">{totalSushiBalance} SUSHI</p>
              </div>
            </div>
          </div>
          {/* Main content */}
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0}>
            <div className="block">
              <div className="align-middle inline-block min-w-full border-b border-gray-200">
                <table className="min-w-full">
                  {/* <TableHead /> */}
                  <tbody className="bg-white divide-y divide-gray-100">
                    {balances &&
                      balances.map((balance) => {
                        return <TableRow balance={balance} />;
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

const TableRow = ({ balance }) => {
  return (
    <>
      <tr>
        <td className="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
          <div className="flex items-center space-x-2">
            <div className="flex flex-shrink-0 -space-x-1">
              <img
                className="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
                src={balance.xsushi ? xSushiLogo : SushiLogo}
                alt="SUSHI"
              />
            </div>
            <div className="flex items-center space-x-3 lg:pl-2">
              {/* <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" /> */}
              <a href="#" className="truncate hover:text-gray-600">
                <span>
                  {balance.title}
                  {/* <span className="text-gray-500 font-normal">{balance.description}</span> */}
                </span>
              </a>
            </div>
          </div>
        </td>
        <td className="table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-900 text-right">
          <div>{balance.sushi}</div>
          {balance.xsushi ? <div>({balance.xsushi})</div> : null}
        </td>
        <td className="table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
          {balance.usd}
        </td>
        <td className="pr-6">
          <div className="relative flex justify-end items-center">{balance.cta}</div>
        </td>
      </tr>
    </>
  );
};

export default Table;
