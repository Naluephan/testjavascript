import React, { useState } from 'react'
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('ชื่อที่กรอก:', name);
    console.log('Email:', email);
  };

  return (
    <div>
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">ชื่อ :</label>
    <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
    <label htmlFor="email">Email :</label>
    <input type="email" id="name" value={email} onChange={(event) => setEmail(event.target.value)} />
    <button type='submit'>บันทึก</button>
  </form>
  <div>ชื่อ  : {name} Email  : {email}</div>
  </div>
  )
}

export default Register
