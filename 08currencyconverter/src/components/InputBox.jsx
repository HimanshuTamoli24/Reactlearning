import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  const handleAmountChange = (e) => {
    let value = e.target.value;
    value = value.replace(/^0+(?!$)/, "");
    if (!isNaN(value)) {
      onAmountChange && onAmountChange(Number(value));
    }
  };

  return (
    <div
      className={`bg-transparent bold p-3 rounded-lg text-sm flex ${className}`}
    >
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none border-black/20 border-2 rounded-lg pl-1  w-full bg-transparent bol py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full rounded-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 border-black/20 border-2 bg-transparent cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
