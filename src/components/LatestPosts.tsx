import * as React from "react";
import SliderComponent from "./SliderComponent"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby";
import PostCard from "./PostCard";

const title:string = "Últimas entradas";
const subtitle:string = "De nuestro blog";

const LatestPosts = () => {
    const [ posts, setPosts ] = useState<any>([]);

    const data = useStaticQuery(graphql`
        query LatestPosts {
            allSanityPost {
                edges {
                    node {
                        title
                        slug {
                            current
                        }
                        categories {
                            title
                        }
                        author {
                            name
                        }
                        mainImage {
                            asset {
                                gatsbyImageData(
                                    fit: FILLMAX,
                                    placeholder: BLURRED,
                                    breakpoints: [750, 1080, 1366, 1920],
                                    height: 200,
                                    formats: [AVIF, WEBP]
                                )
                            }
                        }
                    }
                }
            }
        }
    `);

    React.useEffect(() => {
        if( data ) {
            setPosts( data.allSanityPost.edges )
        }
    },[ data ])

    return(
        <>
            {
                posts.length > 0 && (
                    <SliderComponent
                        viewMoreButtonRedirectPath="blog"
                        viewMoreButtonText="Ver más entradas"
                        title={title}
                        subtitle={subtitle}
                        data={ posts }
                        Component={ PostCard }
                        viewMoreButton
                    />
                )
            }
        </>
    )
}


export default LatestPosts;