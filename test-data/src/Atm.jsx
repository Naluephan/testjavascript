import React, { useState } from 'react'

const App = () => {
  const [amount, setAmount]= useState(0)
  const clearAmount = () => {
    setAmount (0)
  }
  
  return (
    <div>
      <h1>กดเงินไม่ใช้บัตร</h1>
      <div>จำนวนเงิน {amount} บาท</div>
      <hr />
    <div>
      <button onClick={()=> setAmount(amount+100)}>100</button>
      <button onClick={()=> setAmount(amount+500)}>500</button>
      <button onClick={()=> setAmount(amount+1000)}>1000</button>
      <button onClick={()=> setAmount(amount+5000)}>5000</button>
      <button onClick={clearAmount}>Clear</button>
    </div>
    </div>
  )
}

export default App
