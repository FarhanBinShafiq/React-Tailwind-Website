import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white'>
              <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                 <div className='lg:col-span-2 mb-3'>
                    <h1 className='md:text-2xl sm:text-xl text-2xl text-center font-bold py-2'>Wants Latest News or Updates ?</h1>
                    <p className='text-center '> Sign Up & Stay up to Date</p>
                 </div>

              <div>
              <div className='flex p-2 flex-col items-center sm:flex-row justify-between'>
                    <input className='p-3 flex w-2/3 rounded-md text-black' type="email" placeholder='Enter Your Email..' />
                     <button className='bg-[#00df9a] md:mx-0 w-[100px]  h-10  rounded-md font-medium my-6 mx-auto px-3 text-[#000000d0]'>Notify Me</button>
                    
                 </div>

                 <div>
                     <p className='text-center'>We are care about your protection of your data. Read our</p>
                     <span className='text-center text-[#00df9a]'>Privacy Policy</span>
                     </div>
              </div>

                 
               
              </div>
        </div>
    );
};

export default Newsletter;