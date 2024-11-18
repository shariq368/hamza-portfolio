import BackgroundCard from "@/components/cards/featured/Background";
import CertificationCard from "@/components/cards/featured/Certification";
import EductionCard from "@/components/cards/featured/Eduction";
import ExperienceCard from "@/components/cards/featured/Experience";
import MeCard from "@/components/cards/featured/Me";
import Resume from "@/components/cards/featured/Resume";
import Heading from "@/components/heading/Heading";
import Card from "@/components/Ui/Card";


export default function About() {
  return (
    <div className="pt-24 px-3 lg:px-8">
        <Heading
        number="02"
        title_1="About"
        title_2="Me"  />
        <div className="space-y-4 py-8">
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
                {/*Me Card*/}
                <MeCard />
                <Resume />
                <BackgroundCard/>
                {/* <Card title="Gallery" className="2xl:hidden">Gallery</Card> */}
            </div>
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
              <div className="space-y-4">
              <CertificationCard/>
              
              </div>
             <div className="space-y-4">
              <Card title="Stack">Stack</Card>
             <ExperienceCard/>
              
                  </div>
                  <div className=" 2xl:flex">
                  <EductionCard/>
                  </div>
            </div>
        </div>
    </div>
  )
}
