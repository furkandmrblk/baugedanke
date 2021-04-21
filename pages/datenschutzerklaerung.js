import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';
import { Datenschutzerklärung } from '../components/Datenschutzerklärung';

const spaceId = process.env.NEXT_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;

// Contentful Client
const contentful = require('contentful');
const client = contentful.createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default function DatenschutzerklärungPage({ posts }) {
  useEffect(() => {
    smoothscroll.polyfill();
  });

  return (
    <>
      <Navbar props={posts} />
      <Datenschutzerklärung />
      <Footer props={posts} />
    </>
  );
}

// Contentful Data Fetching

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'baugedanke',
  });

  return {
    props: {
      posts: data.items[0],
    },
  };
}
