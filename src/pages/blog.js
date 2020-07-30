import React, { Component } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                }
            }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog Posts</h1>
                <ol>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </li>
                        )
                    })}
                </ol>
        </Layout>
    )
}

export default BlogPage

//Goal : show list of posts on blog posts
// query the title and date for each post in blog Component
// render order list
// render a lit w/requested h2 title a p date
//-render array of objects