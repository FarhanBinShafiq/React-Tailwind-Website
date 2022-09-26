import React from 'react';
 
 
import './Home.css'

const Home = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800] mt-[-96px]  w-full h-screen max-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold p-2'>Lorem ipsum dolor  iusto a eaque.</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-4'> Lorem ipsum dolor sit </h1>
                <div>
                    <p className='md:text-3xl sm:text-4xl text-2xl font-bold'>Lore,Lorem ipsum dolor </p>
                </div>

                <button className='bg-[#00df9a] w-[200px]  h-10 rounded-md font-medium my-6 mx-auto px-3 text-black'>Get Started</button>

                 
            </div>
        </div>
    );
};


export default Home;