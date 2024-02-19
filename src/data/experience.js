import { DateTime } from 'luxon';

const experience = [
  {
    company: "Monash University",
    companyUrl: "https://www.monash.edu/",
    positions: [
      {
        dates: {
          startDate: DateTime.fromISO("2024-02-01T00:00:00+08:00"),
        },
        title: "Fastrack Founder 2024",
        description: [
          `Spearheaded the development and implementation of rapid prototyping techniques,
          facilitating real-life user testing.`,
          `Industry Collaboration and Network Expansion: Engaged in a dynamic collaboration 
          with a wide network of industry partners, including notable organizations like 
          Next - Reece Group, Shadowboxer, Hypershift Systems LUNA Start-up Studio, 
          Amazon Web Services, LaunchVic, Xailient, ThinkHQ, Airwallex, etc.`,
          `Business Acumen: Gained substantial experience in business operations 
          and strategies, enhancing my understanding of commercial practices and market dynamics`
        ],
      },
      {
        dates: {
          startDate: DateTime.fromISO("2024-02-01T00:00:00+08:00"),
        },
        title: "Wired - Media",
      },
      {
        dates: {
          startDate: DateTime.fromISO("2023-01-01T00:00:00+08:00"),
          endDate: DateTime.fromISO("2023-12-01T00:00:00+08:00"),
        },
        title: "Monash Minds Leadership Program",
        description: [
          `Guided by a senior student and learn from the stories and experiences of 
          incredible leaders such as Fulbright Scholar, Khao Cao.`,
          `Acquired leadership development experience through meaningful hands-on service
          that addresses real-life needs in the Monash University community.`
        ],
      },
    ],
  },
  {
    company: "UPlus Real Estate Group",
    companyUrl: "https://www.realestate.com.au/agency/u-plus-real-estate-glen-waverley-GTGYVO",
    positions: [
      {
        dates: {
          startDate: DateTime.fromISO("2022-03-01T00:00:00+10:00"),
          endDate: DateTime.fromISO("2022-11-01T00:00:00+10:00"),
        },
        title: "Agent Representative",
        description: [
          `Assisted in the preparation of marketing materials and advertisements for
          properties, including brochures, flyers, and online marketing collateral.`,
          `Conducted market research and analysis to identify the most suitable
          target market for the property.`,
          `Excel proficiency for Investment Property Analysis (IPA) and 
          Customer Relationship Management (CRM).`,
          `Utilized digital platforms and traditional advertising methods 
          to maximize property exposure.`,
        ],
      },
    ],
  },
  {
    company: "Claxon Tournament Pte. Ltd",
    companyUrl: "https://claxontournaments.vercel.app/",
    positions: [
      {
        dates: {
          startDate: DateTime.fromISO("2017-09-01T00:00:00+10:00"),
          endDate: DateTime.fromISO("2020-08-01T00:00:00+10:00"),
        },
        title: "Co-Founder/ Managing Director",
        description: [
          `Given the opportunity to direct four seasonal tournaments, with each achieving
           a great amount of success, growing a following of 5,000 members`,
          `Negotiated terms of partnership with various game creators to organise
          well-publicized tournaments with large prizepools.`,
          `Assess and hire staff employees such as digital artists, streamers, and 
          moderators, and form a community engagement team.`,
          `Recruited, led and trained a team of 100 volunteers to enhance event experience`
        ],
      },
    ],
  },
];

export default experience;
