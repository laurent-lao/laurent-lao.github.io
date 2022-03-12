import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Typewriter from "typewriter-effect";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
        <Typewriter
          options={{
            cursor: '',
            delay: 70,
          }}
          onInit={(typewriter) => {
            typewriter.typeString(
              'Hi, I\'m Laurent.'
            )
            .pauseFor(800)
            .typeString('<br/>'
              +'This is my website.'
            )
            .start();
          }}
        />
        </h1>
        <h2>
          <Typewriter
            options={{
              cursor: '',
              delay: 40,
            }}
            onInit={(typewriter) => {
              typewriter
              .pauseFor(5000)
              .typeString(
                '<br />'
                + '<br />'
                +'It is a place for me to document and show off'
              )
              .pauseFor(1000)
              .deleteChars(4)
              .pauseFor(500)
              .typeString(
                'case my personal projects, learnings, and journey as a developer.'
              )
              .pauseFor(1000)
              .typeString(
                '<br />'
                + 'I hope it can help you learn too.'
              )
              .start();
            }}
            />
        </h2>
        <h2>
          <Typewriter
            options={{
              cursor: '',
              delay: 70,
            }}
            onInit={(typewriter) => {
              typewriter
              .pauseFor(16500)
              .typeString(
                '<br />'
                + '<br />'
                + '<br />'
                + 'Thanks for stopping by!'
                )
              .start();
            }}
            />
        </h2>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}