import AboutMeCard from "./components/AboutMeCard";
import ExpEduCard from "./components/ExpEduCard";
import IdCard from "./components/IdCard";
import ProjectsCard from "./components/ProjectsCard";
import SkillCard from "./components/SkillCard";

import {
  idCardData,
  aboutMeData,
  skillsData,
  expEduCardData,
  projectCardData,
} from "./config";

const App = () => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3 gap-4 p-5 bg-gray-950">
      <IdCard {...idCardData} />
      <AboutMeCard {...aboutMeData} />
      <SkillCard {...skillsData} />
      <ExpEduCard {...expEduCardData} />
      <ProjectsCard {...projectCardData} />
    </div>
  );
};

export default App;

const AboutMeCard: React.FC<AboutMeProps> = ({ content, sectionTitle }) => {
  return (
    <div className="bg-blue-600 xl:row-span-1 xl:col-span-2 flex items-center flex-col rounded-xl px-5 py-10 text-white">
      <h2 className="text-2xl font-semibold mb-10">{sectionTitle}</h2>

      <div className="space-y-3">
        {content.map((text, id) => {
          return <p key={id}>{text}</p>;
        })}
      </div>
    </div>
  );
};

export default AboutMeCard;

const EduCard: React.FC<EduCardProps> = ({
  education,
  endYear,
  institueLogo,
  instituteName,
  startYear,
}) => {
  return (
    <div className="w-full mb-10 space-y-1">
      <div className="flex items-center space-x-3">
        <img className="w-10 bg-white" src={institueLogo} />
        <h2 className=" text-xl font-medium">{instituteName}</h2>
      </div>
      <p>{education}</p>
      <p>
        {startYear} - {endYear}
      </p>
    </div>
  );
};

export default EduCard;

const ExpCard: React.FC<ExpCardProps> = ({
  companyName,
  description,
  endDate,
  role,
  startDate,
  companyLogo,
}) => {
  return (
    <div className="w-full mb-10 space-y-1">
      <div className="flex items-center space-x-3">
        <img className="w-10 bg-white " src={companyLogo} />
        <h2 className=" text-xl font-medium">{companyName}</h2>
      </div>
      <p className="font-medium">{role}</p>
      <p className="text-sm">
        {startDate} - {endDate}
      </p>
      <p className="pt-2 text-sm">{description}</p>
    </div>
  );
};

export default ExpCard;

import EduCard from "./EduCard";
import ExpCard from "./ExpCard";

const ExpEduCard: React.FC<ExpEduCardProps> = ({ experiences, education }) => {
  return (
    <div className="border border-gray-700 text-white xl:row-span-2 xl:col-span-1 flex items-center flex-col rounded-xl px-5 py-10 ">
      <h2 className="text-2xl font-semibold mb-10">Experience</h2>

      {experiences.map((props, id) => (
        <ExpCard key={`${props.companyName}-${id}`} {...props} />
      ))}

      <h2 className="text-2xl font-semibold my-4 mb-10">Education</h2>

      {education.map((props, id) => (
        <EduCard key={`${props.instituteName}-${id}`} {...props} />
      ))}
    </div>
  );
};

export default ExpEduCard;

import { FaPhoneAlt, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMaildotru, SiGooglemaps } from "react-icons/si";

const IdCard: React.FC<IdCardProps> = ({
  address,
  emailAddress,
  fullName,
  githubLink,
  instagramLink,
  linkedinLink,
  phoneNumber,
  profileImageLink,
  role,
  roleImage,
}) => {
  return (
    <div className="xl:row-span-2 xl:col-span-1 flex items-center flex-col rounded-xl px-5 py-10 bg-white">
      <div className="flex items-center justify-center">
        <img
          className="w-40 rounded-full border border-brand-main"
          src={profileImageLink}
        />
      </div>

      <h3 className="font-semibold text-4xl mt-6">{fullName}</h3>

      <div>
        <img className="w-40" src={roleImage} />
      </div>

      <h4 className=" w-40 text-center font-medium">{role}</h4>

      <div className="mt-8 space-y-2">
        <div className="flex items-center ">
          <FaPhoneAlt className="text-white bg-brand-main rounded-full p-1 text-xl" />
          <span className="pl-4">{phoneNumber}</span>
        </div>
        <div className="flex items-center ">
          <SiMaildotru className="text-white bg-brand-main rounded-full p-1 text-xl" />
          <span className="pl-4">{emailAddress}</span>
        </div>
        <div className="flex items-center ">
          <SiGooglemaps className="text-white bg-brand-main rounded-full p-1 text-xl" />
          <span className="pl-4">{address}</span>
        </div>
      </div>

      <div className="border-t mt-10 w-full p-8">
        <h4 className=" text-2xl font-medium text-center">Let's Connect</h4>
        <div className="flex items-center justify-center space-x-3 pt-5">
          <a target="_blank" href={instagramLink}>
            <FaInstagram className="text-3xl text-pink-500" />
          </a>
          <a target="_blank" href={linkedinLink}>
            <FaLinkedin className="text-3xl text-blue-700" />
          </a>
          <a target="_blank" href={githubLink}>
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IdCard;

import SingleProject from "./SingleProject";

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  projects,
  sectionTitle,
}) => {
  return (
    <div className="bg-sky-500 lg:col-span-2 xl:row-span-1 xl:col-span-2 flex items-center flex-col rounded-xl px-5 py-10 ">
      <h2 className="text-2xl font-semibold mb-10 text-white">
        {sectionTitle}
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {projects.map((props, id) => (
          <SingleProject key={id} {...props} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;

const SingleProject: React.FC<SingleProjectProps> = ({
  projectDescription,
  projectLink,
  projectTitle,
  projectImage
}) => {
  return (
    <a
      target="_blank"
      href={projectLink}
      className=" w-64 rounded-md overflow-hidden"
    >
      <img className="w-full h-36" src={projectImage} />
      <div className="py-5 px-4 bg-white">
        <h2 className="text-brand-main text-lg font-medium">{projectTitle}</h2>
        <p className="text-xs">{projectDescription}</p>
      </div>
    </a>
  );
};

export default SingleProject;

import SkillTag from "./SkillTag";

const SkillCard: React.FC<SkillCardProps> = ({ sectionTitle, skills }) => {
  return (
    <div className="bg-gray-900 text-white xl:row-span-1 xl:col-span-1 flex items-center flex-col rounded-xl px-5 py-10 ">
      <h2 className="text-2xl font-semibold mb-10 ">{sectionTitle}</h2>

      <div className="flex flex-wrap gap-1">
        {skills.map((skill, id) => (
          <SkillTag key={`${skill}-${id}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <span className="text-xs border border-blue-500 rounded-md p-2 bg-gray-800">
      {skill}
    </span>
  );
};

export default SkillTag;

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);