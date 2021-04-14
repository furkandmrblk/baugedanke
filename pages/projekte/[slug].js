import Head from 'next/head';
import { Project } from '../../components/Project';

const spaceId = process.env.NEXT_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;

const contentful = require('contentful');
const client = contentful.createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default function ProjectPage({ post }) {
  return (
    <>
      <Project props={post} />
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

  return {
    props: {
      post: data.items[0],
    },
  };
}
