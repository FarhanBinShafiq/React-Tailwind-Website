import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const PricingCards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full border shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-150'>
                    <img className='w-20 mx-auto ' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center font-bold text-4xl'>$ 149</p>
                    <div className='text-center font-medium' >
                        <p className='py-2 border-b mx-8 mt-8'>500 gb Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>
                        <button className='bg-[#00df9a] content-center md:mx-0 w-[200px]  h-10  rounded-md font-medium my-6 mx-auto px-3 text-[#000000d0]'>Start Trial </button>
                    </div>
                   
                </div>

                <div className='w-full border bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-150'>
                    <img className='w-20 mx-auto ' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                    <p className='text-center font-bold text-4xl'>$ 149</p>
                    <div className='text-center font-medium' >
                        <p className='py-2 border-b mx-8 mt-8'>500 gb Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>
                        <button className='bg-[#00df9a] content-center md:mx-0 w-[200px]  h-10  rounded-md font-medium my-6 mx-auto px-3 text-[#000000d0]'>Start Trial </button>
                    </div>
                   
                </div>

                <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-150'>
                    <img className='w-20 mx-auto ' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                    <p className='text-center font-bold text-4xl'>$ 149</p>
                    <div className='text-center font-medium' >
                        <p className='py-2 border-b mx-8 mt-8'>500 gb Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>
                        <button className='bg-[#00df9a] content-center md:mx-0 w-[200px]  h-10  rounded-md font-medium my-6 mx-auto px-3 text-[#000000d0]'>Start Trial </button>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default PricingCards;