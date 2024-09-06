import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    const result = amount * currencyInfo[to];
    setConvertedAmount(result.toFixed(2));
  };

  const currencyColorMap = {
    usd: "text-black",
    inr: "text-black",
  };

  const fromColorClass = currencyColorMap[from] || "text-black";
  const toColorClass = currencyColorMap[to] || "text-black";

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat noscroll"
      style={{ backgroundImage: `url('Designer.jpeg')` }}
    >
      <div className="w-full">
        <div className="w-full max-w-md h-72 mx-auto border justify-center items-center flex border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-indigo-200/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1 bg-white/50 rounded-lg">
              <InputBox
                label={<span className={fromColorClass}>From</span>}
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  m-1 border-b-2 border-white rounded-md bg-indigo-800 active:bg-indigo-800/90 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4 bg-white/50 rounded-md">
              <InputBox
                label={<span className={toColorClass}>To</span>}
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full border-b-2 bg-indigo-800 text-white px-4 py-3 rounded-lg active:bg-indigo-800/90 hover:bg-indigo-700"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
