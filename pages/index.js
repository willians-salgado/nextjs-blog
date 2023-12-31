import Head from 'next/head';
import Layout, {sideTitle} from "../components/layout";
import utilStyles from '../styles/Home.module.css';
import Alert from "../components/alert";
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home( {allPostsData} ) {
  return (
    <Layout home>
      <Head>
        <title>{sideTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello my name is Willians</p>
        <p>
          hola mundo
          <a href="/posts/first-post"> Learn next.js</a>
        </p>
        <Alert type="success">Hola lindo alertado</Alert>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
