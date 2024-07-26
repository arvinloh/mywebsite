import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon

const FeatureList = [
  {
    title: 'Study Notes',
    imgUrl: require('./notes.png').default,
    link: '/study-notes/overview',
    description: "I write some notes when I study",
  },
  {
    title: 'Blog',
    imgUrl: require('./blog.png').default,
    link: '/blog',
    description: "I write here occasionally",
  },
  {
    title: 'About',
    imgUrl: require('./resume.png').default,
    link: '/about',
    description: "Oh Hey! About Me!",
  },
];

const Feature = ({ title, description, imgUrl, link }) => {
  return (
    <div
      className={clsx('col col--4', styles.featureBox)}
      onClick={() => window.location.href = link}
      role="link"
      aria-label={`Navigate to ${title}`}
      tabIndex={0} // Makes the div focusable
      onKeyPress={(e) => e.key === 'Enter' && (window.location.href = link)}
      style={{ cursor: 'pointer' }} // Directly apply cursor style for clarity
    >
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <img src={imgUrl} className={styles.featureSvg} alt={title} />
        <p className={styles.description}>{description}</p> {/* Updated line */}
        <span className={`${styles.arrowIcon}`}><FaArrowRight /></span>
      </div>
    </div>
  );
};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
