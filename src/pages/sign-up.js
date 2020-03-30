import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const handleClick = () => {
    fetch("/.netlify/functions/hello")
      .then(response => response.json())
      .then(console.log)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Sign Up" />
      <button onClick={handleClick}>Click</button>
      <form
        name="Sign Up"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <input
          type="text"
          name="subject"
          defaultValue="I am interested in receiving funds."
          className="hidden"
        />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option defaultValue="leader">Leader</option>
              <option defaultValue="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
