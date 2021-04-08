import React, { useEffect } from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import { isLoggedIn } from "../services/auth"

export default function MarkdownPage({ data }) {
  const page = data.markdownRemark

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/app/login")
      return null
    }
  })

  return (
    <Layout>
      <div>
        <h1>{page.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`