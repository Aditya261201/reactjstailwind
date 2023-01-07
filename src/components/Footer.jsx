import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full h-full bg-slate-800 text-white'>
            <div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-4 py-6'>
                    <div>
                        <h6 className='font-bold pt-2 uppercase'>Solutions</h6>
                        <ul>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Analytics</li>
                            <li className='py-1'>Commerce</li>
                            <li className='py-1'>Data</li>
                            <li className='py-1'>Cloud</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold pt-2 uppercase'>Support</h6>
                        <ul>
                            <li className='py-1'>Pricing</li>
                            <li className='py-1'>Documentation</li>
                            <li className='py-1'>Guides</li>
                            <li className='py-1'>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold pt-2 uppercase'>Company</h6>
                        <ul>
                            <li className='py-1'>About</li>
                            <li className='py-1'>Blog</li>
                            <li className='py-1'>Jobs</li>
                            <li className='py-1'>Press</li>
                            <li className='py-1'>Partners</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold pt-2 uppercase'>Legal</h6>
                        <ul>
                            <li className='py-1'>Claims</li>
                            <li className='py-1'>Privacy</li>
                            <li className='py-1'>Terms</li>
                            <li className='py-1'>Policies</li>
                            <li className='py-1'>Conditions</li>
                        </ul>
                    </div>
                    <div className='col-span-2'>
                        <h3 className='uppercase py-3'>Subscribe to our Newsletter</h3>
                        <p className='my-3'>The latest news, articles, and resources sent to your inbox weekly.</p>
                        <form>
                            <input className='rounded-md mx-2' type="email" />
                            <button className='px-2 '>Subscribe</button>
                        </form>
                        <div className='py-4'>
                            <a><FaFacebook className='inline-block mx-3'/></a>
                            <a><FaTwitter className='inline-block mx-3'/></a>
                            <a><FaInstagram className='inline-block mx-3'/></a>
                            <a><FaGithub className='inline-block mx-3'/></a>
                        </div>
                    </div>
                    
                </div>
                <hr />
                <div>
                    <p className='text-center py-4'>2022 Workflow, All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
