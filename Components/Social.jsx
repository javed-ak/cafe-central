import { FaFacebook, FaPinterest, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

export default function Social() {
    return (
        <div>
            <div className='flex gap-2 justify-around items-center'>
                <div className="cursor-pointer hover:scale-110 transition-all"><FaFacebook size={22}/></div>
                <div className="cursor-pointer hover:scale-110 transition-all"><RiTwitterXLine size={22}/></div>
                <div className="cursor-pointer hover:scale-110 transition-all"><FaInstagram size={22}/></div>
                <div className="cursor-pointer hover:scale-110 transition-all"><FaPinterest size={22}/></div>
            </div>
        </div>
    )
}

