import React, { useState } from 'react'

function Info({ total_price, results }) {

    const [info, setinfo] = useState(false)

    const Info_button = () => {
        console.log('👋 hello, don\'t worry! I am working perfectly without any type of issue ✨')
        if (!info) {
            setinfo(true)
        } else {
            setinfo(false)
        }
    }
    return (
        <>
            <div>
                <div className='mt-14 lg:max-w-4xl mx-auto'>
                    <div className="flex mb-2.5 items-center justify-between gap-2 px-1.5">
                        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 sticky top-0 bg-white/0 backdrop-blur-sm py-2 text-wrap mr-2">
                            Estimated History
                        </h2>
                        <div>
                            <button
                                onClick={Info_button}
                                type="button"
                                className="relative flex items-center justify-center w-10 md:w-10.5 h-10 md:h-10.5 lg:h-12 lg:w-12 rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                                aria-label="Information"
                                title="Click for more information about these results"
                            >
                                <svg
                                    xmlns="http://www.w3.org/20000/svg"
                                    className="md:h-8 md:w-8 lg:h-9.5 lg:w-9.5 h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
                {info && (
                    <div className='w-full'>
                        <div className="grid sm:flex md:flex-row md:justify-center items-center gap-4 mb-6 w-full">
                            <div className="bg-linear-to-br cursor-pointer from-blue-500 to-blue-600 rounded-3xl p-5 md:p-6 w-full sm:w-[50%] lg:max-w-xl border border-blue-500/30 text-white shadow-lg shadow-blue-500/30 duration-100 transform transition-all hover:scale-[1.01]">
                                <p className="text-blue-100 wrap-anywhere text-md sm:text-xl font-medium mb-1">Total Estimated Cost</p>
                                <p className="text-3xl wrap-anywhere cursor-auto md:text-4xl font-bold">
                                    {Number(total_price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>
                            <div className="bg-white rounded-3xl p-5 md:p-6 w-full duration-100 transform transition-all hover:scale-[1.01] sm:w-[50%] border-blue-400 lg:max-w-xl border-2 cursor-pointer shadow-lg shadow-blue-200">
                                <p className="text-blue-500 wrap-anywhere text-md sm:text-xl font-medium mb-1">Total Items</p>
                                <p className="text-3xl wrap-anywhere cursor-auto md:text-4xl font-bold text-blue-500">
                                    {results.length}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Info