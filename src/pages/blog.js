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
                html
                excerpt
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
         
            {/* <h2> */}
              {/* <Link className={blogStyles.title} to="/"> */}
                {/* { data.site.siteMetadata.title} */}
              {/* </Link> */}
            {/* </h2>  */}
            <p>            
              {/* <Link className={blogStyles.date} to="/"> */}
                {/* { data.site.siteMetadata.date} */}
              {/* </Link> */}
            </p>
        </Layout>
    )
}

export default BlogPage

//Goal : show list of posts on blog posts
// query the title and date for each post in blog Component
// render order list
// render a lit w/requested h2 title a p date
//-render array of objects