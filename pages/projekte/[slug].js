import Head from 'next/head';
import { Navbar } from '../../components/Navbar';
import { Project } from '../../components/Project';
import { Footer } from '../../components/Footer';

const spaceId = process.env.NEXT_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;

const contentful = require('contentful');
const client = contentful.createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default function ProjectPage({ post, posts }) {
  const data = post.fields;
  return (
    <>
      <Head>
        <title>Baugedanke | {data.projektTitel}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={data.projektBeschreibung} />
      </Head>
      <Navbar props={posts} />
      <Project props={post} />
      <Footer props={posts} />
    </>
  );
}

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'baugedankeProjekte',
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'baugedankeProjekte',
    'fields.slug': params.slug,
  });

  let data2 = await client.getEntries({
    content_type: 'baugedanke',
  });

  return {
    props: {
      post: data.items[0],
      posts: data2.items[0],
    },
    revalidate: 60,
  };
}
