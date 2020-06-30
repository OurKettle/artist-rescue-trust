const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create Blog Post & Portfolio Pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const granteesTemplate = path.resolve(`./src/pages/grantees.js`)

  return graphql(
    `
      {
        grantees: allDatoCmsGrantee {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post page.
    const posts = result.data.grantees.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `our-grantees/${post.node.slug}`,
        component: granteesTemplate,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}