import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge";

const BackgroundImage = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(
                  width: 2000
                  placeholder: BLURRED
                  formats: [ AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });

      if (!image) {
        return null;
      }

      return (
          <BgImage style={{height:800}} image={getImage(image.node)}/>
      );
    }}
  />
);

export default BackgroundImage;