import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from 'next/image';


//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-4">
                <li>PHP</li>
                <li>Laravel</li>
                <li>JavaScript</li>
                <li>GraphQL</li>
                <li>Nest.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java</li>
                <li>Python</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>Catch The Flag Competition</li>
            <li>KLMINIHACK</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
                <li>SMK Pusat Bandar Puchong (1)</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <Image src="/AboutMe.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">As a student pursuing a diploma in Information & Communication Technology with a specialization in Software Engineering, I have acquired proficiency in
                        various programming languages and web development such as Python, Java, HTML, CSS, JavaScript, and PHP. This knowledge has equipped me with the skills to become a competent front-end or back-end developer.
                        Additionally, my expertise in SQL language and Cisco has given me the capability to manage work related to databases and networking. Furthermore, I am a determined and persistent individual who does not give up easily when faced with challenges and difficulties. In
                        my university assignments, I have developed my leadership skills by taking charge as a team leader, and I am committed to ensuring the overall progress and
                        success of any project.
                    </p>
                    <div className="flex flex-row mt-8">
                    {/* 1e */}
                    <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                        Skills
                    </TabButton>

                    <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active={tab === "experiences"}
                    >
                        Experiences
                    </TabButton>

                    <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        Education
                    </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;