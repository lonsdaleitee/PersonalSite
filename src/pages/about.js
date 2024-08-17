import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout pageTitle="About Me">
            <p>
                Hi there ! This page is about me, the proooud creator of this site which I built using Gatsby.
            </p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default About