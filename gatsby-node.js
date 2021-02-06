const path = require(`path`)
const _ = require("lodash")


const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const categoryTemplate = path.resolve(`src/templates/categoryTemplate.js`)

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              
            }
          }
        }
      }
      categoryGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `)


  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {},
    })
  })

  const categories = result.data.categoryGroup.group

  categories.forEach(category => {
    createPage({
      path: `blog/${category.fieldValue}/`,
      component: categoryTemplate,
      context: {
        tag: category.fieldValue,
      }
    })
  })


}
