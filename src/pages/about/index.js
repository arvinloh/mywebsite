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
  "Flutter",
  "React",
]; // Example skills

const projects = [
  {
    name: "PropRoo",
    description: "A real estate technology startup that aims to revolutionise the way people buy and sell properties.",
    detailedDescription:
      "Directed by a team of experienced professionals, PropRoo operates as an investment strategy and real estate technology startup. <br/> <br/> We are currently in the ideation phase and are looking for developers to join our team. <br/> <br/> Our mission is to revolutionise the way people buy and sell properties by using technology to make the process easier, faster, and more efficient.",
    image: "/img/PropRoo-Home.png",
    link: "https://proproo.com.au/",
  },
  {
    name: "Troche",
    description: "A Melbourne based startup that aims to create a solution for medication adherence.",
    detailedDescription:
      "Troche is a Melbourne based startup that aims to create a solution for medication adherence. We are currently in the ideation phase and are looking for developers to join our team. <br/> <br/> Our mission is to create a solution for medication adherence that is easy to use, affordable, and accessible to everyone. We believe that by using technology, we can help people take their medications on time and improve their health outcomes.",
    image: "/img/troche.png",
    link: "https://troche.netlify.app/",
  },
  {
    name: "SAMMY",
    description: "A student research initiative website for WonderLab @ Monash University.",
    detailedDescription:
      "SAMMY tackled a Geopolitical Security research challenge given by a real-world industry partner (WonderLab) focused on 'The Impacts of Robots on Public Spaces.' <br/> <br/> We developed a comprehensive solution that includes a website, campaign videos, articles, infographics, and even rough ideas for a board game to educate about the benefits and limitations of robots. <br/> <br/> Our website is designed to be user-friendly and informative, with a focus on educating the public about the impacts of robots on public spaces.",
    image: "/img/website.png",
    link: "https://sammyred.vercel.app",
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
                            A learner, developer, and entrepreneur.
                          </h3>
                        </summary>
                      </ul>
                    </div>
                    <img
                      src="/img/me3.jpeg"
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
                      or{" "}
                      <a href="mailto:arvin.loh1111@gmail.com">
                        Email
                      </a>
                    </ul>
                    <hr />
                  </div>
                </section>
                {/* Introduction Section 2 */}
                <br />
                <section>
                  <h1 className="text--center text-margin--lg">
                    <span className="badge badge--primary">Biography</span>
                  </h1>
                  <p>
                    I am <strong>Arvin Hay</strong>.
                    <br /> <br />
                    As an avid learner, I have completed my degree in the span of 2 years, while maintaining a WAM of 78. <br/> <br/>
                    I am currently developing my own company, PropRoo, building the next generation of real estate technology. <br/> <br/>
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
                      <div className={styles.timelineDate}>Dec 2024 - Present</div>
                      <div className={styles.timelineContent}>
                        <h1>PropRoo</h1>
                        <h2>Director</h2>
                        <p>
                        • Innovating the real estate industry by developing a platform that streamlines the buying and selling process, making it more efficient and user-friendly.<br/><br/>
                        • Collaborating with a team of experienced professionals to create a comprehensive investment strategy and real estate technology startup.<br/><br/>
                        </p>
                      </div>
                    </div>
                    {/* Example Experience */}
                    <div className = {styles.timelineDot}></div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDate}>Nov 2023 - Nov 2024</div>
                      <div className={styles.timelineContent}>
                        <h1>Troche</h1>
                        <h2>Co-Founder</h2>
                        <p>
                        • Spearheaded the development and implementation of prototyping techniques, facilitating real-life user testing.<br/> <br/>
                        • Coached by a wide network of industry partners, including notable organizations like Next - Reece Group, Shadowboxer, Hypershift Systems, LUNA Start-up Studio, Amazon Web Services, LaunchVic, Xailient, ThinkHQ, Airwallex, etc.<br/><br/>
                        • Gained substantial experience in business operations and strategies, enhancing my understanding of commercial practices and market dynamics.<br/>
                        </p>
                      </div>
                    </div>
                    {/* Example Experience */}
                    <div className = {styles.timelineDot}></div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDate}>Mar 2024 - Oct 2024</div>
                      <div className={styles.timelineContent}>
                        <h1>Monash Science Student Ambassador</h1>
                        <h2>Dean Faculty of Science</h2>
                        <p>
                        • Promote Monash University and the Faculty of Science programs and activities to both prospective and current students.<br/> <br/>
                        • Engage with students on Open Day, information seminars, and school visits<br/><br/>
                        • Representing the Faculty at a variety of events, through social media and marketing activities<br/>
                        </p>
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineDate}>Mar 2022 - Feb 2024</div>
                      <div className={styles.timelineContent}>
                        <h1>Gold 4Life Real Estate</h1>
                        <h2>Real Estate Agent</h2>
                        <p>
                        • Mentored by seasoned professional with 28 years of experience in the real estate market, who supported me throughout my learning journey<br/><br/>
                        • Excel proficiency for Investment Property Analysis (IPA) and Customer Relationship Management (CRM).<br/><br/>
                        • Supervise the necessary listing and sales documentation for property or businesses, or leases or agreements to lease associated with commercial property<br/><br/>
                        • Utilized digital platforms and traditional advertising methods to maximize property exposure.<br/><br/>
                        • Collaborated with professionals agents, directors, property developers and built trust with clients.<br/>
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
                          • Given the opportunity to direct four seasonal tournaments, with each achieving a great amount of success, growing a following of 5,000 members<br/><br/>
                          • Negotiated terms of partnership with various game creators to organise well-publicized tournaments with large prizepools.<br/><br/>
                          • Assess and hire staff employees such as digital artists, streamers, and moderators, and form a community engagement team.<br/><br/>
                          • Recruited, led and trained a team of 100 volunteers to enhance event experience.
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
                    <div className={styles.timelineDate}>Feb 2023 - Dec 2024</div>
                      <div className={styles.educationContent}>
                        <h2>Monash University, Australia</h2>
                        <h3>Bachelor of Science</h3>
                        <p>Major in Computational Science and Mathematics <br/>
                        &nbsp; - Fastrack Founder 2024 <br/>
                        &nbsp; - Monash Science Student Ambassador <br/>
                        &nbsp; - Monash Minds Leadership Coach <br/>
                        &nbsp; - Faculty of IT Programming Bootcamp Tutor <br/>
                        &nbsp; - WIRED @ IT Auxiliary <br/>
                        &nbsp; - Achieving Potential for Distinction Scholarship <br/></p>
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
      description="Everything about Arvin Hay, a university student that is passionate about technology and writing."
    >
      <AboutpageHeader />
      {/* <AboutpageFeatures /> */}
      <main style={{ padding: "0px 500px" }}></main>
    </Layout>
  );
}
