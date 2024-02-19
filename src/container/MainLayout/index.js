import React from "react";
import Head from "@docusaurus/Head"; // Adjusted for Docusaurus
import Layout from "@theme/Layout"; // Docusaurus Layout component

const MainLayout = ({
  pageTitle = "",
  showHero = false,
  customHero,
  children,
  pageMeta,
}) => {
  const { description, keywords, imageUrl } = pageMeta;
  let _pageTitle = "Arvin Loh";
  if (pageTitle) _pageTitle += ` - ${pageTitle}`;

  return (
    <Layout
      title={_pageTitle}
      description={description || "Default site description"}>
      <Head>
        {/* Metadata can be adjusted here as needed */}
      </Head>
      {customHero ? customHero : showHero && <HeroBanner />}
      <main>
        {children}
      </main>
    </Layout>
  );
};

export default MainLayout;
