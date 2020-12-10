import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ count, skip }) => {
  return (
    <nav className="sushi-bg-white sushi-px-4 sushi-py-3 sushi-flex sushi-items-center sushi-justify-between sushi-border-t sushi-border-b sushi-border-cool-gray-200 sm:sushi-px-6">
      <div className="sushi-hidden sm:sushi-block">
        <p className="sushi-text-sm sushi-leading-5 sushi-text-cool-gray-700">
          Showing <span className="sushi-font-medium">1 </span>
          to <span className="sushi-font-medium">6 </span>
          of <span className="sushi-font-medium">6 </span>
          results
        </p>
      </div>
      <div className="sushi-flex-1 sushi-flex sushi-justify-between sm:sushi-justify-end">
        <button className="sushi-relative sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-cool-gray-300 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-cool-gray-700 sushi-bg-white hover:sushi-text-cool-gray-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-bg-cool-gray-100 active:sushi-text-cool-gray-700 sushi-transition sushi-ease-in-out sushi-duration-150">
          Previous
        </button>
        <button className="sushi-ml-3 sushi-relative sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-cool-gray-300 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-cool-gray-700 sushi-bg-white hover:sushi-text-cool-gray-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-bg-cool-gray-100 active:sushi-text-cool-gray-700 sushi-transition sushi-ease-in-out sushi-duration-150">
          Next
        </button>
      </div>
    </nav>
  );
};

