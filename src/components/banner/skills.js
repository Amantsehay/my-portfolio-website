import { FaPenNib, FaNetworkWired, FaLinux, FaShieldAlt, FaCode, FaJava, FaPython, FaUsers, FaUserTie, FaReact, FaCogs, FaDatabase, FaCodeBranch, FaServer, FaTrophy, FaBug } from 'react-icons/fa';
import './skills.css';
// import { FaServer, FaTrophy } from '@fortawesome/free-solid-svg-icons';
const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skill-category">
        <h3>Cybersecurity & Netwoking</h3>
        <div className="skill-icons">
          <span className="bannerIcon" title="Cybersecurity"><FaShieldAlt /></span>
          <span className="bannerIcon" title="Pen Testing"><FaPenNib /></span>
          <span className="bannerIcon" title="Malware Development"><FaBug /></span>
          <span className="bannerIcon" title="Scripting"><FaCode /></span>
          <span className="bannerIcon" title="Network Infrastructure"><FaNetworkWired /></span>
          <span className="bannerIcon" title="Linux"><FaLinux /></span>
          {/* <span className="bannerIcon" title="Offensive Security"><FaShieldAlt /></span> */}
        </div>
      </div>
      <div className="skill-category">
        <h3>Development</h3>
        <div className="skill-icons">
          <span className="bannerIcon" title="Frontend Development"><FaReact /></span>
          <span className="bannerIcon" title="Backend Development"><FaCogs /></span>
          <span className="bannerIcon" title="NestJS"><FaServer /></span>
          <span className="bannerIcon" title="SQL"><FaDatabase /></span>
        </div>
      </div>
      <div className="skill-category">
        <h3>Programming Languages</h3>
        <div className="skill-icons">
          <span className="bannerIcon" title="Java"><FaJava /></span>
          <span className="bannerIcon" title="Python"><FaPython /></span>
          <span className="bannerIcon" title="C++"><FaCodeBranch /></span>
        </div>
      </div>
      <div className="skill-category">
        <h3>Other Skills</h3>
        <div className="skill-icons">
          {/* <span className="bannerIcon" title="Machine Learning"><FaBrain /></span> */}
          <span className="bannerIcon" title="Competitive Programming"><FaTrophy /></span>
          <span className="bannerIcon" title="Teamwork"><FaUsers /></span>
          <span className="bannerIcon" title="Leadership"><FaUserTie /></span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
