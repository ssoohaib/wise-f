import React from 'react'
import "./css/ConverterRow.css"

export default function ConverterRow(props) {
    const {
        label,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    }=props

    const currencyList=['EUR','USD','GBP','PKR']

  return (
    <div className='input-amount-div'>
        <label htmlFor="input-amount">{label}</label>

        <div>
            <input type="number" name="" id="input-amount" 
                onChange={onChangeAmount}
                value={amount}
            />
            <select name="currencies" id="currencies" 
                value={selectedCurrency}
                onChange={onChangeCurrency} >

                {currencyList.map((i)=>
                    <option key={i} value={i}>{i}</option>
                )}

            </select>
        </div>      
    </div>
  )
}
