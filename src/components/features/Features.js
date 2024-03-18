import React from 'react';
import { AiFillTool, AiOutlineSecurityScan } from "react-icons/ai";
import { FaNetworkWired, FaServer, FaLinux, FaCode } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Offensive Security"
          des="Identify and exploit vulnerabilities in computer systems, networks, and applications to assess and improve their security posture."
          icon={<AiOutlineSecurityScan />}
        />
         <Card
          title="Security Analyst"
          des="Analyze and interpret security data to identify potential threats and vulnerabilities, investigate security incidents, and recommend countermeasures to mitigate risks."
          icon={<AiOutlineSecurityScan />}
        />
        <Card
          title="IT Support and Networking Troubleshooting"
          des="Provide technical assistance to users experiencing IT-related issues, diagnose and resolve network connectivity problems, and ensure smooth operation of computer systems."
          icon={<FaNetworkWired />}
        />
        <Card
          title="Linux Administration"
          des="Manage and maintain Linux-based operating systems, configure and optimize system performance, and troubleshoot system-related issues."
          icon={<FaLinux />}
        />
        <Card
          title="Web Development"
          des="Design and develop responsive and user-friendly websites and web applications using modern front-end and back-end technologies."
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
}

export default Features;
