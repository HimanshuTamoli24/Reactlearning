import React, { useState } from 'react';
import { IoMdSwap } from "react-icons/io";
import Currencyselect from './Currencyselect';

function CurrencyForm() {
    const [from, setFrom] = useState('USD'); // State for "from" currency
    const [to, setTo] = useState('INR'); // State for "to" currency
    const [rotate, setRotate] = useState(''); // State for rotation class
    const [amount, setAmount] = useState('100'); // State for amount

    // Swap currencies and toggle rotation
    const handleSwap = () => {
        setRotate(rotate === 'rotate-180' ? '' : 'rotate-180');
        setFrom(to);
        setTo(from);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        await CurrencyConvert();
    };

    // Fetch currency conversion data
    const CurrencyConvert = async () => {
        const API_KEY = import.meta.env.VITE_API_KEY; // API key from environment variable
        const API = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}`;

        try {
            const response = await fetch(API);
            if (!response.ok) throw new Error('Something went wrong');
            const data = await response.json();
            const rate = (data.conversion_rate * amount).toFixed(2); // Calculate rate
            console.log(data); // Log response
        } catch (error) {
            console.error("Unable to fetch data", error);
        }
    };

    return (
        <form className="flex flex-col items-center space-y-8" onSubmit={handleSubmit}>
            <div className="w-full">
                <label className="block mb-2 text-white font-medium">Enter Amount</label>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} // Update amount
                    type="number"
                    placeholder="Enter Your Amount"
                    className="w-full outline-none rounded-md py-2 px-4 bg-slate-950/70 border border-gray-300 text-white focus:ring-2 focus:ring-cyan-500"
                />
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex flex-col items-start space-x-2">
                    <label className="text-white ml-2">From</label>
                    <Currencyselect selectCurrency={from} handleCurrency={e => setFrom(e.target.value)} />
                </div>

                <IoMdSwap
                    onClick={handleSwap} // Swap currencies on click
                    className={`text-white text-2xl rounded-full bg-slate-200/10 mt-5 p-1 hover:scale-110 transition-transform duration-300 ${rotate}`} // Apply rotation class
                />

                <div className="flex flex-col items-start space-x-2">
                    <label className="text-white ml-2">To</label>
                    <Currencyselect selectCurrency={to} handleCurrency={e => setTo(e.target.value)} />
                </div>
            </div>

            <button className="py-2 border px-6 bg-cyan-500 text-gray-900/85 rounded-md hover:bg-cyan-600 transition-all">
                Get Exchange Rate
            </button>

            <p className="text-white bg-slate-200/10 rounded-sm text-xl p-1 pl-5 pr-5">1 USD = 83 INR</p>
        </form>
    );
}

export default CurrencyForm;
