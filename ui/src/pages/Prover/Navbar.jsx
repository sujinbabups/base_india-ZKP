/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
<div className='w-screen h-20 bg-[#00bcd4] font-bold text-[#2e3b55] text-xl'>
  <ul className='flex gap-5 justify-between mx-[5%] pt-5'>
    <div className=''>
      <Link to="/">
        <li>ZKP</li>
      </Link>
    </div>
    <div className='flex gap-4'>
      <Link to="/prover/">
        <li>Home</li>
      </Link>
      <Link to="/prover/request">
        <li>Add Proof</li>
      </Link>
    </div>
  </ul>
</div>

  )
}

export default nav;
