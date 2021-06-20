import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import ShowDetails from "../components/showDetails";
import { IFullName, IPost } from "../types/index";

import { GetStaticProps } from "next";

export default function Home({ allPostsData }: { allPostsData: IPost[] }) {
  const user: IFullName = { firstName: "felipe", lastName: "muner" };
  const myPost: IPost = { id: "filename", body: "body", title: "title" };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ShowDetails user={user} myPost={myPost}></ShowDetails>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{id}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={id} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
