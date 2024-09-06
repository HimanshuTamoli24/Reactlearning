import React from 'react'

function Dropdown({ currency, setcurrency, favroutes, title = '', handleFavroutes }) {
    return (
        <div><label htmlFor={title}>{title}</label>
            <div><select name="" id="">
                {currency.map((currency) => <option value={currency} key={currency}> {currency}</option>)}</select></div></div>
    )
}

export default Dropdown