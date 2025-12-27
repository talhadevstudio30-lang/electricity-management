import React, { useState, useEffect } from 'react';
import Info from './Info';

function Results({ results, getPeriodLabel, total_units, total_price, }) {


    return (
        <>
            <div>
                <div>
                    <Info total_units={total_units} total_price={total_price} results={results} />
                </div>
                <div className="space-y-6">

                    {results.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-64 bg-white/90 backdrop-blur-md rounded-3xl border border-white/40 border-dashed text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-17 h-17 md:w-26 md:h-26 mb-2 opacity-100 text-slate-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-lg md:text-2xl">No History yet</p>
                            <p className="text-sm md:text-base">Fill the form to see results here</p>
                        </div>
                    ) : (
                        <div className="mt-5.5 flex justify-center items-center flex-wrap">
                            {results.map((res) => (
                                <div key={res.id} data-aos="fade-up" className="m-3.5 md:w-xl w-full">
                                    <div className={`relative cursor-pointer p-5 w-full h-full rounded-4xl border border-white/20 shadow-lg backdrop-blur-md duration-200 transform transition-all hover:scale-[1.03] ${res.color}`}>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl md:text-2xl wrap-anywhere font-bold mr-3 capitalize">{res.itemName}</h3>
                                                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/40 border border-red/20 mt-1 inline-block duration-100 wrap-anywhere transform transition-all hover:scale-[1.05]">
                                                    {(getPeriodLabel(res.period) || getPeriodLabel(res.custom_period))}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs font-semibold uppercase tracking-wider md:text-lg opacity-70">Total Units</p>
                                                <p className="text-2xl cursor-auto wrap-anywhere font-bold md:text-3xl">
                                                    {res.kwh}
                                                </p>
                                            </div>
                                        </div>

                                        <div className={`grid justify-center wrap-anywhere gap-2 text-sm border-t border-black/8 pt-4 mt-2 ${res.unitPrice ? 'grid-cols-3' : 'grid-cols-2'}`}>
                                            <div className="text-center p-2 rounded-2xl bg-white/40 duration-100 wrap-anywhere transform transition-all hover:scale-[1.04]">
                                                <p className="opacity-70 text-xs md:text-lg">Power</p>
                                                <p className="font-semibold text-sm md:text-lg">{res.watts} W</p>
                                            </div>
                                            <div className="text-center p-2 rounded-2xl bg-white/40 duration-100 transform transition-all hover:scale-[1.04]">
                                                <p className="opacity-70 text-xs md:text-lg">Usage</p>
                                                <p className="font-semibold wrap-anywhere text-sm md:text-lg">{res.hours} hrs</p>
                                            </div>
                                            {res.unitPrice && (
                                                <div className="text-center p-2 rounded-2xl bg-white/40 duration-100 transform transition-all hover:scale-[1.04]">
                                                    <p className="opacity-70 text-xs md:text-lg">Rate</p>
                                                    <p className="font-semibold wrap-anywhere text-sm md:text-lg">{res.unitPrice || 'No Rate'}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            {res.cost && (
                                                <div className='text-start pl-5 py-2.5 p-2 rounded-2xl bg-white/40 duration-100 wrap-anywhere transform transition-all hover:scale-[1.04] w-full mt-2.5'>
                                                    <p className="opacity-70 text-xs md:text-lg">Estimated Cost of Item</p>
                                                    <p className="font-semibold text-sm md:text-lg">{res.cost || 'No Information'}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default React.memo(Results)