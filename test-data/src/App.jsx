import React, { useState } from 'react'
import Atm from './Atm'
import Register from './Register'
const App = () => {
  const [number, setNumber]= useState(0)
  const addNumber = () => {
    setNumber (number+1)
  }
  const deleteNumber = () => {
    setNumber (number-1)
  }
  return (
    <div>
      <Atm/>
      <Register/>
      <h1>MooSatae</h1>
      <div>ราคาไม้ละ {number} บาท</div>
    <div>
      <button onClick={addNumber}>เพิ่ม</button>
      <button onClick={deleteNumber}>ลบ</button>
    </div>
    <hr />
    <ul>
      <li>5 ไม้ ={number * 5 } บาท</li>
      <li>10 ไม้ ={number * 10 } บาท</li>
      <li>20 ไม้ ={number * 20 } บาท</li>
      <li>30 ไม้ ={number * 30 } บาท</li>
      <li>40 ไม้ ={number * 40 } บาท</li>
      <li>50 ไม้ ={number * 50 } บาท</li>
      <li>60 ไม้ ={number * 60 } บาท</li>
      </ul>
    </div>
  )
}

export default App
