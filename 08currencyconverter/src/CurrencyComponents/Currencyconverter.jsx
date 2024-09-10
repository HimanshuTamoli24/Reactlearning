import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
function Currencyconverter() {
    const [currency, setCurrency] = useState([]);
    const [amount, setAmount] = useState("0");
    const [fromCurrency, setFromCurrency] = useState("usd");
    const [toCurrency, setToCurrency] = useState("inr");
    const fetchCurrency = async () => {
        try {
            const res = await fetch(" https://api.frankfurter.app/currencies");
            const data =  await res.json();
            setCurrency(Object.keys (data));
        } catch (error) {
            console.error(error);
        }
    };

    const Currencyconvert = () => {
        console.log("hello");
    };
    useEffect(() => {
        fetchCurrency();
    }, []);
    console.log("here:", currency);
    return (
        <div className="bg-white/35  max-w-xl border-black border mx-auto my-10 p-5 rounded-md shadow-black/35  shadow-md   ">
            <h1 className="text-2xl mx p-1 font-semibold ">Currencyconverter</h1>
            <div className="mt-4">
                <Dropdown currency={currency} title="From" />
                {/* swapb */}
                <Dropdown currency={currency} title=" To" />


            </div>
            <label htmlFor="amount" className="block text-sm font-medium ">
                Amount:
            </label>
            <input
                value={amount}
                onChange={() => setAmount(e.target.value)}
                type="number"
                className="w-full  p-2 border border-black/80   shadow-sm  rounded  text-sm  font-medium   focus:outline-none  focus:border-blue-900/95 focus:border-2"
            />
            <div className="flex justify-end mt-6">
                <button
                    onClick={Currencyconvert}
                    className="px-5  border-blue-400 border py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 "
                >
                    Convert
                </button>
            </div>
            <div>Converted Amount:{amount}</div>
        </div>
    );
}

export default Currencyconverter;
// Currencies -> https://api.frankfurter.app/currencies
// Conversion -> https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
