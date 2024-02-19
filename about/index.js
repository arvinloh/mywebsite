import React, {useState, useEffect} from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Experience from "@site/about/experience.js";

import styles from "./index.module.css";

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
      <Layout
        // title={`Hello from ${siteConfig.title}`}
        title={`About Me`}
        description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    );
  }