module.exports = ({
  github = {
    token: "",
  },
  pinboard = {
    authToken: "",
    tags: "", // Tags to filter, if any
  },
}) => {
  const themePlugins = []
  if (github && github.token) {
    themePlugins.push({
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
    })
  }

  if (pinboard && pinboard.authToken) {
    themePlugins.push({
      resolve: "gatsby-source-pinboard",
      options: {
        authToken: pinboard.authToken,
        tags: pinboard.tags,
      },
    })
  }

  if (themePlugins.length === 0) {
    console.error("error: gatsby-theme-links is not configured")
    console.error("You need to configure either Pinboard or Github")
    process.exit(1)
  }

  return {
    siteMetadata: {
      title: "Gatsby Theme Jam Example Submission",
    },
    plugins: ["gatsby-plugin-theme-ui", ...themePlugins],
  }
}
