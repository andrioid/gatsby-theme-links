# Link Site Theme for Gatsby

## Introduction

## Demo

## Requirements

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
