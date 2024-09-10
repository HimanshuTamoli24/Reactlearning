import React from "react";
import { FaRegStar } from "react-icons/fa";


function Dropdown({
  currency,
  setcurrency,
  favroutes,
  title = "",
  handleFavroutes,
}) {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <div>
        <select className="w-full rounded-sm p-1 m-1 bg-white/45">
            {
                currency?.map((currency)=>{
                    return <option value="currency " key={currency}>
                        {currency}
                    </option>
                })
            }
        </select>
        <button><FaRegStar /></button>
      </div>
    </div>
  );
}

export default Dropdown;
