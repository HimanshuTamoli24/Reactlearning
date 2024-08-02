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

  // Handler for amount change that removes leading zeros
  const handleAmountChange = (e) => {
    let value = e.target.value;

    // Remove all leading zeros except for a single '0'
    value = value.replace(/^0+(?!$)/, "");

    // Update the amount if valid
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
          className="outline-none w-full bg-transparent bol py-1.5"
          type="text"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full rounded-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-transparent cursor-pointer outline-none"
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
