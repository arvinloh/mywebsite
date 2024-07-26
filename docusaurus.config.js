const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Website",
  tagline: "Always eager to learn new technologies and skills",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://arvinhay.me",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "arvin", // Usually your GitHub org/user name.
  projectName: "arvin.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages-deployment",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'study-notes', // Set the base URL for your documentation
          path: 'study-notes', // Set the location of your documentation markdown files
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/arvinloh/mywebsite',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/arvinloh/mywebsite",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "transparent-arvin-profile.png",

      /**
       * * Highlight: added default color mode as dark
       **/
      colorMode: {
        // defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      /**
       * * Highlight: adding hideable sidebar
       **/
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      /**
       * * Highlight: adding announcement banner
       **/
      announcementBar: {
        id: "openToWork",
        content:
          // <strong>Open to get hired.</strong>
          `You can reach me out on LinkedIn or Email.`,
        backgroundColor: "#d1faff",
        textColor: "#574476",
        isCloseable: true,
      },
    navbar: {
        title: "Arvin",
        logo: {
          alt: "My Site Logo",
          src: "img/transparent-arvin-profile.png",
          className: "custom-navbar-logo-class",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Study Notes",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/about", label: "About", position: "left" }, // Assuming the route to your about.js page is '/about'
          // { to: "/resume", label: "Resume", position: "left" },
          {
            href: `https://troche.com.au`,
            label: "Troche",
            position: "left",
          },
          {
            href: "https://github.com/arvinloh",
            position: "right",
            className: "navbar-icon",
            "area-label": "GitHub",
            html: `<svg xmlns="http://www.w3.org/2000/svg"
            width="26" height="26"  
            stroke="currentColor" 
            fill="currentColor" 
            stroke-width="0" 
            viewBox="0 0 496 512" >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>`,
          },
          {
            href: "https://www.linkedin.com/in/arvinloh-",
            position: "right",
            className: "navbar-icon",
            "area-label": "linkedin",
            html: `<svg xmlns="http://www.w3.org/2000/svg" 
            width="26" height="26"  
            stroke="currentColor" 
            fill="currentColor" 
            stroke-width="0" 
            viewBox="0 0 50 50" >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
            `,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Pages",
            items: [
              {
                label: "Study Notes",
                to: "/study-notes/overview",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "About",
                to: "/about",
              },
            ],
          },
          {
            title: "My Links",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/arvinloh-/",
              },
              {
                label: "GitHub",
                href: "https://github.com/arvinloh",
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/users/1053004379424309358',
              // },
              // {
              //   label: 'LinkTree',
              //   href: 'https://linktr.ee/',
              // },
            ],
          },
          // {
            // title: "More",
            // items: [
            //   {
            //     label: "Blog",
            //     to: "/blog",
            //   },
            //   {
            //     label: "GitHub",
            //     href: "https://github.com/arvinloh",
            //   },
            // ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arvin.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
