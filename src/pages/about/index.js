import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./index.module.css";

const skills = [
  "C++",
  "Python",
  "JavaScript",
  "MySQL",
  "NoSQL",
  "Java",
  "R",
  "Figma",
]; // Example skills

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal website to showcase my work and projects.",
    detailedDescription:
      "This project is a comprehensive **portfolio** website designed to showcase my technical skills, projects, and professional background. It features a responsive design, interactive elements, and a blog section for sharing insights.",
    image: "/img/website.png",
    link: "http://www.arvinhay.me",
  },
  {
    name: "Healthy Eating App",
    description: "A healthy eating app to empower users to achieve their health goals.",
    detailedDescription:
      "This project is a comprehensive mobile application designed to help users achieve their health goals, while also providing a platform for users to track their progress with recipes. It features a user-friendly interface and a database of healthy recipes",
    image: "/img/healthapp.jpg",
    link: "https://drive.google.com/drive/folders/1hePotIMlxmLfYEXJvsQpdF4GUSJNn9BH?usp=sharing",
  },
  {
    name: "Claxon Tournament",
    description: "An online gaming tournament platform for competitive gamers.",
    detailedDescription:
      "This project is a comprehensive online platform designed to host and manage gaming tournaments. We have collaborated with the gaming developers in the mobile gaming industry \
      to bring exciting tournaments with prizepools to players. Our tournaments are streamed on YouTube.",
    image: "/img/claxontournament.jpeg",
    link: "https://claxontournaments.net/",
  },
  {
    name: "GachaFood",
    description: "An online restaurant for Southeast Asian cuisine.",
    detailedDescription:
      "This is a small business that my family and I started. We sell handmade curry puffs and other Southeast Asian cuisine in Melbourne.\
       We have a strong commitment to spreading Southeast Asian culinary. Throughout the years, we have received 5/5⋆ reviews from a base of over 150 satisfied customers through exceptional food quality and customer service.\
       During COVID, we have donated 20 curry puffs to the sick and elderly in our community. We have also donated 100 curry puffs to the homeless in Melbourne CBD.",
    image: "/img/gachafood.jpg",
    link: "https://www.facebook.com/gachafoodofficial",
  }
];

function SkillsSection({ skills }) {
  return (
    <div className={styles.skillList}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillItem}>
          {skill}
        </div>
      ))}
    </div>
  );
}

const markdownToHtml = (text) => {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};
const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={clsx("card", styles.projectCard)}>
      <div className="card__header">
        <h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </h3>
      </div>
      <div className="card__body">
        <p>{project.description}</p>
        {isExpanded && (
          <>
            <div
              className={styles.projectDetails}
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(project.detailedDescription),
              }}
            /> <br/>
            <div>
            <img src={project.image} alt={project.name} className={styles.projectImage} />            
            </div>
          </>
        )}
      </div>
      <div className="card__footer">
        <button onClick={toggleExpand} className={styles.learnMoreButton}>
          {isExpanded ? "Show Less" : "Expand"}
        </button>
      </div>
    </div>
  );
};

function AboutpageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <div className="container">
        <div className={clsx("padding-vert--xl", styles.sectionAlt)}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                {/* Introduction Section */}
                <section>
                  <div>
                    <div id="user-content-toc">
                      <ul style={{ textAlign: "center" }}>
                        <summary>
                          <h1 style={{ display: "inline-block" }}>
                            Hi 👋, I'm Arvin
                          </h1>
                          <h3 className="text--center text-margin-lg">
                            A university student that is passionate about
                            technology and writing
                          </h3>
                        </summary>
                      </ul>
                    </div>
                    <img
                      src="/img/me.jpeg"
                      alt=""
                      className={clsx(styles.profileImage)}
                      width="300px"
                    />
                    <div>
                      <h3>
                        <button
                          type="button"
                          className={clsx(styles.btnPrimary)}
                        >
                          <a href="./resume">Resume 💾</a>
                        </button>
                      </h3>
                    </div>
                    <ul style={{ textAlign: "center" }}>
                      Feel free to reach out on{" "}
                      <a href="https://www.linkedin.com/in/arvinloh-/">
                        LinkedIn
                      </a>{" "}
                      or on Discord (hyunski)
                    </ul>
                    <hr />
                  </div>
                </section>
                {/* Introduction Section 2 */}
                <br />
                <section>
                  <h1 className="text--center text-margin--lg">
                    <span className="badge badge--primary">Who am I?</span>
                  </h1>
                  <p>
                    I am <strong>Arvin Hay</strong> in my second year of
                    Bachelor of Science majoring in Computational Science and
                    Mathematics at Monash University in Australia. I am planning
                    to build awesome, delightful & secure software. <br/> <br/>
                    In my first year, I have completed 3 semester 
                    worth of units (12 units) and have achieved a WAM of 77.
                  </p>
                </section>
                {/* Project Section 3 */}
                <section>
                  <div>
                    <h1 className="text--left text-margin--lg ">
                      <span className="badge badge--primary">Projects</span>
                    </h1>
                  </div>
                  <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                  </div>
                </section>
                {/* GitHub button correctly placed outside the loop */}
                <section>
                  <div>
                    <h3>
                      <button type="button" className={clsx(styles.btnPrimary)}>
                        <a href="https://github.com/arvinloh">
                          <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                      </button>
                    </h3>
                  </div>
                </section>
                {/* Skills Section 4 */}
                <section>
                  <div>
                    <h1 className="text--left text-margin--lg ">
                      <span className="badge badge--primary">Skills</span>
                    </h1>
                  </div>
                  {/* Replace hardcoded skills with SkillsSection component */}
                  <SkillsSection skills={skills} />
                </section>
                {/* Experience Section 5 */}
                <section>
                  <h1 className="text text--right text-margin--lg  ">
                    <span className="badge badge--primary ">Experience</span>
                  </h1>

                  <div className={styles.experienceTimeline}>
                    {/* Example Experience */}
                    <div className = {styles.timelineDot}></div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDate}>Nov 2023 - Present</div>
                      <div className={styles.timelineContent}>
                        <h1>Entrepreneurship Portfolio @ Monash University</h1>
                        <h2>Fastrack Founder 2024</h2>
                        <p>
                        • Rapid Prototyping: Spearheaded the development and implementation of rapid prototyping techniques, facilitating real-life user testing.<br/> <br/>
                        • Industry Collaboration and Network Expansion: Engaged in a dynamic collaboration with a wide network of industry partners, including notable organizations like Next - Reece Group, Shadowboxer, Hypershift Systems, LUNA Start-up Studio, Amazon Web Services, LaunchVic, Xailient, ThinkHQ, Airwallex, etc.<br/><br/>
                        • Business Acumen: Gained substantial experience in business operations and strategies, enhancing my understanding of commercial practices and market dynamics.<br/>
                        </p>
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDate}>Nov 2022 - Present</div>
                      <div className={styles.timelineContent}>
                        <h1>Gold 4Life Real Estate</h1>
                        <h2>Real Estate Agent</h2>
                        <p>
                          1. Perform market appraisals for sales of property, businesses or commercial leasing<br/><br/>
                          2. Use personal initiative, source prospective sellers or buyers of property or businesses, or prospective property owners or tenants in relation to the leasing of commercial property<br/><br/>
                          3. Supervise the necessary listing and sales documentation for property or businesses, or leases or agreements to lease associated with commercial property<br/><br/>
                          4. Conduct market research and provide marketing advice to customers of the real estate business<br/><br/>
                          5. Conduct negotiations between the prospective buyer and seller of property or businesses, or between a prospective tenant and the property owner<br/><br/>
                          6. Conduct inspections with interested parties for real property or businesses that are for sale (including open homes)<br/><br/>
                          7. Organise advertising, sign boards, searches, and more<br/><br/>
                          8. Conduct auction(s) of property<br/><br/>
                          9. Liaise with conveyancers or solicitors involved in the sale.
                        </p>
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDate}>Nov 2021 - Aug 2023</div>
                        <div className={styles.timelineContent}>
                          <h1>Co-Founder</h1>
                          <h2> GachaFood</h2>
                          <p>
                            • 5/5⋆ reviews from a base of over 150 satisfied customers through exceptional food quality and customer service.<br/><br/>
                            • Managed and maintained the company’s website and Facebook page. Developed a bot for efficient handling of enquiries, streamlining the communication process and improving response times.<br/><br/>
                            • Distribute handmade curry puffs across Southeast, CBD, and West Melbourne suburbs, with strong commitment to spreading Southeast Asian culinary.
                          </p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDate}>Sep 2017 - Aug 2020</div>
                      <div className={styles.timelineContent}>
                        <h1>Claxon Tournament Pte. Ltd</h1>
                        <h2>Managing Director</h2>
                        <p>
                          - Given the opportunity to direct four seasonal tournaments, with each achieving a great amount of success, growing a following of 5,000 members<br/><br/>
                          - Negotiated terms of partnership with various game creators to organise well-publicized tournaments with large prizepools.<br/><br/>
                          - Assess and hire staff employees such as digital artists, streamers, and moderators, and form a community engagement team.<br/><br/>
                          - Recruited, led and trained a team of 100 volunteers to enhance event experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Education Section 6 */}
                <section>
                  <div>
                    <h1 className="text--left text-margin--lg ">
                      <span className="badge badge--primary">Education</span>
                    </h1>
                  </div>

                  <ul className={styles.educationList}>
                    <li>
                    <div className={styles.timelineDate}>Feb 2023 - Present</div>
                      <div className={styles.educationContent}>
                        <h2>Monash University, Australia</h2>
                        <h3>Bachelor of Science</h3>
                        <p>Major in Computational Science and Mathematics <br/>
                        Expected graduation in Feb 2025</p>
                      </div>
                    </li>
                    {/* Add more education entries as needed */}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title={`About`}
      description="Some stuff about me <head />"
    >
      <AboutpageHeader />
      {/* <AboutpageFeatures /> */}
      <main style={{ padding: "0px 500px" }}></main>
    </Layout>
  );
}
