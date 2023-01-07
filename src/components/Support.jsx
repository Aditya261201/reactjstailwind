import React from 'react'
import support from "../assets/support.jpg"

const Support = () => {
    return (
        <div className='w-full h-full mt-24'>
            <div className='w-full bg-gray-900/80 absolute'>
                <img className='w-full h-screen object-cover mix-blend-overlay' src={support}></img>
            </div>

            <div className='relative text-center text-white pt-10 md:pt-40'>
                <h2 className='text-4xl md:text-7xl font-bold'>Support</h2>
                <h3 className='text-2xl md:text-5xl my-4 md:pt-6'>Finding the best Solutions</h3>
                <p className='text-sm md:text-3xl mx-6 md:mx-10 my-4 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit dolores beatae at rerum, cum accusantium voluptatum consectetur velit, similique voluptate numquam omnis hic modi earum nihil? Quisquam, sint tenetur! </p>
            </div>
            
            <div className='grid grid-cols-1 px-4 py-6 lg:grid-cols-3 lg:py-16 lg:mx-6 relative gap-x-10'>
                <div className='bg-white border-2 border-black md:border-none rounded-xl shadow-xl mb-8 md:pb-3'>
                    <div className='px-8 my-6'>
                        <div className='bg-purple-600 rounded-xl w-14 md:w-16 px-3 p-6 mt-[-3rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <h3 className='font-bold text-black text-xl mt-6'>Sales</h3>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos, quibusdam nostrum consectetur officiis ipsum eveniet ipsam odit iure id laborum minima fugit incidunt placeat tempora cupiditate sint quasi nihil.</p>
                    </div>
                </div>
                <div className='bg-white border-2 border-black md:border-none rounded-xl shadow-2xl mb-8 md:pb-3'>
                    <div className='px-8 my-6'>
                        <div className='bg-purple-600 rounded-xl w-14 md:w-16 px-3 p-6 mt-[-3rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                            </svg>
                        </div>
                        <h3 className='font-bold text-black text-xl mt-6'>Technical Support</h3>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos, quibusdam nostrum consectetur officiis ipsum eveniet ipsam odit iure id laborum minima fugit incidunt placeat tempora cupiditate sint quasi nihil.</p>
                    </div>
                </div>
                <div className='bg-white border-2 border-black md:border-none rounded-xl shadow-2xl mb-8 md:pb-3'>
                    <div className='px-8 my-6'>
                        <div className='bg-purple-600 rounded-xl w-14 md:w-16 px-3 p-6 mt-[-3rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <h3 className='font-bold text-black text-xl mt-6'>Media Inqueries</h3>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos, quibusdam nostrum consectetur officiis ipsum eveniet ipsam odit iure id laborum minima fugit incidunt placeat tempora cupiditate sint quasi nihil.</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Support