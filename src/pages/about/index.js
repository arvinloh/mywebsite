import React, {useState, useEffect} from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AboutpageFeatures from "@site/src/components/AboutpageFeatures";

import styles from "./index.module.css";

function AboutpageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <>
      <div className="container">
        <div className={clsx("padding-vert--xl", styles.sectionAlt)}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div>
                  <div id="user-content-toc">
                    <ul style={{ textAlign: "center" }}>
                      <summary>
                        <h1 style={{ display: "inline-block" }}>
                          Hi 👋, I'm Arvin
                        </h1>
                      </summary>
                    </ul>
                  </div>
                  <img
                  src="/img/me.jpeg"
                  alt=""
                  className={clsx(styles.centerImage)}
                  width="300px"
                />
                  <div>
                    <h3>
                      <button type="button" className={clsx(styles.btnPrimary)}>
                        <a href="https://drive.google.com/file/d/113on7gjXffQKw98PI1-9Ziqu6nPHrHro/view?usp=sharing">Resume 💾</a>
                      </button>
                    </h3>
                  </div>
                  <ul style={{ textAlign: 'center' }}>
                    Feel free to reach out on {" "}
                    <a href="https://www.linkedin.com/in/arvinloh-/">
                      LinkedIn
                    </a> or on Discord (hyunski)
                    
                    </ul>
                  <hr />
                </div>

                <br />
                <h1 className="text--center text-margin--lg">
                  <span className="badge badge--primary">Who am I?</span>
                </h1>
                <h3 className="text--center text-margin-lg">
                  A university student that is passionate about technology and writing
                </h3>
                <p>
                  I am <strong>Arvin Hay</strong> in my second year of
                  Bachelor of Science in Computational Science and Mathematics at
                  Monash University in Melbourne, Australia. I am passionate
                  about technology and writing. I am planning to build awesome,
                  delightful & secure software.
                </p>

                <div>
                  <h1 className="text--left text-margin--lg ">
                    <span className="badge badge--primary">Projects</span>
                  </h1>
                </div>

                <ul>
                  <li>
                    <a href = "www.arvinhay.me">Portfolio Website</a>: A personal website to showcase my work and projects.
                  </li>
                  <li>
                    <a href = "https://claxontournaments.vercel.app/"> Claxon Tournament </a>: A popular mobile tournament organisation that hosts tournaments for various games.
                  </li>
                  <li>
                    Weighted-Average Mark Calculator (Discontinued): A web application that calculates the weighted average mark of a student based off the units they have completed.
                  </li>
                  <li>
                    "Healthy Eating" App: A prototype of a mobile application that helps users to track their daily food intake and provides healthy recipes.
                  </li>
                  <ul style={{ textAlign: 'center' }}>
                    <strong>More projects can be found on my <a href="https://github.com/arvinloh">GitHub</a></strong>
                  </ul>
                </ul>

                <h1 className="text text--right text-margin--lg  ">
                  <span className="badge badge--primary ">Experience</span>
                </h1>

                {/* <ol>
                  <li>Monash University - Wired</li>
                </ol> */}
                <div>
                  <h1 className="text--left text-margin--lg ">
                    <span className="badge badge--primary">Skills</span>
                  </h1>
                </div>

                          <p>
                            • C++ | Python | JavaScript | MySQL | NoSQL | Java | R | Figma
                          </p>
                          <p>
                            • Technical Writing and Documentation | Prototyping
                          </p>
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
      title={`Hello 👋 from Arvin`}
      description="Description will go into a meta tag in <head />"
    >
      <AboutpageHeader />
        {/* <AboutpageFeatures /> */}
        <main style = {{padding : '0px 500px'}}>
        {/* <div>
          <h1 className="text--left text-margin--lg ">
            <span className="badge badge--primary">Skills</span>
          </h1>
        </div>

                  <p>
                    • C++ | Python | JavaScript | MySQL | NoSQL | Java | R | Figma
                  </p>
                  <p>
                    • Technical Writing and Documentation | Prototyping
                  </p> */}

      </main>
    </Layout>
  );
}
