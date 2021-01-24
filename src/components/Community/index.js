import React from "react";

const Community = () => {
  return (
    <>
      <div className="py-8 mx-auto px-4 xl:grid xl:grid-cols-3">
        <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
          <div>
            <div>
              <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">ARIA attribute misspelled</h1>
                  <p className="mt-2 text-sm text-gray-500">
                    #400 opened by
                    <a href="#" className="font-medium text-gray-900">
                      Hilary Mahy
                    </a>
                    in
                    <a href="#" className="font-medium text-gray-900">
                      Customer Portal
                    </a>
                  </p>
                </div>
                <div className="mt-4 flex space-x-3 md:mt-0">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    {/* Heroicon name: pencil */}
                    <svg
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <span>Edit</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    {/* Heroicon name: bell */}
                    <svg
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
              <aside className="mt-8 xl:hidden">
                <h2 className="sr-only">Details</h2>
                <div className="space-y-5">
                  <div className="flex items-center space-x-2">
                    {/* Heroicon name: lock-open */}
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                    </svg>
                    <span className="text-green-700 text-sm font-medium">Open Issue</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Heroicon name: chat-alt */}
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-900 text-sm font-medium">4 comments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Heroicon name: calendar */}
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-900 text-sm font-medium">
                      Created on <time dateTime="2020-12-02">Dec 2, 2020</time>
                    </span>
                  </div>
                </div>
                <div className="mt-6 border-t border-b border-gray-200 py-6 space-y-8">
                  <div>
                    <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                    <ul className="mt-3 space-y-3">
                      <li className="flex justify-start">
                        <a href="#" className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-5 w-5 rounded-full"
                              src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                          <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                    <ul className="mt-2 leading-8">
                      <li className="inline">
                        <a
                          href="#"
                          className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                        >
                          <div className="absolute flex-shrink-0 flex items-center justify-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                          </div>
                          <div className="ml-3.5 text-sm font-medium text-gray-900">Bug</div>
                        </a>
                      </li>
                      <li className="inline">
                        <a
                          href="#"
                          className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                        >
                          <div className="absolute flex-shrink-0 flex items-center justify-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                          </div>
                          <div className="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
              <div className="py-3 xl:pt-6 xl:pb-0">
                <h2 className="sr-only">Description</h2>
                <div className="prose max-w-none">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic? Commodi cumque similique id
                    tempora molestiae deserunt at suscipit, dolor voluptatem, numquam, harum consequatur laboriosam
                    voluptas tempore aut voluptatum alias?
                  </p>
                  <ul>
                    <li>
                      Tempor ultrices proin nunc fames nunc ut auctor vitae sed. Eget massa parturient vulputate
                      fermentum id facilisis nam pharetra. Aliquet leo tellus.
                    </li>
                    <li>Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.</li>
                    <li>
                      Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed. Ut tellus in
                      sed dignissim.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section aria-labelledby="activity-title" className="mt-8 xl:mt-10">
            <div>
              <div className="divide-y divide-gray-200">
                <div className="pb-4">
                  <h2 id="activity-title" className="text-lg font-medium text-gray-900">
                    Activity
                  </h2>
                </div>
                <div className="pt-6">
                  {/* Activity feed*/}
                  <div className="flow-root">
                    <ul className="-mb-8">
                      <li>
                        <div className="relative pb-8">
                          <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                          <div className="relative flex items-start space-x-3">
                            <div className="relative">
                              <img
                                className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                                src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                alt=""
                              />
                              <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                                {/* Heroicon name: chat-alt */}
                                <svg
                                  className="h-5 w-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div>
                                <div className="text-sm">
                                  <a href="#" className="font-medium text-gray-900">
                                    Eduardo Benz
                                  </a>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Commented 6d ago</p>
                              </div>
                              <div className="mt-2 text-sm text-gray-700">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor
                                  purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="relative pb-8">
                          <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                          <div className="relative flex items-start space-x-3">
                            <div>
                              <div className="relative px-1">
                                <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                  {/* Heroicon name: user-circle */}
                                  <svg
                                    className="h-5 w-5 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="min-w-0 flex-1 py-1.5">
                              <div className="text-sm text-gray-500">
                                <a href="#" className="font-medium text-gray-900">
                                  Hilary Mahy
                                </a>
                                assigned
                                <a href="#" className="font-medium text-gray-900">
                                  Kristin Watson
                                </a>
                                <span className="whitespace-nowrap">2d ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="relative pb-8">
                          <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                          <div className="relative flex items-start space-x-3">
                            <div>
                              <div className="relative px-1">
                                <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                  {/* Heroicon name: tag */}
                                  <svg
                                    className="h-5 w-5 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="min-w-0 flex-1 py-0">
                              <div className="text-sm leading-8 text-gray-500">
                                <span className="mr-0.5">
                                  <a href="#" className="font-medium text-gray-900">
                                    Hilary Mahy
                                  </a>
                                  added tags
                                </span>
                                <span className="mr-0.5">
                                  <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                                  >
                                    <span className="absolute flex-shrink-0 flex items-center justify-center">
                                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                                    </span>
                                    <span className="ml-3.5 font-medium text-gray-900">Bug</span>
                                  </a>
                                  <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                                  >
                                    <span className="absolute flex-shrink-0 flex items-center justify-center">
                                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                                    </span>
                                    <span className="ml-3.5 font-medium text-gray-900">Accessibility</span>
                                  </a>
                                </span>
                                <span className="whitespace-nowrap">6h ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="relative pb-8">
                          <div className="relative flex items-start space-x-3">
                            <div className="relative">
                              <img
                                className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                alt=""
                              />
                              <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                                {/* Heroicon name: chat-alt */}
                                <svg
                                  className="h-5 w-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div>
                                <div className="text-sm">
                                  <a href="#" className="font-medium text-gray-900">
                                    Jason Meyers
                                  </a>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Commented 2h ago</p>
                              </div>
                              <div className="mt-2 text-sm text-gray-700">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor
                                  purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.
                                  Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis
                                  diam.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <aside className="hidden xl:block xl:pl-8">
          <h2 className="sr-only">Details</h2>
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              {/* Heroicon name: lock-open */}
              <svg
                className="h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
              </svg>
              <span className="text-green-700 text-sm font-medium">Open Issue</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* Heroicon name: chat-alt */}
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-900 text-sm font-medium">4 comments</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* Heroicon name: calendar */}
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-900 text-sm font-medium">
                Created on <time dateTime="2020-12-02">Dec 2, 2020</time>
              </span>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
            <div>
              <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
              <ul className="mt-3 space-y-3">
                <li className="flex justify-start">
                  <a href="#" className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-5 w-5 rounded-full"
                        src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-500">Tags</h2>
              <ul className="mt-2 leading-8">
                <li className="inline">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                  >
                    <div className="absolute flex-shrink-0 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                    </div>
                    <div className="ml-3.5 text-sm font-medium text-gray-900">Bug</div>
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                  >
                    <div className="absolute flex-shrink-0 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                    </div>
                    <div className="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Community;