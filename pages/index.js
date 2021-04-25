import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Team } from '../components/Team';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';
import Head from 'next/head';

const spaceId = process.env.NEXT_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;

// Contentful Client
const contentful = require('contentful');
const client = contentful.createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default function Home({ posts, teams, projects }) {
  useEffect(() => {
    smoothscroll.polyfill();
  });

  return (
    <>
      <Head>
        <title>Baugedanke Berlin | Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="
          Baugedanke Berlin ist ein dynamisches, junges und gut organisiertes
          Team, welches Ihnen beim Bauvorhaben möglichst sorgenfrei modern und
          mit viel handwerklichem Geschick unter die Arme greift.
        "
        />
      </Head>
      <Navbar props={posts} />
      <Hero props={posts} />
      <About props={posts} />
      <Services props={posts} />
      <Projects props={projects} />
      <Team props={teams} />
      <Contact props={posts} />
      <Footer props={posts} />
    </>
  );
}

// Contentful Data Fetching

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'baugedanke',
  });
  let data2 = await client.getEntries({
    content_type: 'baugedankeTeams',
  });
  let data3 = await client.getEntries({
    content_type: 'baugedankeProjekte',
  });

  return {
    props: {
      posts: data.items[0],
      teams: data2.items,
      projects: data3.items,
    },
    revalidate: 60,
  };
}
