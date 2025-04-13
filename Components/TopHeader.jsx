import React from 'react'
import { FaFacebook, FaPinterest, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

export default function TopHeader() {
    return (
        <div>
            <div className='px-4 py-2 justify-between bg-white/90'>
                <div className='container mx-auto grid grid-cols-2'>
                    <div className='flex gap-5'>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <FaLocationDot size={20}/>
                            <div> 732/21 Second Street, King Street, New York</div>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <FaPhoneAlt />
                            <div>+91 273823838</div>
                        </div>
                    </div>
                    <div className='flex gap-5 justify-end'>
                        <div className='flex gap-2'>
                            <div className='cursor-pointer'>Locate</div>
                            <div className='text-zinc-300'>|</div>
                            <div className='cursor-pointer'>Menu</div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='cursor-pointer hover:scale-105'><FaFacebook /></div>
                            <div className='cursor-pointer hover:scale-105'><RiTwitterXLine /></div>
                            <div className='cursor-pointer hover:scale-105'><FaInstagram /></div>
                            <div className='cursor-pointer hover:scale-105'><FaPinterest /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
