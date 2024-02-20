import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./index.module.css";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal website to showcase my work and projects.",
    detailedDescription:
      "This project is a comprehensive **portfolio** website designed to showcase my technical skills, projects, and professional background. It features a responsive design, interactive elements, and a blog section for sharing insights.",
    link: "http://www.arvinhay.me",
  },
  // Add more projects as needed
];

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
        <h3>{project.name}</h3>
      </div>
      <div className="card__body">
        <p>{project.description}</p>
        {isExpanded && (
          <div
            className={styles.projectDetails}
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(project.detailedDescription),
            }}
          />
        )}
      </div>
      <div className="card__footer">
        <button onClick={toggleExpand} className={styles.learnMoreButton}>
          {isExpanded ? "Show Less" : "Learn More"}
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
                          <a href="./assets/resume.pdf">Resume 💾</a>
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
                    to build awesome, delightful & secure software.
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
                {/* Experience Section 4 */}
                <section>
                  <h1 className="text text--right text-margin--lg  ">
                    <span className="badge badge--primary ">Experience</span>
                  </h1>

                  <ol>
                    <li>Monash University - Wired</li>
                  </ol>
                </section>
                {/* Skills Section 5 */}
                <section>
                  <div>
                    <h1 className="text--left text-margin--lg ">
                      <span className="badge badge--primary">Skills</span>
                    </h1>
                  </div>

                  <p>
                    • C++ | Python | JavaScript | MySQL | NoSQL | Java | R |
                    Figma
                  </p>
                  <p>• Technical Writing and Documentation | Prototyping</p>
                </section>
                {/* Education Section 6 */}
                <section>
                  <div>
                    <h1 className="text--left text-margin--lg ">
                      <span className="badge badge--primary">Education</span>
                    </h1>
                  </div>

                  <ul>
                    <li>
                      Monash University: Bachelor of Science in Computational
                      Science and Mathematics
                    </li>
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
      title={`About}`}
      description="Some stuff about me <head />"
    >
      <AboutpageHeader />
      {/* <AboutpageFeatures /> */}
      <main style={{ padding: "0px 500px" }}></main>
    </Layout>
  );
}
