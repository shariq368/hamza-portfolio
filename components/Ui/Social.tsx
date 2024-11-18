import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Button from "./Button";




export default function SocialCard() {
  return (
    <div className="flex items-center flex-wrap gap-3">
        {Socials.map((social,i)=>(
            <Button key={i} link={social.link} isIcon>
                <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
            </Button>
        ))}
    </div>
  )
}


const Socials=[
    {
        icon:<FaLinkedinIn className="w-4 h-4"/>,
        link:"",
        username:"Muhammad Hamza Ali",
    },
    {
        icon:<FaFacebook className="w-4 h-4"/>,
        link:"",
        username:"Muhammad Hamza Ali",
    },
    {
        icon:<FaInstagram className="w-4 h-4"/>,
        link:"",
        username:"Muhammad Hamza Ali",
    },
];