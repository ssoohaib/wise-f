import React, { useEffect,useState } from 'react'
import ConverterRow from './ConverterRow'
import './css/Converter.css'
import Comparison from './Comparison';





export default function Converter() {
    var myHeaders = new Headers();
        myHeaders.append("apikey", "ZWsFWO9slefWOjcAXZzeXXXGgZ61bI7M");
    
        var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('PKR')
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)



    useEffect(()=>{
    
        fetch("https://api.apilayer.com/exchangerates_data/convert?to=PKR&from=USD&amount=1", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                
                setExchangeRate((Math.round((result.info.rate + Number.EPSILON) * 100) / 100))
            })
            .catch(error => console.log('error', error));
    },[])

    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, requestOptions)
            .then(res => res.json())
            .then(data => setExchangeRate((Math.round((data.info.rate + Number.EPSILON) * 100) / 100)))
        }
      }, [fromCurrency, toCurrency])

    function handleFromAmountChange(e){
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    function handleToAmountChange(e){
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }


    let percentage=0
    let ourCost=(fromAmount/100)*percentage

    
  return (
    <>
        <section id='converter'>
            <div className="converter-container">
                <div className="converter-left">
                    <div className="converter-left-container">
                        <h1>International<br />Money<br />Transfer</h1>
                        <p>
                            Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing elit. <span>Sapiente</span> amet magni, iure, minima soluta quam distinctio impedit vero cupiditate tempora <span>necessitatibus</span> expedita sequi odit <span>corporis</span> alias unde adipisci enim. Autem?
                        </p>
                        <p>
                            FCA Regulated
                        </p>
                        <a href="">Learn more</a>
                    </div>
                </div>
                <div className="converter-right">
                    <div className="converter-right-container">


                        <ConverterRow
                            label="You send exactly"
                            selectedCurrency={fromCurrency}
                            onChangeCurrency={e=>setFromCurrency(e.target.value)}
                            onChangeAmount={handleFromAmountChange}
                            amount={fromAmount}
                        />
                        <ul>
                            <li><i className="fa-solid fa-minus"></i><div><p>{ourCost} {fromCurrency}</p><p>Our cost</p></div></li>
                            <li><i className="fa-solid fa-equals"></i><div><p>{fromAmount-ourCost} {fromCurrency}</p><p>Total amount we'll convert</p></div></li>
                            <li><i className="fa-solid fa-xmark"></i><div><p>{exchangeRate}</p><p>Conversion rate</p></div></li>
                        </ul>
                        <ConverterRow
                            label="Recipient gets"
                            selectedCurrency={toCurrency}
                            onChangeCurrency={e=>setToCurrency(e.target.value)}
                            onChangeAmount={handleToAmountChange}
                            amount={toAmount}
                        />


                        <div className='save-upto'>
                            {/* <p>You could save up to <span>36 GBP</span>.</p> */}
                        </div>
                        <div className="converter-btns">
                            <a href="">Compare Price</a>
                        </div>


                    </div>
                </div>
            </div>
        </section>

        <Comparison
            toSendAmount={fromAmount}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            recipientGets={toAmount}
            transferFee={ourCost}
            exchangeRate={exchangeRate}
         />
    </>
  )
}
