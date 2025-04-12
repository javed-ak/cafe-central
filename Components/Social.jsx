import { FaFacebook, FaPinterest, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

export default function Social() {
    return (
        <div>
            <div className='flex gap-2 justify-around items-center'>
                <FaFacebook size={22}/>
                <RiTwitterXLine size={22} />
                <FaInstagram size={22} />
                <FaPinterest size={22} />
            </div>
        </div>
    )
}

