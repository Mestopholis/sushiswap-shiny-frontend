import React from "react";

const Tabs = ({ tabs, selected, setSelected, count }) => {
  return (
    <div>
      <div className="sushi-block">
        <nav className="sushi--mb-px sushi-flex sushi-space-x-8">
          {tabs.map((tab) => {
            return (
              <button
                onClick={() => {
                  setSelected(tab.id);
                }}
                className={
                  selected === tab.id
                    ? "sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 border-gray-900 sushi-font-medium sushi-text-sm sushi-leading-5 text-gray-900 focus:sushi-outline-none focus:text-gray-900 focus:border-gray-700"
                    : "sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300"
                }
              >
                {tab.title}
                <span
                  className={
                    selected === tab.id
                      ? "sushi-ml-2 sushi-inline-block sushi-py-0.5 sushi-px-2 sushi-text-xs sushi-leading-4 sushi-font-medium sushi-rounded-full bg-gray-900 sushi-transition sushi-ease-in-out sushi-duration-150 group-hover:bg-gray-700 group-focus:bg-gray-700"
                      : "sushi-ml-2 sushi-inline-block sushi-py-0.5 sushi-px-2 sushi-text-xs sushi-leading-4 sushi-font-medium sushi-rounded-full bg-gray-900 sushi-transition sushi-ease-in-out sushi-duration-150 roup-hover:bg-gray-700 group-focus:bg-gray-700"
                  }
                >
                  {count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;