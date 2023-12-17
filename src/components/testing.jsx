import React, { useState } from 'react';

const TestComp = () => {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Understand Your Angels.
            <span className="sm:block"> CoverFlow - Angels. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>
            <button
              onClick={() => setModelOpen(!modelOpen)}
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              Open Modal
            </button>

            {modelOpen && (
              <div className="fixed  inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                {/* Modal Content */}
                <div className="flex items-end justify-center min-h-screen px-4 text-center md:items-center sm:block sm:p-0">
                  {/* Background Overlay */}
                  <div
                    onClick={() => setModelOpen(false)}
                    className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-40"
                    aria-hidden="true"
                  ></div>

                  {/* Modal Body */}
                  <div
                    className="inline-block glass w-full max-w-xl p-8 my-20 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl 2xl:max-w-2xl"
                  >
                    {/* Your Modal Content Goes Here */}
                    <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
                      <div className="flex items-center gap-4">
                        <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              clipRule="evenodd"
                              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </span>

                        <p className="font-medium text-indigo-500 sm:text-lg">New message!</p>
                      </div>

                      <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                      </p>

                      <div className="mt-6 sm:flex sm:gap-4">
                        <a
                          className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
                          href=""
                        >
                          Take a Look
                        </a>

                        <a
                          className="mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-indigo-400 sm:mt-0 sm:w-auto"
                          href=""
                        >
                          Mark as Read
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestComp;
