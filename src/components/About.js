import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

const About = ({ content }) => {
    const { frontmatter, body } = content[0].node

    return (
        <section id="about" className="my-8 w-4/5 md:w-3/5 mx-auto">
            <h3 className="text-3xl font-bold mb-6">{frontmatter.title}</h3>
            <div className=" font-light text-lg justify-between md:flex flex-wrap">
                <div className="sm:w-1/2 w-full">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
                <div className="sm:w-1/2 w-full">
                    <figure className="w-2/3 mx-auto">
                        <Img class="rounded-lg md:w-56" fluid={frontmatter.image.childImageSharp.fluid} />
                        <figcaption className="text-sm">
                            {frontmatter.caption}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default About;