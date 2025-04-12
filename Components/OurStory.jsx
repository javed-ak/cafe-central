import { GiFlowerPot } from "react-icons/gi";

export default function OurStory() {
    return (
        <div className="hero-clip h-full">
            <div className="grid grid-cols-3 container mx-auto  gap-5 py-20 ">
                <div className="w-xl flex items-center">
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl flex flex-col justify-center items-center px-10 py-20 text-center gap-5  hover:scale-105 transition-all  z-1">
                        <div>
                            <div className="text-4xl font-[cursive] font-thin text-[#CFA66F]">Discover</div>
                            <div className="text-5xl font-serif font-medium">OUR STORY</div>
                        </div>
                        <GiFlowerPot size={26} />
                        <div className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque, sint libero tempora ducimus similique id natus. Tempore, provident praesentium?
                        </div>
                        <div className="cursor-pointer text-[#CFA66F] hover:scale-105 text-md">Learn More</div>
                    </div>
                </div>
                <div className="z-0 overflow-hidden rounded-lg">
                    <img src="/OurStory1.jpg" alt="" className="hover:scale-105 transition-all" />
                </div>
                <div className="z-0 overflow-hidden rounded-lg">
                    <img src="/OurStory2.jpg" alt="" className="hover:scale-105 transition-all" />
                </div>
            </div>
        </div>
    )
}
