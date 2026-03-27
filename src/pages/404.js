import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { headData } from '../head'
import * as styles from './404.module.scss'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <span className={styles.code}>404</span>
        <h1 className={styles.heading}>Page not found</h1>
        <p className={styles.text}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link to="/" className={styles.button}>Back to Home</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => (
  <>
    <title>404 — Samuel Krohn</title>
    {headData}
    <meta name="description" content="Page not found on Samuel Krohn's portfolio." />
  </>
)
