import React from 'react'

function FormResult({ form_result, kwh_value, form_info_btn, cost_unit_value_btn, unit_price_UI }) {
    return (
        <>
            <div>
                {/* Result Display */}
                {(form_result || kwh_value) && (
                    <>
                        <div className="grid sm:justify-center sm:items-center mt-7.5 w-full">
                            <div className="relative group cursor-default w-full">
                                <div className="absolute -inset-1 bg-linear-to-br from-blue-300 to-cyan-200 rounded-4xl blur opacity-25 group-hover:opacity-75 transition duration-600 group-hover:duration-200"></div>
                                <div className="relative sm:px-6 px-3 py-3 md:px-9 sm:py-4 bg-white ring-1 ring-gray-900/5 rounded-4xl leading-none flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-9 md:gap-16 shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
                                    {form_result && (
                                        <div className="flex w-full sm:w-auto flex-col items-start sm:text-center px-4 py-3 sm:px-0 sm:py-0 bg-blue-100/90 sm:bg-transparent space-y-4 rounded-3xl sm:rounded-none">
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 sm:bg-blue-100 bg-blue-400 rounded-full">
                                                    <svg className="w-4.5 h-4.5 sm:w-6 sm:h-6 text-blue-100 sm:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                                    </svg>
                                                </div>
                                                <h3 className="text-md sm:text-lg md:text-xl font-medium sm:text-slate-600 text-blue-600">Estimated cost</h3>
                                            </div>
                                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold sm:text-transparent sm:bg-clip-text  sm:bg-linear-to-r sm:from-blue-500 sm:to-blue-500 text-blue-600 wrap-anywhere">
                                                {Number(form_result).toFixed(3)}
                                            </div>
                                        </div>
                                    )}
                                    {form_result && kwh_value && (
                                        <div className="hidden sm:block w-px h-19 bg-slate-300"></div>
                                    )}
                                    {kwh_value && (
                                        <div className="flex w-full sm:w-auto flex-col items-start sm:text-center px-4 py-3 sm:px-0 sm:py-0 bg-cyan-100/90 sm:bg-transparent space-y-4 rounded-3xl sm:rounded-none">
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 sm:bg-cyan-100 bg-cyan-400 rounded-full">
                                                    <svg className="w-4.5 h-4.5 sm:w-6 sm:h-6 text-cyan-100 sm:text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                                    </svg>
                                                </div>
                                                <h3 className="text-md sm:text-lg md:text-xl font-medium sm:text-slate-600 text-cyan-600">Total Units</h3>
                                            </div>
                                            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold sm:text-transparent sm:bg-clip-text  sm:bg-linear-to-b sm:from-cyan-500 sm:to-cyan-500  w-full ${unit_price_UI} text-cyan-600 wrap-anywhere`}>
                                                {Number(kwh_value).toFixed(3)}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <div className='w-full flex justify-center items-center mt-5.5'>
                    <div className='flex justify-center bg-white/50 py-1.5 px-2 items-center rounded-2xl' style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}>
                        <div className="text-xs text-slate-500 md:text-sm hover:text-slate-100 hover:bg-slate-500 font-medium transition-all transform bg-slate-200 duration-100 flex px-3.5 py-1.5 rounded-full text-center">
                            <span className='hidden sm:block px-1'>Estimated</span> Cost &  <span className='hidden sm:block px-1'>Total</span> Units
                        </div>
                        <div className='bg-blue-400 px-3 py-2 text-white transition-all hover:bg-blue-500 active:border-2 active:text-blue-500 active:bg-white active:border-blue-400 rounded-xl ml-1.5 cursor-pointer duration-50' onClick={form_info_btn} style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}>
                            {cost_unit_value_btn}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(FormResult)