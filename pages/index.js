import Head from "next/head"; // used for custom titles or metatags or description keywords

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next learning</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>Welcome</h1>
    </div>
  );
}
