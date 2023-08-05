import React, { useEffect, useState } from 'react'
import './css/Comparison.css'
// import puppeteer from 'puppeteer';

export default function Comparison(props) {

    const [exchangeRatess,setExchangeRatess]=useState({})


    useEffect(()=>{        
        
        async function getExchangeData(){
            const response = await fetch(`http://localhost:5000/sadapay`);
            const exchangeRates =await  response.json();
            // console.log(exchangeRates);    
            setExchangeRatess(exchangeRates)
            console.log(exchangeRatess);
        }

        getExchangeData()
        
    },[])


    const {toSendAmount,
        fromCurrency,
        toCurrency,
        recipientGets,
        transferFee,
        exchangeRate}=props

  return (
    <section id="comparison">
        <div className="comparison-container">
            <div className="comparison-upper">
                <h1>Find out how much it costs to<br />send money abroad</h1>
            </div>
            <div className="comparison-lower">
                <table>
                    <tr>
                        <th><p>Sending {toSendAmount} {fromCurrency} with</p></th>
                        <th><p>Recipient gets</p><span>(Total after fees)</span></th>
                        <th><p>Transfer fee</p></th>
                        <th><p>Exchange rate</p><span>({toSendAmount} {fromCurrency} → {toCurrency})</span></th>
                    </tr>
                    <tr className='tr-to-lit'>
                        <td className='table-logo'><img src="https://wise.com/public-resources/assets/logos/wise-personal/logo_inverse.svg" alt="" /></td>
                        <td className='price-bold' ><p>{recipientGets} {toCurrency}</p></td>
                        <td><p>{transferFee} {fromCurrency}</p></td>
                        <td><p>{exchangeRate}</p></td>
                    </tr>



                    <tr className='tr-to-not-lit'>
                        <td className='table-logo'><img src="https://sadapay.pk/wp-content/uploads/2020/04/website-logo.png" alt="" /></td>
                        <td className='price-bold'>
                            <p>
                                {fromCurrency=='USD' &&
                                toSendAmount*(exchangeRatess.USD)}
                                {fromCurrency=='EUR' &&
                                toSendAmount*(exchangeRatess.EUR)}
                                {fromCurrency=='GBP' &&
                                toSendAmount*(exchangeRatess.GBP)} &nbsp;
                                {toCurrency}
                            </p>

                            <span>
                                <i class="fa-solid fa-caret-down"></i> 
                                {fromCurrency=='USD' &&
                                recipientGets-(toSendAmount*(exchangeRatess.USD))} 
                                {fromCurrency=='EUR' &&
                                recipientGets-(toSendAmount*(exchangeRatess.EUR))} 
                                {fromCurrency=='GBP' &&
                                recipientGets-(toSendAmount*(exchangeRatess.GBP))} &nbsp;                   
                                {toCurrency}
                            </span>
                        </td>
                        <td>
                            <p>
                                {fromCurrency=='USD' &&
                                ((recipientGets-(toSendAmount*(exchangeRatess.USD)))*-1)/exchangeRate} 
                                {fromCurrency=='EUR' &&
                                ((recipientGets-(toSendAmount*(exchangeRatess.EUR)))*-1)/exchangeRate} 
                                {fromCurrency=='GBP' &&
                                ((recipientGets-(toSendAmount*(exchangeRatess.GBP)))*-1)/exchangeRate} &nbsp; 
                                {fromCurrency}
                            </p>
                        </td>
                        <td>
                            <p>
                                {fromCurrency=='USD' &&
                                exchangeRatess.USD}
                                {fromCurrency=='EUR' &&
                                exchangeRatess.EUR}
                                {fromCurrency=='GBP' &&
                                exchangeRatess.GBP}
                            </p>
                        </td>
                    </tr>











                    {/* <tr className='tr-to-not-lit'>
                        <td className='table-logo'><img src="https://studentambassadors.microsoft.com/Assets/Badge/LevelAlpha160x143.png" alt="" /></td>
                        <td className='price-bold'><p>1,125.23 EUR</p><span><i class="fa-solid fa-caret-down"></i> -0.02 EUR</span></td>
                        <td><p>4.28 GBP</p></td>
                        <td><p>1.13007</p><span>Mid-market rate</span></td>
                    </tr> */}
                </table>
            </div>


        </div>
    </section>
  )
}
