import React from 'react'

function Currencyselect({selectCurrency,handelCurrency}) {
    const countryCode= selectCurrency.substring(0,2)
    const additionalCurrencyCodes = [
        'AFN', // Afghan Afghani
        'ALB', // Albanian Lek
        'AMD', // Armenian Dram
        'ANG', // Netherlands Antillean Guilder
        'AOA', // Angolan Kwanza
        'ARS', // Argentine Peso
        'AWG', // Aruban Florin
        'AZN', // Azerbaijani Manat
        'BAM', // Bosnia and Herzegovina Convertible Mark
        'BBD', // Barbadian Dollar
        'BDT', // Bangladeshi Taka
        'BIF', // Burundian Franc
        'BMD', // Bermudian Dollar
        'BND', // Brunei Dollar
        'BOB', // Bolivian Boliviano
        'BOV', // Bolivian Mvdol
        'BRL', // Brazilian Real
        'BSD', // Bahamian Dollar
        'BTN', // Bhutanese Ngultrum
        'BWP', // Botswanan Pula
        'BYN', // Belarusian Ruble
        'BZD', // Belize Dollar
        'CDF', // Congolese Franc
        'CVE', // Cape Verdean Escudo
        'DJF', // Djiboutian Franc
        'DZD', // Algerian Dinar
        'EGP', // Egyptian Pound
        'ERN', // Eritrean Nakfa
        'ETB', // Ethiopian Birr
        'FJD', // Fijian Dollar
        'FKP', // Falkland Islands Pound
        'GEL', // Georgian Lari
        'GHS', // Ghanaian Cedi
        'GIP', // Gibraltar Pound
        'GMD', // Gambian Dalasi
        'GNF', // Guinean Franc
        'GTQ', // Guatemalan Quetzal
        'GYD', // Guyanaese Dollar
        'HNL', // Honduran Lempira
        'HTG', // Haitian Gourde
        'HUF', // Hungarian Forint
        'ISK', // Icelandic Króna
        'JEP', // Jersey Pound
        'KID', // Kiribati Dollar
        'KMF', // Comorian Franc
        'KRW', // South Korean Won
        'KWD', // Kuwaiti Dinar
        'KYD', // Cayman Islands Dollar
        'LAK', // Laotian Kip
        'LBP', // Lebanese Pound
        'LKR', // Sri Lankan Rupee
        'LRD', // Liberian Dollar
        'LYD', // Libyan Dinar
        'MAD', // Moroccan Dirham
        'MDL', // Moldovan Leu
        'MGA', // Malagasy Ariary
        'MKD', // Macedonian Denar
        'MMK', // Myanma Kyat
        'MNT', // Mongolian Tugrik
        'MOP', // Macanese Pataca
        'MRU', // Mauritanian Ouguiya
        'MUR', // Mauritian Rupee
        'MVR', // Maldivian Rufiyaa
        'MWK', // Malawian Kwacha
        'MXN', // Mexican Peso
        'MYR', // Malaysian Ringgit
        'MZN', // Mozambican Metical
        'NAD', // Namibian Dollar
        'NGN', // Nigerian Naira
        'NIO', // Nicaraguan Córdoba
        'NOK', // Norwegian Krone
        'NPR', // Nepalese Rupee
        'NZD', // New Zealand Dollar
        'PAB', // Panamanian Balboa
        'PEN', // Peruvian Nuevo Sol
        'PGK', // Papua New Guinean Kina
        'PHP', // Philippine Peso
        'PKR', // Pakistani Rupee
        'PLN', // Polish Zloty
        'PYG', // Paraguayan Guarani
        'QAR', // Qatari Rial
        'RSD', // Serbian Dinar
        'RWF', // Rwandan Franc
        'SBD', // Solomon Islands Dollar
        'SCR', // Seychellois Rupee
        'SDG', // Sudanese Pound
        'SEK', // Swedish Krona
        'SGD', // Singapore Dollar
        'SHP', // Saint Helena Pound
        'SLL', // Sierra Leonean Leone
        'SOS', // Somali Shilling
        'SRD', // Surinamese Dollar
        'SSP', // South Sudanese Pound
        'STN', // São Tomé and Príncipe Dobra
        'SYP', // Syrian Pound
        'SZL', // Swazi Lilangeni
        'THB', // Thai Baht
        'TJS', // Tajikistani Somoni
        'TMT', // Turkmenistani Manat
        'TND', // Tunisian Dinar
        'TOP', // Tongan Paʻanga
        'TRY', // Turkish Lira
        'TTD', // Trinidad and Tobago Dollar
        'TVD', // Tuvaluan Dollar
        'TZS', // Tanzanian Shilling
        'UGX', // Ugandan Shilling
        'UAH', // Ukrainian Hryvnia
        'UGX', // Ugandan Shilling
        'UYU', // Uruguayan Peso
        'UZS', // Uzbekistani Som
        'VES', // Venezuelan Bolívar Soberano
        'VND', // Vietnamese Dong
        'VUV', // Vanuatu Vatu
        'WST', // Samoan Tala
        'XAF', // Central African CFA Franc
        'XAG', // Silver Ounce
        'XAU', // Gold Ounce
        'XCD', // East Caribbean Dollar
        'XDR', // Special Drawing Rights
        'XOF', // West African CFA Franc
        'XPF', // CFP Franc
        'YER', // Yemeni Rial
        'ZAR', // South African Rand
        'ZMW', // Zambian Kwacha
        'ZWL'  // Zimbabwean Dollar
    ];
    return (
        <div className="flex pl-2 items-center bg-slate-950/50 border border-gray-300 rounded-md">
            <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt="flag img" className="w-8" />
            <select  onChange={handelCurrency}
                className="py-1 px-2 ml-1 text-white bg-slate-950/20 rounded-md" value={selectCurrency}>
                {
                    additionalCurrencyCodes.map((curr, index) => {
                        return <option key={index} value={curr}>{curr}</option>

                    })
                }

            </select>
        </div>)
}

export default Currencyselect