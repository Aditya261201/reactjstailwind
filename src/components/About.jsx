import React from 'react'

const About = () => {
    return (
        <div className='w-full'>
            <div className='text-center px-4 py-6 md:px-8 md:py-8'>
                <h2 className='text-4xl md:text-6xl font-bold py-3'>Lorem ipsum dolor sit amet consectetur.</h2>
                <p className=' text-xl md:text-3xl text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat explicabo dolor consectetur consequuntur, tempore aspernatur.</p>
            </div>
            <div className='grid md:grid-cols-3 px-4 gap-4 text-center md:py-8'>
                <div className='border rounded-xl shadow-xl py-6'>
                    <p className='text-6xl font-bold text-violet-600'>100%</p>
                    <p className='text-3xl font-bold my-3'>Completion</p>
                </div>
                <div className='border rounded-xl shadow-xl py-6'>
                    <p className='text-6xl font-bold text-violet-600'>24/7</p>
                    <p className='text-3xl font-bold my-3'>Delivery</p>
                </div>
                <div className='border rounded-xl shadow-xl py-6'>
                    <p className='text-6xl font-bold text-violet-600'>100K</p>
                    <p className='text-3xl font-bold my-3'>Transactions</p>
                </div>
            </div>
        </div>
    )
}

export default About