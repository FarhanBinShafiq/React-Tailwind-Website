import React from 'react';
import about from '../assets/about.jpg'

const About = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] max-auto grid md:grid-cols-2'>
                     <img src={about} alt="" />

                     <div className='flex flex-col justify-center p-4'>
                        <p className='text-[#00df9a] font-bold'>Data Analysis Dashboard</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl uppercase font-bold py-2'>About Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut quos deleniti, modi voluptatum officia perferendis, impedit, quis officiis tempore quod porro voluptates distinctio reprehenderit unde atque debitis explicabo id?
                        </p>

                        <button className='bg-black md:mx-0 w-[200px]  h-10 rounded-md font-medium my-6 mx-auto px-3 text-[#00df9a]'>Get Started</button>
                     </div>
            </div>
            
        </div>
    );
};

export default About;