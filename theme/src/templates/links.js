// import React from "react"
import { graphql, useStaticQuery } from "gatsby"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Layout from "../components/layout"

const LinkFormatter = ({ children }) => {
  const data = useStaticQuery(query)

  // Keeping Pinboards data model, adapting Github output
  // Maybe move this into a custom resolver at some point
  const gh = data.allGithubData.nodes[0] || []
  const pb = data.allPinboardBookmark.nodes || []

  const edges = gh.data.viewer.starredRepositories.edges
  const ghItems = edges.map(e => {
    return {
      id: e.node.id,
      href: e.node.url,
      description: e.node.nameWithOwner,
      tags: e.node.languages.edges.map(l => l.node.name.toLowerCase()),
      time: e.starredAt,
    }
  })

  const pbItems = pb.map(e => {
    return {
      id: e.id,
      href: e.href,
      description: e.description,
      tags: e.tags && e.tags.length > 0 && e.tags.split(" "),
      time: e.time,
    }
  })

  const combined = [...ghItems, ...pbItems].sort((a, b) => {
    return new Date(b.time) - new Date(a.time)
  })
  return children(combined.slice(0, 100))
}

const LinkItem = ({ title, href, tags, time }) => (
  <Styled.li sx={{ marginBottom: 2 }}>
    <a sx={{}} href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
    <div sx={{ fontSize: 16, color: "#aaa" }}>
      <span sx={{ marginRight: 2 }}>{new Date(time).toLocaleDateString()}</span>
    </div>

    {tags ? (
      <div sx={{ fontSize: 16, color: "#aaa" }}>
        <div>
          tags:&nbsp;
          {tags.map(t => (
            <span key={t} sx={{ marginRight: 2 }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    ) : null}
  </Styled.li>
)

const LinksTemplate = () => {
  return (
    <Layout>
      <h1>Links</h1>
      <LinkFormatter>
        {links => (
          <Styled.ol>
            {links
              ? links.map((n, idx) => (
                  <LinkItem
                    title={n.description}
                    href={n.href}
                    tags={n.tags}
                    time={n.time}
                    key={n.id}
                  />
                ))
              : null}
          </Styled.ol>
        )}
      </LinkFormatter>
    </Layout>
  )
}

const query = graphql`
  query MyQuery {
    allPinboardBookmark {
      nodes {
        id
        href
        description
        tags
        time
      }
    }
    allGithubData {
      nodes {
        data {
          viewer {
            starredRepositories {
              edges {
                starredAt
                node {
                  description
                  id
                  nameWithOwner
                  url
                  languages {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default LinksTemplate
