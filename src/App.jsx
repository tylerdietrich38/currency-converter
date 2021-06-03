import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function App() {
  const [conversion, setConversion] = useState({ rates: {} })
  const [amount, setAmount] = useState(1)

  useEffect(async () => {
    const response = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=139caf47735091d47447d89fa982acf9`
    )
    console.log(response)
    setConversion(response.data.rates)
  }, [])

  return (
    <>
      <header>
        <h1>Currency Converter</h1>
      </header>
      <main>
        <section>
          <ul>
            <input
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            ></input>
            <button>Convert Currency</button>
            {Object.entries(conversion.rates).map(
              ([currencyCode, currencyPrice]) => {
                return (
                  <li key={currencyCode}>
                    {currencyCode}: {(currencyPrice * amount).toFixed(2)}
                  </li>
                )
              }
            )}
          </ul>
        </section>
      </main>
    </>
  )
}
