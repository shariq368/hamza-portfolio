import Card from "@/components/Ui/Card";
import { Timeline } from "@/components/Ui/Timeline";


export default function ExperienceCard() {
    return (
        <Card title="My Experience">
            <Timeline>
                <span>
                    <span className="text-white underline">MERN STACK DEVELOPER</span> <br />
Stallyons Technologies, Gulshan-e-Iqbal<br /> 17/Jan to 17/April, <br />
<p className="text-white/[0.4]">Created MERN apps, managed auth, data viz, APIs, with Node.js, React,
MongoDB, Express.js. Reviewed code, used Git/GitHub, offered industry
insights. Valuable real-world MERN internship.</p>
</span>
                <span>
                    <span className="text-white underline">IT ASSISTANT</span> <br />
Zubaida Medical Center, Near Dhoraji <br /> July-2023 to Present, <br />
<p className="text-white/[0.4]" >Oversees and operates critical software systems within the hospital,
ensuring seamless functionality and data management for effective patient
care, administrative tasks, and overall hospital operations</p></span>
            </Timeline>
        </Card>
    )
}
