import * as React from "react";
import SliderComponent from "./SliderComponent"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby";
import TestimonialCard from "./TestimonialCard";

const title:string = "Testimonios";
const subtitle:string = "¡Mira lo que nuestros clientes dicen!";

const Testimonials = () => {
    const [ testimonials, setTestimonials ] = useState<any>([]);

    const data = useStaticQuery(graphql`
        query Testimonials {
            allTestimonial {
                edges {
                    node {
                        name
                        comment
                    }
                }
            }
        }
    `);


    React.useEffect(() => {
        if( data ) {
            if( data.allTestimonial.edges ) {
                setTestimonials( data.allTestimonial.edges )
            }
        }
    },[ data ])

    return(
        <>
            {
                testimonials.length > 0 && (
                    <SliderComponent
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