const FAQ = () => {
  const questions = [
    {
      status: "Open",
      title: "How do I start yield farming SUSHI",
      details: "#QmXm9T7 By 0xF942...A6bd",
      type: "60",
      remaining: "10",
    },
    {
      status: "Resolved",
      title: "Harvesting token button not working for me",
      details: "#QmXcfQE By 0xF942...A6bd",
      type: "40",
      remaining: "20",
    },
    {
      status: "Resolved",
      title: "What is the Dev Fund and how can I monitor it?",
      details: "#QmNuZaL By 0xF942...A6bd",
      type: "28",
      remaining: "5",
    },
    {
      status: "Open",
      title: "Who are the founders of Sushiswap",
      details: "#QmUvNBa By 0xF942...A6bd",
      type: "12",
      remaining: "40",
    },
    {
      status: "Resolved",
      title: "How do I install metamask?",
      details: "#QmNzRji By 0xF942...A6bd",
      type: "10",
      remaining: "5",
    },
    {
      status: "Open",
      title: "How do I participate in governance?",
      details: "#Qmbh9K9 By 0xF942...A6bd",
      type: "34",
      remaining: "10",
    },
  ];
  return (
    <div className="sushi-bg-white sushi-shadow sushi-overflow-hidden sushi-rounded-md">
      <div className="sushi-bg-white sushi-px-6 sushi-pt-5 sushi-border-b sushi-border-gray-200 sm:sushi-px-6">
        <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">Open Issues and FAQ</h3>
        <div className="sushi-pt-3 sushi-pb-4 sm:sushi-p-0">
          <div className="sm:sushi-hidden">
            <select className="sushi-form-select sushi-block sushi-w-full sushi-text-gray-900 sushi-border-gray-300 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 sushi-transition sushi-ease-in-out sushi-duration-150">
              <option>Applied</option>
              <option>Phone screening</option>
              <option selected>Interview</option>
              <option>Offer</option>
              <option>Hired</option>
            </select>
          </div>
          <div className="sushi-hidden sm:sushi-block">
            <div>
              <nav className="sushi--mb-px sushi-flex">
                <Link
                  href="/governance"
                  className="sushi-whitespace-no-wrap sushi-py-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300 sushi-transition sushi-ease-in-out sushi-duration-150"
                >
                  Trending
                </Link>
                <Link
                  to="/governance/community"
                  className="sushi-whitespace-no-wrap sushi-ml-8 sushi-py-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300 sushi-transition sushi-ease-in-out sushi-duration-150"
                >
                  Top
                </Link>
                <Link
                  to="/governance/all"
                  className="sushi-whitespace-no-wrap sushi-ml-8 sushi-py-4 sushi-px-1 sushi-border-b-2 sushi-border-orange-500 sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-orange-600 focus:sushi-outline-none focus:sushi-text-orange-800 focus:sushi-border-orange-700 sushi-transition sushi-ease-in-out sushi-duration-150"
                >
                  All
                </Link>
                <Link
                  to="/governance/active"
                  className="sushi-whitespace-no-wrap sushi-ml-8 sushi-py-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300 sushi-transition sushi-ease-in-out sushi-duration-150"
                >
                  Open
                </Link>
                <Link
                  to="/governance/pending"
                  className="sushi-whitespace-no-wrap sushi-ml-8 sushi-py-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300 sushi-transition sushi-ease-in-out sushi-duration-150"
                >
                  Resolved
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="sushi-px-4 sushi-pt-5 sushi-pb-3 sm:sushi-px-6">
        <div>
          <label htmlFor="filter" className="sushi-sr-only">
            Search Open Grants
          </label>
          <div className="sushi-flex sushi-rounded-md sushi-shadow-sm">
            <div className="sushi-relative sushi-flex-grow focus-within:sushi-z-10">
              <div className="sushi-absolute sushi-inset-y-0 sushi-left-0 sushi-pl-3 sushi-flex sushi-items-center sushi-pointer-events-none">
                <svg className="sushi-h-5 sushi-w-5 sushi-text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="filter"
                className="sushi-appearance-none sushi-rounded-none sushi-block sushi-w-full sushi-pl-10 sushi-pr-3 sushi-py-2 sushi-border sushi-border-gray-300 sushi-rounded-l-md sushi-text-gray-900 sushi-placeholder-gray-400 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 sm:sushi-text-sm sm:sushi-leading-5 sushi-transition sushi-ease-in-out sushi-duration-150"
                placeholder="John Doe"
              />
            </div>
            <button className="sushi--ml-px sushi-relative sushi-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-rounded-r-md sushi-border sushi-border-gray-300 sushi-text-sm sushi-leading-5 sushi-bg-gray-50 sushi-text-gray-900 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 focus:sushi-z-10 sushi-transition sushi-ease-in-out sushi-duration-150">
              <svg className="sushi-h-5 sushi-w-5 sushi-text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sushi-ml-2">Filter</span>
            </button>
          </div>
        </div>
      </div>
      <ul>
        {questions.map(function(question) {
          return (
            <li className="sushi-border-t sushi-border-gray-200">
              <Link
                to="/"
                className="sushi-block hover:sushi-bg-gray-50 focus:sushi-outline-none focus:sushi-bg-gray-50 sushi-transition sushi-duration-150 sushi-ease-in-out"
              >
                <div className="sushi-flex sushi-items-center sushi-px-4 sushi-py-4 sm:sushi-px-6">
                  <div className="sushi-min-w-0 sushi-flex-1 sushi-flex sushi-items-center">
                    <div className="sushi-min-w-0 sushi-flex-1 sushi-px-4 md:sushi-grid md:sushi-grid-cols-2 md:sushi-gap-3">
                      <div>
                        <div className="sushi-leading-5 sushi-font-medium sushi-text-gray-600 sushi-truncate">
                          <span
                            className={
                              question.status === "Open"
                                ? "sushi-mr-3 sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5 sushi-rounded-md sushi-text-sm sushi-font-medium sushi-leading-5 sushi-bg-green-100 sushi-text-green-800"
                                : "sushi-mr-3 sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5 sushi-rounded-md sushi-text-sm sushi-font-medium sushi-leading-5 sushi-bg-orange-100 sushi-text-orange-800"
                            }
                          >
                            {question.status}
                          </span>
                          {question.title}
                        </div>
                        <div className="sushi-mt-2 sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                          <span className="sushi-truncate">{question.details}</span>
                        </div>
                      </div>
                      <div className="sushi-hidden md:sushi-block">
                        <div>
                          <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                            {question.type} people found this helpful
                          </div>
                          <div className="sushi-mt-2 sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                            {question.remaining} answers
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg className="sushi-h-5 sushi-w-5 sushi-text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagination />
    </div>
  );
};

export default FAQ;
