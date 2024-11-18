import FancyButton from "@/components/Ui/Fancybutton";
import MagneticWrapper from "@/components/Ui/Magneticwrapper";
import { Profile } from "@/components/Ui/Profile";
import { FaArrowRight } from "react-icons/fa";


export default function Header() {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
        <Profile/>
        <div className="hidden md:inline">
            <MagneticWrapper>
                <FancyButton
                text="Let's talk" icon={<FaArrowRight/>}/>
            </MagneticWrapper>
        </div>
    </div>
  );
};
