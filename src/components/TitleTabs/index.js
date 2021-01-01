import React from "react";
import { Link } from "react-router-dom";

const TitleTabs = ({ title, tabs }) => {
  //   const exampleTabs = [
  //     {
  //       key: "balances",
  //       type: "internal",
  //       title: "Balances",
  //       to: "/portfolio/balances",
  //       selected: true
  //     },
  //   ];
  return (
    <>
      <div className="border-b border-gray-200 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:flex sm:items-baseline sm:space-y-0 sm:space-x-10">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
          <div>
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                return (
                  <>
                    <Link
                      key={tab.key}
                      to={tab.to}
                      className={
                        tab.selected === true
                          ? "whitespace-no-wrap pb-4 px-1 border-b-2 border-gray-900 font-medium text-sm leading-5 text-gray-900 focus:outline-none focus:text-gray-900 focus:border-gray-900"
                          : "whitespace-no-wrap pb-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                      }
                      aria-current="page"
                    >
                      {tab.title}
                    </Link>
                  </>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleTabs;