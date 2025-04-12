import React from 'react'

export default function Header() {
    return (
        <div>
            <div className='grid grid-cols-2 container mx-auto h-16 flex items-center text-white z-10 p-5'>
                <div>
                    <div className=' '>
                        <h1 className='font-bold text-4xl '>CAFE </h1>
                        <h6 className='font-bold text-xs tracking-widest'>CENTRAL</h6>
                    </div>
                </div>
                <div className='flex justify-end gap-10 items-center'>
                    <div className='flex gap-5 font-bold'>
                        <a href="#" className='hover:scale-105 transition-all'>Home</a>
                        <a href="#" className='hover:scale-105 transition-all'>About Us</a>
                        <a href="#" className='hover:scale-105 transition-all'>Find Us</a>
                        <a href="#" className='hover:scale-105 transition-all'>Contact</a>
                    </div>
                    <div>
                        <div className='border-2 px-5 py-2 rounded font-bold cursor-pointer hover:bg-[#CFA66F] hover:border-[#CFA66F] transition-all'>Download Menu</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
