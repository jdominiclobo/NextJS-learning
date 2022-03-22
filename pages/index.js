import Head from "next/head"; // used for custom titles or metatags or description keywords

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Next learning</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      {posts.map((post) => {
        return <h3>{post.title}</h3>;
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await result.json();

  return {
    props: {
      posts,
    },
  };
};
