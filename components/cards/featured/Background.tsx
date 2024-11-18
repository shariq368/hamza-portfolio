import Card from "@/components/Ui/Card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
        <div>
            <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
            MERN stack: Accelerates global app development with
JavaScript-based technologies. <br />
A virtual assistant handles remote admin tasks like scheduling,
calls, travel, and email. <br />
Created MERN apps, managed auth, data viz, APIs, with Node.js, React,
MongoDB, Express.js. Reviewed code, used Git/GitHub, offered industry
insights. Valuable real-world MERN internship. <br />
Oversees and operates critical software systems within the hospital,
ensuring seamless functionality and data management for effective patient
care, administrative tasks, and overall hospital operations.
            </p>
        </div>
    </Card>
  )
}
