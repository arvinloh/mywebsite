import React, {useState, useEffect} from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            src={`https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=50&duration=2000&pause=300&color=90EE90&center=true&vCenter=true&multiline=true&repeat=false&random=false&width=1300&height=140&lines=Welcome to Arvin's Tavern+%F0%9F%8C%B1`}
            alt="Welcome to Arvin's Tavern"
            style={{ width: "100%" }}
          />

          <p className="hero__subtitle">
            {siteConfig.tagline} <br />
            Technology Enthusiast
          </p>
          <img src="/img/Myproject.png" alt="" srcset="" width="300px" />
          <br />
          <br />
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
          <img className={styles['cat-gif']} src="/img/cat_walking.gif" height="30" />
          <span className={styles['about-me']}>About Me</span>
          <img className={styles['cat-gif']} src="/img/cat_walking.gif" height="30" />
            </Link>
          </div>
        </div>
      </header>
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

                  <hr />

                  <a href="https://holopin.io/@mj123">
                    <img
                      src="https://holopin.me/mj123"
                      alt="An image of @mj123's Holopin badges, which is a link to view their full Holopin profile"
                    />
                  </a>

                  <h3>Skills & Understanding Of</h3>

                  <p>
                    • JavaScript | TypeScript | C++ | C | Python | Tailwind CSS
                    | Node JS | Express | React | jQuery | NoSQL | SQL |
                    Postgres | MongoDB | MySQL | Git | Github | HTML | CSS |
                    Bootstrap | Handlebars | Java | Power BI | MS Office
                  </p>

                  <p>
                    • AWS | Cloud Computing | CI/CD | Firebase | Docusaurus |
                    Docker | Moc OS | Linux | OOP | Digital Ocean | Photoshop |
                    Postman | Google Cloud | System Design | Operating System |
                    Data Structures | Search Engine Optimization
                  </p>

                  <p>
                    • Technical Writing and Documentation | Open Source | Devops
                    | System Administrator | Frontend | Backend | Full-Stack
                  </p>

                  <p>
                    - 🔭 I’m currently working on{" "}
                    <a href="https://github.com/Stats-For-My-Uni/statsForMyUni">
                      Stats For My Uni
                    </a>
                  </p>

                  <p>
                    - 🌱 I’m currently learning Scalable Backend and Databases.
                  </p>

                  <p>
                    - ☁️ I've keen interest in Artificial Intelligence and
                    Machine Learning. So,I'm learning Tensor Flow
                  </p>

                  <p>
                    - 📫 Feel free to reach me out{" "}
                    <a href="mailto:hackathon2mj@gmail.com">
                      hackathon2mj@gmail.com
                    </a>
                  </p>

                  <img
                    height={"20px"}
                    src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"
                    alt="Meet's gif"
                  />
                </div>

                <br />
                <h2 className="text--center text-margin--lg">
                  <span className="badge badge--primary">Who am I?</span>
                </h2>
                <h3 className="text--center text-margin-lg">
                  A Web Developer & Open Source enthusiast who loves to create
                  stunning and functional websites.
                </h3>
                <p>
                  I am <strong>Meet Jain</strong> in my second year of
                  engineering student at Thakur college of engineering, Mumbai
                  also enrolled in foundation level IIT Madras online BS Degree
                  program. I am very passionate about programming & development
                  and eager achieve something extraordinary in my life. I always
                  try to learn something new, always in search of new
                  opportunities to participate in different programs, remain to
                  be consistent towards my work and academics and always try to
                  be a progressive person. My Qualities- punctuality,
                  confidence, leader, and curious about new things.
                </p>

                <div>
                  <h2 className="text--left text-margin--lg ">
                    <span className="badge badge--primary">Projects</span>
                  </h2>
                </div>

                <ul>
                  <li>
                    Portfolio Webpage: Displays all my work, blogs and
                    documentation of my work.
                  </li>
                  <li>
                    Terra Tech Hackathon- Cropify a blogging and weather app for
                    agritech sector
                  </li>
                  <li>
                    Code Relay 2.0- Harvesta a webapp which can display daily
                    market price of crop to farmer and can deliver emails
                  </li>
                  <li>
                    Binary & Bit Manipulation Calculator : This C language
                    program can convert positive as well as negative integer
                    into binary values and can perform left shift operator,
                    right shift operator and bitwise operations.
                  </li>
                  <li>
                    MedBridge: a website which helps patients with showing
                    weather, suggesting yoga videos & many more.
                  </li>
                  <li>
                    Star Chat: Chat web application creats a chat room for
                    multiple user to collaborate with each other.
                  </li>
                </ul>

                <h2 className="text text--right text-margin--lg  ">
                  <span className="badge badge--primary ">Achivements</span>
                </h2>

                <ol>
                  <li>TCET Open Source Summer Intern Documentation Team</li>
                  <li>
                    TCET Multicon - W 2023 Java competition First Prize Winner
                  </li>
                  <li>
                    Certificate for the Completion of Java Training: Spoken
                    Tutorial Project, IIT Bombay Java test organized at TCET,
                    Mumbai
                  </li>
                  <li>
                    Participated in Research Paper Conference Multicon -W 2023:
                    Deep Learning in Industry and Market Trends
                  </li>
                  <li>
                    Participated in Poster Presentation competition Multicon - W
                    2023
                  </li>
                </ol>

                <div>
                  <h2 className="text--left text-margin--lg ">
                    <span className="badge badge--primary">Education</span>
                  </h2>
                </div>

                <ul>
                  <li>
                    Thakur College of Engineering and Technology, Mumbai: Second
                    Year, Bachlor of Technology in Artificial Intelligence and
                    Machine Learning. 2026' CGPA - 9.57
                  </li>
                  <li>
                    IIT, Madras: Foundation Level- Bachelor of Science (BS)
                    Degree in Data Science and Applications Sem CGPA - 6.0
                  </li>
                  <li>Class 12 -Mar 2022 86.50%</li>
                  <li>Class 10 -Mar 2020 86.40%</li>
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
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
