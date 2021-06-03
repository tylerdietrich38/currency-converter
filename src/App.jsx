import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function App() {
  const [conversion, setConversion] = useState({ rates: [] })
  const [amount, setAmount] = useState(1)

  useEffect(async () => {
    const response = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=56a4348392b313cd26250dccbcbb645f`
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
          <input type="number"></input>
        </section>
      </main>
    </>
  )
}
