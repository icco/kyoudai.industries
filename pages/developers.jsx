import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostsData } from '../lib/devs'

import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function developers({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        {allPostsData.map(({ name, title, technologies, description, portfolio }) => (
          <div key={name} className={utilStyles.developer_container}>
            <Link href={portfolio}>
              <a target="_blank" rel="noopener noreferrer"><h1>{name}</h1></a>
            </Link>
              <h3 className={utilStyles.headingLg}>{title}</h3>
              <h5>{technologies}</h5>
              <p>{description}</p>
          </div>
        ))}
    </Layout>
  )
};
