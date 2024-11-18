import Card from "@/components/Ui/Card";
import Image from "next/image";
import Signature from "@/public/images/signature.png"
import { FaDownload } from "react-icons/fa";
import Button from "@/components/Ui/Button";
import SocialCard from "@/components/Ui/Social";

export default function Resume() {
  return (
    <Card className="md:h-full 2xl:h-full" >
        <p className="leading-[160%] font-normal text-white text-[16px]">
        Backend Developer with over three Year of experience in designing, developing, and maintaining scalable backend systems. Proficient in Python, Node.js, and SQL, with a deep understanding of RESTful APIs, microservices architecture, and database management. Strong expertise in optimizing server performance and implementing robust security measures. Skilled in collaborating with cross-functional teams to deliver high-quality software solutions🚀. 
        </p>
        {/*Signature*/}
        <div>
            <Image
            src={Signature} alt="Hamza Ali"/>
        </div>
        {/*Social and Resume Btn*/}
        <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
            {/*Social Btn*/}
            <SocialCard/>
            <Button>
                <FaDownload/>
                Resume
            </Button>
        </div>
    </Card >
  )
}
