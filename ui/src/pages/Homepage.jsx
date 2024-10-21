/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
<div className='w-screen h-[1000px] bg-cover bg-center bg-[#2e3b55] lg:pt-[15%] pt-[55%] lg:pl-[5%] pl-[10%]'>
        <div className='text-7xl font-extrabold'>
          <span className='text-[#e1e1e6]'>Zero-KP</span> <span className='text-[#00bcd4]'>VERIFY</span>
        </div>
        <div className='mt-10 flex gap-[3%] text-center'>
          <Link to="/prover">
            <div className="cursor-pointer w-[150px] h-[45px] pt-2 bg-[#00bcd4] text-white text-xl">
              Prover
            </div>
          </Link>
          <Link to="/verifier">
            <div className="cursor-pointer w-[150px] h-[45px] pt-[5px] border-2 border-[#00bcd4] text-[#e1e1e6] text-xl ">
              Verifier
            </div>
          </Link>
        </div>
    </div>


  );
}

export default Homepage;
