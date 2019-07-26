# Link Site Theme for Gatsby

## Features

- Adds a `/links` page to your site
- Imports stars from Github
- Imports bookmarks from Pinboard
- Sorts by date and shows the latest 100 entries

## Demo

[Live demo](https://gatsby-theme-links.netlify.com/links)

## Requirements

Add the theme requirements to your site

```sh
yarn add gatsby-theme-links gatsby-plugin-pinboard gatsby-plugin-github-api
```

## Configuration

In your gatsby project, add the following to your `gatsby-config.js`.

I recommend using env-vars to pass tokens to your application. Never commit tokens to Git.

```js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-links",
      options: {
        github: {
          token: process.env.GATSBY_GITHUB_TOKEN,
        },
        pinboard: {
          authToken: process.env.GATSBY_PINBOARD_TOKEN,
        },
      },
    },
  ],
}
```

### For development

Add a `.env` file to the root directory of the project.

```
GATSBY_GITHUB_TOKEN=yourtoken
GATSBY_PINBOARD_TOKEN=yourtoken
```

Then you can run your site with:

```sh
export $(cat .env | xargs) && yarn workspace demo develop

```

### When deploying

Remember to add the tokens as environmental variables to whatever deploys your site.

On Netlify, it's under "advanced" when setting up the project.

## I don't like ENV vars

At your own risk, you can replace `process.env.GATSBY_GITHUB_TOKEN` and `process.env.GATSBY_PINBOARD_TOKEN` with your own values.
