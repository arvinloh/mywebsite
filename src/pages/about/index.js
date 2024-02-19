import React from "react";
import Link from '@docusaurus/Link';

import { BriefcaseIcon, DocumentDownloadIcon } from "@heroicons/react/solid";

import SmallHeroBanner from '../../components/SmallHeroBanner';
import MainLayout from '../../container/MainLayout';
import experience from '../../data/experience';

const AboutPage = () => {
  return (
    <MainLayout
      pageTitle="About"
      customHero={
        <SmallHeroBanner
          title={<div className="font-fira">About</div>}
          description={
            <div className="">
              I am Arvin Loh, a first year at Monash University in Melbourne, Australia where I majored in Computational Science with mathematics background. <br /> <br />
              I am planning to build awesome, delightful & secure software.
            </div>
          }
        />
      }
      pageMeta={{
        description: `I am studying my course at Monash University in Melbourne, Australia where I majored in Computational Science.`,
        endpoint: "/about",
      }}
    >
      <div className="container flex flex-1 flex-col">
        <p className="my-1">
          If you are a recruiter, I am best contacted via email at{" "}
          <Link href="mailto:arvin.loh1111@gmail.com">
            <span className="underline">arvin.loh1111@gmail.com</span>
          </Link>
        </p>
        <div className="mt-2">
          <a
            href="static/img/resume.pdf"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-600 dark:focus:ring-gray-700"
          >
            <DocumentDownloadIcon className="mr-2 h-4 w-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
      <div className="container mt-10 flex flex-1 flex-col px-2">
        <div>
          <h3 className="text-2xl font-semibold">Experience</h3>
        </div>
        <div className="mt-8">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {experience.map((exp, index) => (
              <li className="mb-10 ml-10" key={index}>
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-900 ring-8 ring-white ring-gray-900">
                  <BriefcaseIcon className="h-3 w-3 text-blue-400" />
                </span>
                <Link href={exp.companyUrl}>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-600">
                    {exp.company}
                  </h3>
                </Link>
                {exp.positions.map((pos, j) => {
                  const { title, description, dates } = pos;
                  const { startDate, endDate } = dates;
                  return (
                    <div className="mb-8" key={j}>
                      <h4 className="text-md font-semibold text-gray-900">
                        {title}
                      </h4>
                      <span className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {`${startDate} - ${endDate ? endDate : "Present"}`}
                      </span>
                      {description && (
                        <ul className="ml-4 max-w-prose list-disc text-gray-600">
                          {description.map((descrip, index) => (
                            <li key={index}>{descrip}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;