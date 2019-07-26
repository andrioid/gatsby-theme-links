## How to use the demo

Add a `.env` file to the root directory of the project.

```
GATSBY_GITHUB_TOKEN=yourtoken
GATSBY_PINBOARD_TOKEN=yourtoken
```

Then run the site. Never add your tokens to Git.

```sh
export $(cat .env | xargs) && yarn workspace demo develop

```
