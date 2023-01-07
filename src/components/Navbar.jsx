import React, { useState } from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    console.log(nav)
    const handleClick = () => setNav(!nav)  // to toggle the nav state.
    
    const handleClose = () => setNav(!nav)

    return (
        <>
            <div className='w-screen h-[5vh] md:h-[10vh] z-10 relative bg-zinc-400 drop-shadow-lg'>
                <div className='px-2 flex justify-between items-center w-full h-full'>
                    <div className='flex items-center'>
                        <h1 className='text-2xl md:text-4xl font-bold mr-5'>BRAND</h1>
                        <ul className="hidden md:flex">
                            <li className='cursor-pointer hover:underline'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                            <li className='cursor-pointer hover:underline'><Link to="about" smooth={true} offset={-20} duration={500}>About</Link></li>
                            <li className='cursor-pointer hover:underline'><Link to="support" smooth={true} offset={0} duration={500}>Support</Link></li>
                            <li className='cursor-pointer hover:underline'><Link to="allinone" smooth={true} offset={0} duration={500}>Platforms</Link></li>
                            <li className='cursor-pointer hover:underline'><Link to="pricing" smooth={true} offset={0} duration={500}>Pricing</Link></li>
                        </ul>
                    </div>
                    <div className="hidden md:flex pr-4">
                        <button className='border-none bg-transparent font-bold px-8 py-3 border-indigo-600 text-black mr-4'>Sign In</button>
                        <button className='px-8 py-3 font-bold'>Sign Up</button>
                    </div>
                    {/* hamburger menu - only on small devices and hidden on medium and above. */}
                    <div className='md:hidden' onClick={handleClick}>
                    {/* ternary operator to show menu and close menu icon as per nav state. */}
                        {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        }
                    </div>
                </div>
                {/* if nav state if false then display is hidden and if nav state is true then show the nav-list. */}
                <ul className={!nav ? 'hidden' : 'absolute bg-zinc-400 w-full'}>
                    <li className='border-b-2 border-zinc-500 w-full'><Link onClick={handleClose} to="home" smooth={true} offset={50} duration={500}>Home</Link></li>
                    <li className='border-b-2 border-zinc-500 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={50} duration={500}>About</Link></li>
                    <li className='border-b-2 border-zinc-500 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={50} duration={500}>Support</Link></li>
                    <li className='border-b-2 border-zinc-500 w-full'><Link onClick={handleClose} to="allinone" smooth={true} offset={50} duration={500}>Platforms</Link></li>
                    <li className='border-b-2 border-zinc-500 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li>
                    <div className='flex flex-col my-4'>
                        <button className='bg-transparent px-8 py-3 text-indigo-800 font-bold mb-4 mx-6'>Sign In</button>
                        <button className='px-8 py-3 mx-6 font-bold'>Sign Up</button>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Navbar
