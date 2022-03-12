import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Guides',
    Svg: require('@site/static/img/full-stack-programmer.svg').default,
    description: (
      <>
       View <a href="/docs/intro">guides</a> I have written to serve as tutorials, cheatsheets or documentation, all designed to be shared.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/edit-code.svg').default,
    description: (
      <>
       Read my <a href="/blog">blog</a> to learn more about me and what I am working on.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/java-script.svg').default,
    description: (
      <>
       This website is built with Docusarus and React components to easily publish new documentation and blogs as well as showcasing my projects.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
