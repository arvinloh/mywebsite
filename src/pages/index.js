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
             
          </p>
          <img src="/img/Myproject.png" alt="" srcset="" width="300px" />
          <br />
          <br />
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/about"
            >
          <img className={styles['cat-gif']} src="/img/cat_walking.gif" height="30" />
          <span className={styles['about-me']}>About Me</span>
          <img className={styles['cat-gif']} src="/img/cat_walking.gif" height="30" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Homepage`}
      description="Welcome to the homepage of Arvin Hay site, where you can find my projects, blogs and more."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
