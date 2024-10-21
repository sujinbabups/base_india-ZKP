/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const VerifierHome = () => {
  const [qrValue, setQrValue] = useState('');  
  const [showQr, setShowQr] = useState(false); 

  const handleGenerateQr = () => {
    if (qrValue) {
      setShowQr(true);  
    } else {
      alert('Please enter a value to generate a QR code');
    }
  };

  return (
    <div className="">
    <div className="flex flex-col pt-[2%] lg:pl-[40%] pl-[12%]">
      <div className="pt-2 pb-5">
        <div className='w-[300px] h-[200px] flex items-center justify-center border-2 border-gray-300'>
          {showQr ? (
            <QRCode value={qrValue} className="w-full h-full" />
          ) : (
            <span className="text-gray-400">No QR Code Generated</span>
          )}
        </div>
      </div>
  
      <input
        type="text"
        placeholder="Enter ID"
        value={qrValue}
        onChange={(e) => setQrValue(e.target.value)} 
        className="w-[300px] h-10 pl-2 border-2 border-[orange] text-black rounded-md"
      />
  
      <button
        onClick={handleGenerateQr}
        className="cursor-pointer w-[300px] h-10 bg-white text-black text-center mt-4 border-2 border-[orange] rounded-md hover:bg-[orange] hover:text-white transition duration-300"
      >
        Generate QR Code
      </button>
  
      <button className='w-[300px] h-10 bg-[orange] text-xl text-white text-center mt-4 rounded-md hover:bg-orange-600 transition duration-300'>
        Check
      </button>
    </div>
  </div>
  
  );
};

export default VerifierHome;
