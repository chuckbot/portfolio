module.exports = {
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-mdx`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
    ],
}
