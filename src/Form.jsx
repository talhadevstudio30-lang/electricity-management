import React, { useState } from 'react';
import Results from './Results';
import './Form.css';


function Form() {

    const [watts, setWatts] = useState('');
    const [hours, setHours] = useState('');
    const [unit_price, setUnit_price] = useState('');
    const [period, setPeriod] = useState(1);
    const [item_name, setItem_name] = useState('');
    const [results, setResults] = useState([]);
    const [form_result, setForm_result] = useState(false);
    const [total_price, settotal_price] = useState('');
    const [custom_period, setcustom_period] = useState('');


    const custom_period_input = (e) => {
        setcustom_period(e.target.value);
    }

    const watts_input = (e) => {
        setWatts(e.target.value);
    }
    const hours_input = (e) => {
        setHours(e.target.value);
    }

    const unit_price_input = (e) => {
        setUnit_price(e.target.value);
    }

    const handlePeriodChange = (e) => {
        setPeriod(Number(e.target.value));
    }

    const item_name_input = (e) => {
        setItem_name(e.target.value);
    }

    const getRandomColor = () => {
        const colors = [
            'bg-slate-200 bg-opacity-10 border-slate-200 text-slate-800',
            'bg-gray-200 bg-opacity-10 border-gray-200 text-gray-800',
            'bg-zinc-200 bg-opacity-10 border-zinc-200 text-zinc-800',
            'bg-neutral-200 bg-opacity-10 border-neutral-200 text-neutral-800',
            'bg-stone-200 bg-opacity-10 border-stone-200 text-stone-800',
            'bg-red-200 bg-opacity-10 border-red-200 text-red-800',
            'bg-orange-200 bg-opacity-10 border-orange-200 text-orange-800',
            'bg-amber-200 bg-opacity-10 border-amber-200 text-amber-800',
            'bg-yellow-200 bg-opacity-12 border-yellow-200 text-yellow-800',
            'bg-lime-200 bg-opacity-10 border-lime-200 text-lime-800',
            'bg-green-200 bg-opacity-10 border-green-200 text-green-800',
            'bg-emerald-200 bg-opacity-10 border-emerald-200 text-emerald-800',
            'bg-teal-200 bg-opacity-10 border-teal-200 text-teal-800',
            'bg-cyan-200 bg-opacity-10 border-cyan-200 text-cyan-800',
            'bg-sky-200 bg-opacity-10 border-sky-200 text-sky-800',
            'bg-blue-200 bg-opacity-10 border-blue-200 text-blue-800',
            'bg-indigo-200 bg-opacity-10 border-indigo-200 text-indigo-800',
            'bg-violet-200 bg-opacity-10 border-violet-200 text-violet-800',
            'bg-purple-200 bg-opacity-10 border-purple-200 text-purple-800',
            'bg-fuchsia-200 bg-opacity-10 border-fuchsia-200 text-fuchsia-800',
            'bg-pink-200 bg-opacity-10 border-pink-200 text-pink-800',
            'bg-rose-200 bg-opacity-10 border-rose-200 text-rose-800',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const init = () => {
        const kwh = ((watts * hours * (period || custom_period)) / 1000);
        console.log(`KWH: ${kwh}`);
        const calcResult = kwh * unit_price;
        const newResult = {
            id: Date.now(),
            itemName: item_name,
            watts,
            hours,
            unitPrice: unit_price,
            period,
            kwh,
            custom_period,
            cost: calcResult,
            totalprice: calcResult,
            color: getRandomColor()
        };
        console.log(newResult);
        setResults([newResult, ...results]);
        setForm_result(calcResult);
        console.log(form_result);
        const totalprice = results.reduce((total, item) => total + Number(item.cost), 0) + calcResult;
        settotal_price(totalprice);
        console.log(`Total:${totalprice}`);
    }

    const submit = (e) => {
        e.preventDefault();
        init();
    }

    const handleReset = () => {
        if (confirm('Are you sure you want to reset your data? 🗑️🤔')) {
            setWatts('');
            setHours('');
            setUnit_price('');
            setPeriod(1);
            setItem_name('');
            setcustom_period('');
            setForm_result(false);
        }

    }

    const getPeriodLabel = (val) => {
        if (val === 1) return 'Daily';
        if (val === 7) return 'Weekly';
        if (val === 30) return 'Monthly';
        if (val === 180) return 'Semi-Annual';
        if (val === 365) return 'Yearly';
        if (val) return `${val} D`;
        return '';
    }

    const [calculation_period, setcalculation_period] = useState(true);
    const [custom_input, setcustom_input] = useState(false);

    const custom_btn = () => {
        console.log('Custom Button Clicked');
        if (!calculation_period) {
            setcalculation_period(true);
            setcustom_input(false);
            setcustom_period(0);
            setPeriod(1);
            console.log('hi i am if condition')
        }
        else {
            setcalculation_period(false);
            setcustom_input(true);
            setcustom_period('');
            setPeriod(0);
            console.log('i am else condition');

        }
    };



    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-start bg-linear-to-r from-blue-100 via-white to-blue-50 p-4 overflow-y-auto">
            {/* Background Decorative Elements */}
            <div className="fixed top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob -z-10"></div>
            <div className="fixed top-20 right-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 -z-10"></div>
            <div className="fixed -bottom-8 left-40 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 -z-10"></div>

            <div className="Form-Main-Container w-full sm:w-2xl h-[97vh] sm:h-auto grid items-center justify-center mt-0 sm:mt-10">

                {/* Form Section */}
                <div className="relative w-full bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl rounded-4xl mt-10 overflow-hidden">
                    <div className="px-6 py-6">

                        <h1 className="text-3xl md:text-4xl font-semibold text-center text-slate-800 mb-2">
                            Energy Cost Estimator
                        </h1>
                        <p className="text-center md:text-xl text-slate-500 mb-8">
                            Calculate your device consumption
                        </p>

                        <form onSubmit={submit} className="space-y-5">

                            {/* Item Name */}
                            <div className="space-y-1">
                                <label className="text-sm md:text-[18px] font-medium
                                 text-slate-600 ml-1">Item Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Air Conditioner"
                                    value={item_name}
                                    onChange={item_name_input}
                                    className="mt-1.5 w-full px-4 py-3 rounded-2xl bg-white/50 border border-white/50 focus:border-blue-400 focus:ring-2 focus:border-2 focus:ring-blue-200 focus:outline-none transition-all md:text-xl placeholder:text-slate-400 text-slate-700"
                                    required
                                    style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Watts */}
                                <div className="space-y-1">
                                    <label className="text-sm md:text-[18px] font-medium text-slate-600 ml-1">Power (Watts)</label>
                                    <input
                                        type="number"
                                        placeholder="e.g. 1500"
                                        value={watts}
                                        onChange={watts_input}
                                        className="mt-1.5 w-full px-4 py-3 rounded-2xl bg-white/50 border border-white/50 focus:border-blue-400 focus:ring-2   focus:border-2 md:text-xl focus:ring-blue-200 focus:outline-none transition-all placeholder:text-slate-400 text-slate-700"
                                        required style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }} />
                                </div>

                                {/* Hours */}
                                <div className="space-y-1">
                                    <label className="text-sm md:text-[18px] font-medium text-slate-600 ml-1">Usage (Hours)</label>
                                    <input
                                        type="number"
                                        placeholder="e.g. 5"
                                        value={hours}
                                        onChange={hours_input}
                                        className=" mt-1.5 w-full px-4 py-3 rounded-2xl bg-white/50 border border-white/50 focus:border-blue-400 focus:ring-2 md:text-xl focus:ring-blue-200 focus:outline-none transition-all   focus:border-2 placeholder:text-slate-400 text-slate-700"
                                        required style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
                                    />
                                </div>
                            </div>

                            {/* Period Select */}
                            <div className='flex justify-center items-end'>
                                <div className="space-y-1 w-full pr-3.5">
                                    {calculation_period && (
                                        <>
                                            <label className="text-sm md:text-[18px] font-medium text-slate-600 ml-1">Calculation Period</label>

                                            <div className="relative">
                                                <select
                                                    onChange={handlePeriodChange}
                                                    value={period}
                                                    className=" mt-1.5 w-full px-4 py-3 rounded-2xl bg-white/50 border border-white/50 focus:border-blue-400 focus:ring-2  focus:border-2 focus:ring-blue-200 focus:outline-none transition-all md:text-xl text-slate-700 shadow-sm appearance-none cursor-pointer" style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
                                                >
                                                    <option value={1} style={{ color: '#4268ff' }}>Daily</option>
                                                    <option value={7} style={{ color: '#4268ff' }}>Weekly</option>
                                                    <option value={30} style={{ color: '#4268ff' }}>Monthly</option>
                                                    <option value={180} style={{ color: '#4268ff' }}>Semi-Annual</option>
                                                    <option value={365} style={{ color: '#4268ff' }}>Yearly</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 py-8.5 text-slate-500">
                                                    <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {custom_input && (
                                        <>
                                            <div>
                                                <label className="text-sm md:text-[18px]  font-medium text-slate-600 ml-1">Custom Period (Days)</label>
                                                <input
                                                    type="number"
                                                    placeholder="e.g. 3"
                                                    value={custom_period}
                                                    onChange={custom_period_input}
                                                    className=" mt-1.5 w-full px-4 py-3 rounded-2xl bg-white/50 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none  md:text-xl focus:border-2 transition-all placeholder:text-slate-400 text-slate-700 shadow-sm"
                                                    required style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div>
                                    <button type='button' className="w-full rounded-xl text-[16px] md:text-[18px] mb-0.4 mr-2.5  bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-3 px-3  transition-all duration-100" style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }} onClick={custom_btn}>{calculation_period ? 'Custom' : 'Period'}</button>
                                </div>
                            </div>
                            {/* Unit Price */}
                            <div className="space-y-1">
                                <label className="text-sm md:text-[18px] font-medium text-slate-600 ml-1">Unit Price</label>
                                <input
                                    type="number"
                                    placeholder="e.g. 0.15"
                                    value={unit_price}
                                    onChange={unit_price_input}
                                    className=" mt-1.5 w-full px-4 py-3 rounded-2xl bg-white/50 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none  md:text-xl focus:border-2 transition-all placeholder:text-slate-400 text-slate-700 shadow-sm"
                                    required style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
                                />
                            </div>
                            {/* Result Display */}
                            {form_result && (
                                <div className="grid justify-center items-center">
                                    <div className="p-4 px-7 text-2xl md:text-3xl rounded-3xl bg-blue-50 border border-blue-200  text-blue-800 font-medium text-center animate-fade-in" style={{ boxShadow: "0px 0px 5px rgba(0, 123, 255, 0.4)" }}>
                                        <h3 className="text-xl md:text-2xl text-blue-500 mb-1">Estimated Cost</h3>
                                        <p className="text-2xl md:text-3xl font-semibold text-blue-600">{form_result}</p>
                                    </div>
                                </div>
                            )}

                            {/* Buttons */}
                            <div className="pt-2 flex gap-3">
                                <button type="submit" className="flex-1 py-3 px-6 rounded-full sm:rounded-2xl bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg md:text-xl shadow-blue-500/30 transform transition-all hover:-translate-y-0.5 active:translate-y-0">
                                    Calculate
                                </button>
                                <button type="button" onClick={handleReset} className="flex-1 py-3 px-6 rounded-full text-gray-50 font-semibold border sm:rounded-2xl border-white/60 shadow-md bg-gray-400 hover:bg-gray-500 transform transition-all md:text-xl hover:-translate-y-0.5 active:translate-y-0 ">
                                    Reset
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            {/* Results Section */}
            <div>
                <Results results={results} getPeriodLabel={getPeriodLabel} total_price={total_price} />
            </div>
        </div>
    )
}

export default Form