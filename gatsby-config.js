/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),
  plugins: [

    

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: 'images',
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },

    
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-plugin-netlify-cms-paths`,
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        },

        { resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },},

  
       

        ],

      },
    },

    

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
       
        trackingIds: [
          "G-GNYBTQ2SKL", // Google Analytics / GA
         
        ],
      },
    },

    {
      resolve:`gatsby-plugin-netlify`,
      options: {
        headers: {
          "/public/**/*.html": [
            "cache-control: public",
            "cache-control:  max-age=0", 
            "cache-control: must-revalidate"
          ],
          "/sw.js": [
            "cache-control: public",
            "cache-control:  max-age=0", 
            "cache-control: must-revalidate"
          ],
          "/public/page-data/*": [
            "cache-control: public",
            "cache-control:  max-age=0", 
            "cache-control: must-revalidate"
          ]
        }
      }
    },

    
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it. replace with yours
        trackingId: "UA-164743872-1",
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Darren Dube`,
        short_name: `Darren Dube`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#381696`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
   
    'gatsby-plugin-dark-mode',
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-fontawesome-css`,

   { resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },}
  
  ,
   {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                
                site_url: siteUrl
                image_url: iconUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      }
    } ,
    
  ],
}
