module.exports = ({
  github = {
    token: "",
  },
  pinboard = {
    authToken: "",
    tags: "", // Tags to filter, if any
  },
}) => ({
  siteMetadata: {
    title: "Gatsby Theme Jam Example Submission",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: github.token,
        graphQLQuery: `
        # Last 100 repos of the current user
        query { 
          viewer { 
            starredRepositories(last: 100 ) {
              edges {
                starredAt
                node {
                  nameWithOwner
                  description
                  url
                  languages(first: 3) {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                  id
                }
              }
            }
          }
        }
        `,
      },
    },
    {
      resolve: "gatsby-source-pinboard",
      options: {
        authToken: pinboard.authToken,
        tags: pinboard.tags,
      },
    },
  ],
})
