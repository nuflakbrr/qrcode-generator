import React from 'react';
import QRCode from 'qrcode';

function App() {
  function generateQR() {
    let canvas = document.getElementById('canvas');
    let qrInput = (document.getElementById('qrInput') as HTMLInputElement).value;

    QRCode.toCanvas(canvas, qrInput, (err: any) => {
      if (err) console.error(err);
    });
  }

  return (
    <div className='bg-gray-900 min-h-screen overflow-hidden'>
      <div className='flex flex-col items-center justify-center max-w-4xl mx-auto'>
        <div className='bg-slate-100'>
          <canvas width={100} height={100} className='border-4 border-sky-500' id='canvas'></canvas>
        </div>

        <div className='bg-slate-100 rounded p-2 my-2'>
          <div className='flex w-full justify-between items-center mx-auto my-2'>
            <label htmlFor='qrInput' className='mr-2'>Masukkan Teks :</label>
            <input type='text' placeholder='Testing' id='qrInput' className='rounded p-1' onChange={generateQR} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
