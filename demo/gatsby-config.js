/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const token = process.env.GATSBY_GITHUB_TOKEN

module.exports = {
  plugins: [
    {
      resolve: "@andrioid/gatsby-theme-links",
      options: {
        github: {
          token: process.env.GATSBY_GITHUB_TOKEN,
        },
        pinboard: {
          authToken: process.env.GATSBY_PINBOARD_TOKEN,
          //tags: "react go gatsby",
        },
      },
    },
  ],
}
