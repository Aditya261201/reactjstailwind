import React from 'react'
import bgImg from '../assets/cyber-bg.png'


const Hero = () => {
    return (
            <div className='w-screen h-screen overflow-hidden z-9 bg-zinc-400 flex flex-col justify-between'>
                <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                    <div className="flex flex-col justify-center md:items-start w-full pl-3 py-2 md:py-8">
                        <p className="text-xl md:text-2xl">Lorem ipsum dolor sit amet consectetur.</p>
                        <h1 className="text-3xl font-bold py-2 md:py-3 md:text-7xl">Lorem ipsum dolor sit.</h1>
                        <p className="text-xl md:text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className='py-2 md:py-3 mt-2 w-1/2 md:w-2/3'> Get's Started</button>
                    </div>
                    <div className='w-[70%] m-auto md:w-[90%]'>
                        <img src={bgImg}></img>
                    </div>
                </div>
                <div className="flex flex-col py-2 md:py-5 bottom-5 bg-zinc-300 mx-4 md:m-auto mb-2 text-center md:w-2/3  border border-slate-300 rounded-xl shadow-xl">
                    <p className='font-bold mb-1'>Data Services</p>
                    <div className="flex justify-between flex-wrap px-4">
                        <p className='flex px-3 py-2 text-slate-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            App Security
                        </p>
                        <p className='flex px-3 py-2 text-slate-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
                            </svg>
                            Dashboard Design
                        </p>
                        <p className='flex px-3 py-2 text-slate-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                            Cloud Data
                        </p>
                        <p className='flex px-3 py-2 text-slate-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                            API
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Hero