import React from "react";
import Demo from "../../assets/img/menu-week.jpg";

const WeeklyMenuInfo = ({ scrollToMenu }) => {
  return (
    <>
      <div className="sushi-hidden sm:sushi-block sushi-max-w-screen-xl sushi-mx-auto sushi-py-4 sushi-px-4 sm:sushi-px-6">
        <div
          className="sushi-rounded-lg sushi-shadow-xl sushi-overflow-hidden lg:sushi-grid lg:sushi-grid-cols-2 lg:sushi-gap-4"
          style={{
            backgroundColor: "#feeddc",
            backgroundImage: `url(
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='112' height='56'%3E%3Cpath fill='%23fcd9be' fill-opacity='0.42' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E"
            )`,
          }}
        >
          <div className="sushi-pt-10 sushi-pb-12 sushi-px-6 sm:sushi-pt-16 sm:sushi-px-16 lg:sushi-py-16 lg:sushi-pr-0 xl:sushi-py-20 xl:sushi-px-20">
            <div className="lg:sushi-self-center">
              <h2 className="sushi-text-3xl sushi-leading-9 sushi-font-extrabold sushi-text-gray-900 sm:sushi-text-3xl sm:sushi-leading-10">
                <span className="sushi-block">♨️ 温泉へようこそ</span>
                <span className="sushi-block">Steamy bonuses</span>
              </h2>
              <p className="sushi-mt-4 sushi-text-base sushi-leading-6 sushi-text-gray-900">
                Onsen is a rotational rewards system. The amplified rewards for the pools in the menu are meant to
                incentivize new liquidity providers and reward current liquidity providers for certain pairs. A
                community voting process determines which pairs are featured they may choose to keep some or change
                others. Users will always be able to harvest SUSHI from all previously featured pools.
              </p>
              <button
                onClick={scrollToMenu}
                className="sushi-mt-8 sushi-bg-white sushi-border sushi-border-2 sushi-border-orange-600 sushi-rounded-md sushi-shadow sushi-px-6 sushi-py-3 sushi-inline-flex sushi-items-center sushi-text-base sushi-leading-6 sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-500 hover:sushi-bg-gray-50 sushi-transition sushi-duration-150 sushi-ease-in-out"
              >
                Yes, I want more SUSHI
              </button>
            </div>
          </div>
          <div className="relative pb-3/5 -mt-6 md:pb-1/2">
            <img
              className="sushi-absolute sushi-inset-0 sushi-w-full sushi-h-full sushi-transform sushi-translate-x-6 sushi-translate-y-6 sushi-rounded-md sushi-object-cover sushi-object-left-top sm:sushi-translate-x-16 lg:sushi-translate-y-20"
              src={Demo}
              alt="Menu screenshot"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyMenuInfo;
