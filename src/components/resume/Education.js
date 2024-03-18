import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center" >Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Software Engineering"
            subTitle="Addis Ababa University (2022 - present)"
            
          />
          <ResumeCard
            title="A2SVian"
            subTitle="African to Silcon Valley Education(2023 - present)"
           
            des="African to Silcon Valley Education is a non profit program that helps students get prepared to work and compete in top tech companies. It's also a hub where coders compete to test their competitive programming skill"
          />

          <ResumeCard
            title="Secondary School Education"
            subTitle="Abreha Woatsibeha Secondary School (2017 - 2021)"
            result="647/700"
            des="Secondary highschool is a four year program before going to university."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>

        <ResumeCard
  title="Cisco's Introduction to Networking"
  subTitle="Certified Course"
  des="I've been certified in Cisco's Introduction to Networking, which provided me with fundamental knowledge and skills in networking principles and technologies."
/>
<ResumeCard
  title="Red Hat's Introduction to Linux and Virtual Machines"
  subTitle="Certified Course"
  des="I've completed Red Hat's Introduction to Linux and Virtual Machines course, which equipped me with essential skills in Linux operating systems and virtualization technology."
/>
<ResumeCard
  title="VMware's Course to Virtualization"
  subTitle="Certified Course"
  des="I've completed VMware's Course to Virtualization, which provided me with a comprehensive understanding of virtualization concepts and VMware technologies."
/>
<ResumeCard
  title="Google's Certification of Cybersecurity"
  subTitle="In Progress"
  des="I'm currently working towards obtaining Google's Certification of Cybersecurity to enhance my expertise in cybersecurity practices and principles."
/>
<ResumeCard
  title="Google's Certification of IT Support"
  subTitle="In Progress"
  des="I'm also on my way to achieve Google's Certification of IT Support, which will further validate my skills in providing IT support services."
/>

        {/* <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Education;
