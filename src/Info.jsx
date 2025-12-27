import React, { useState, useEffect, useRef } from 'react'

function Info({ total_units, results, total_price }) {

    const [info, setinfo] = useState(false)
    const [calculatedPrice, setCalculatedPrice] = useState(0);

    const handleTotalPriceInfo = () => {
        const unitPrice = prompt("Please enter the unit price:", "0");
        if (unitPrice !== null) {
            const price = parseFloat(unitPrice);
            if (!isNaN(price)) {
                const calculatedValue = total_units * price;
                setCalculatedPrice(calculatedValue);
                if (results.length === 0) {
                    alert("⚠️ Oops! Please add some items to the form 📝 before calculating the total 💰");

                } else {
                    alert(`🎉 Congratulations! The total price for all items is ${calculatedValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
                }
            } else {
                alert("Please enter a valid number.");
            }
        }
    }

    const Info_button = () => {
        if (!info) {
            setinfo(true)
        } else {
            setinfo(false)
        }
    }


    return (
        <>
            <div>
                <div className='mt-14 lg:max-w-4xl mx-auto sm:px-30 px-0'>
                    <div className="flex mb-2.5 items-center justify-between gap-2 px-1.5">
                        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 sticky top-0 bg-white/0 backdrop-blur-sm py-2 text-wrap mr-2">
                            Estimated History
                        </h2>
                        <div>
                            <button
                                onClick={Info_button}
                                type="button"
                                className="relative cursor-pointer flex items-center justify-center w-10 md:w-10.5 h-10 md:h-10.5 lg:h-12 lg:w-12 rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                                aria-label="Information"
                                title="Click for more information about these results"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
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
                            <div className="bg-linear-to-br cursor-pointer from-blue-500 to-blue-600 rounded-3xl p-5 md:p-6 w-full sm:w-[45%] lg:max-w-xl border border-blue-500/30 text-white shadow-lg shadow-blue-500/30 duration-100 transform transition-all hover:scale-[1.01]">
                                <p className="text-blue-100 wrap-anywhere text-md sm:text-xl font-medium mb-1">Total Units</p>
                                <p className="text-3xl wrap-anywhere cursor-auto md:text-4xl font-bold">
                                    {Number(total_units).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>
                            <div className="bg-white rounded-3xl p-5 md:p-6 w-full duration-100 transform transition-all hover:scale-[1.01] sm:w-[45%] border-blue-400 lg:max-w-xl border-2 cursor-pointer shadow-lg shadow-blue-200">
                                <p className="text-blue-500 wrap-anywhere text-md sm:text-xl font-medium mb-1">Total Items</p>
                                <p className="text-3xl wrap-anywhere cursor-auto md:text-4xl font-bold text-blue-500">
                                    {results.length}
                                </p>
                            </div>
                        </div>
                        <div className="flex md:flex-row md:justify-center justify-center items-center gap-4 mb-6 w-full">

                            <div className="bg-linear-to-br cursor-pointer from-blue-500 to-blue-600 rounded-3xl p-5 md:p-6 w-full sm:w-[45%] border lg:max-w-xl  border-blue-500/30 text-white shadow-lg shadow-blue-500/30 duration-100 transform transition-all hover:scale-[1.01]">
                                <p className="text-blue-100 wrap-anywhere text-md sm:text-xl font-medium mb-1">Total Price of All Items</p>
                                {(total_price >= 0 || calculatedPrice !== null) && (
                                    <>
                                        <p className="text-3xl wrap-anywhere cursor-auto md:text-4xl font-bold">
                                            {Number(calculatedPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </p>
                                    </>
                                )}
                                <div className='flex justify-start items-center'>
                                    <div className={`px-1 py-1 bg-white mt-2`} style={{ borderRadius: '16px' }}>
                                        <button className='wrap-anywhere text-md sm:text-xl font-medium bg-blue-500 text-blue border-2 border-blue-500 transition-all duration-75 rounded-xl px-2 py-1 text-sm md:text-md lg:text-lg hover:bg-white hover:text-blue-400' onClick={handleTotalPriceInfo}>
                                            Calculate Total Price
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Info