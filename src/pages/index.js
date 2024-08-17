import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my Gatsby site!">
      <p>
        I'm making this by following Gatsby Tutorial.
      </p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage