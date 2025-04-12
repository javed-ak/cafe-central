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
                        <div className='flex items-center gap-1'>
                            <FaLocationDot size={20}/>
                            <div> 732/21 Second Street, King Street, New York</div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaPhoneAlt />
                            <div>+91 273823838</div>
                        </div>
                    </div>
                    <div className='flex gap-5 justify-end'>
                        <div className='flex gap-2'>
                            <div>Locate</div>
                            <div className='text-zinc-300'>|</div>
                            <div>Menu</div>
                        </div>
                        <div className='flex gap-2 items-center '>
                            <FaFacebook />
                            <RiTwitterXLine />
                            <FaInstagram />
                            <FaPinterest />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
