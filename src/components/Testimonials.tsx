import * as React from "react";
import SliderContainer from "./SliderContainer"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby";
import TestimonialCard from "./TestimonialCard";

const title:string = "Testimonios";
const subtitle:string = "¡Mira lo que nuestros clientes dicen!";

const Testimonials = () => {
    const [ testimonials, setTestimonials ] = useState<any>([]);

    const { allTestimonial } = useStaticQuery(graphql`
        query Testimonials {
            allTestimonial {
                edges {
                    node {
                        name
                        comment
                        avatar {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 280
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                }
            }
        }
    `);


    React.useEffect(() => {
        if( allTestimonial ) {
            if( allTestimonial.edges ) {
                setTestimonials( allTestimonial.edges )
            }
        }
    },[ allTestimonial ])

    return(
        <>
            {
                testimonials.length > 0 && (
                    <SliderContainer
                        title={title}
                        subtitle={subtitle}
                        data={ testimonials }
                        Component={ TestimonialCard }
                    />
                )
            }
        </>
    )
}


export default Testimonials;