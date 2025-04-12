import { FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Social from "./Social";

export default function Footer() {
    return (
        <div className="relative bg-black">
            {/* ANGLED TOP SVG */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-full rotate-180">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[60px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1200 0L0 0 598.97 114.72 1200 0z"
                        className="fill-black"
                    ></path>
                </svg>
            </div>

            {/* FOOTER CONTENT */}
            <div className="container mx-auto text-white py-20 grid grid-cols-4 relative z-10">
                {/* COLUMN 1 */}
                <div className="p-10 flex flex-col gap-5">
                    <h1 className="font-bold text-2xl">Main Branch</h1>
                    <div className="flex flex-col gap-3">
                        <div className='flex items-center gap-5'>
                            <FaLocationDot size={22} />
                            <div>732/21 Second Street, King Street, New York</div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <FaPhoneAlt size={22} />
                            <div>+91 273823838</div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <FaMapMarkedAlt size={22} />
                            <div>Get Direction</div>
                        </div>
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div className="p-10 flex flex-col gap-5">
                    <h1 className="font-bold text-2xl">Another Branch</h1>
                    <div className="flex flex-col gap-3">
                        <div className='flex items-center gap-5'>
                            <FaLocationDot size={22} />
                            <div>732/21 Second Street, King Street, New York</div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <FaPhoneAlt size={22} />
                            <div>+91 273823838</div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <FaMapMarkedAlt size={22} />
                            <div>Get Direction</div>
                        </div>
                    </div>
                </div>

                {/* COLUMN 3 */}
                <div className="p-10 flex flex-col gap-5">
                    <h1 className="font-bold text-2xl">Download Menu</h1>
                    <div className="flex flex-col gap-3">
                        <img src="/javedakhtar.vercel.app.png" alt="https://javedakhtar.vercel.app" width={160} />
                    </div>
                </div>

                {/* COLUMN 4 */}
                <div className="p-10 flex flex-col gap-5">
                    <div>
                        <h1 className="text-3xl font-bold">CAFE</h1>
                        <h6 className="text-sm font-light">CENTRAL</h6>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore ex aperiam, fugit explicabo delectus?</div>
                    <div>
                        <Social />
                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="text-white container mx-auto flex justify-center items-center p-1 border-t-2 border-slate-800">
                <div className="p-2 text-sm">
                    © 2025 Cafe Central. All rights reserved. Design & Develop by Ilmora
                </div>
            </div>
        </div>
    );
}
