import * as React from "react"

import styled from "styled-components"
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp"
import { Messenger } from "@styled-icons/boxicons-logos/Messenger"
import { PhoneCall } from "@styled-icons/evaicons-solid/PhoneCall"
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline"
import { ChatDots } from "@styled-icons/bootstrap/ChatDots"
import { Typography, Stack, Button } from "@mui/material"
import { Email } from "@mui/icons-material"
import { ArrowToTop } from "styled-icons/boxicons-regular"

import { animateScroll } from "react-scroll"

export const StyledLinkButton = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${props => (props.color ? props.color : "white")};
  background-color: ${props =>
    props.background ? props.background : `rgba(0,0,0,0)`};
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  border: 2px solid
    ${props => (props.borderColor ? props.borderColor : "white")};
  cursor: pointer;
  position: relative;
  max-width: 150px;
  transition: 0.25s ease-in;
  outline: none;

  &:hover {
    border: 2px solid white;
    transition: 0.25s ease-in-out;
    background-color: ${props =>
      props.background ? props.background : "#CD7D1E"};
    box-shadow: 0px 24px 44px -20px rgba(0, 0, 0, 0.98);
    -webkit-box-shadow: 0px 24px 44px -20px rgba(0, 0, 0, 0.98);
    -moz-box-shadow: 0px 24px 44px -20px rgba(0, 0, 0, 0.98);
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.5rem;
    font-size: 16px;
  }
`

export const StyledText = styled.p`
  color: ${props => (props.color ? props.color : "white;")};
  ${props => props.align && `text-align:${props.align};`}
  ${props => props.size && `font-size:${props.size}px;`}
    ${props => props.weight && `font-weight:${props.weight};`}
    ${props => props.align && `text-align:${props.align};`}
`

export const StyledCircleButton = styled.button`
  color: ${props => (props.color ? props.color : "white")};
  background-color: ${props =>
    props.background ? props.background : "transparent"};
  width: 30px;
  height: 30px;
  border-radius: 30px;
  font-size: 16px;
  border: 2px solid white;
  transition: 0.25s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  &.active {
    background-color: transparent;
    border: 2px solid #cd7d1e;
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 20px;
  }

  &:hover {
    color: black;
    background-color: white;
  }

  @media (max-width: 1280px) {
    border: 1px solid white;
    width: 40px;
    height: 40px;
  }
`

const StyledBotonFlotante = styled.div`
  box-shadow: #00A2A6 0px 20px 30px -10px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: rgba(0,0,0,.87);
  border: 2px solid #00A2A6;
  position: fixed;
  bottom: ${props =>
    props.bottom["desktop"] ? props.bottom["desktop"] : "20"}px; 
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .45s ease-in-out;
  z-index: 999;
  
  @media (min-width: 1112px) {
    bottom: ${props =>
      props.bottom["desktop"] ? props.bottom["desktop"] : "20"}px;
  }
  
  @media (max-width: 480px) {
    right: 10px;
    height: 60px;
    width: 60px;
    bottom: ${props =>
      props.bottom["movil"] ? props.bottom["movil"] : "10"}px;
    &.alert {
      border: 4px solid #CD7D1E};
    }
  }
`

const BackToTopButton = () => {
  const options = {
    // your options here, for example:
    duration: 500,
    smooth: true,
  }

  const [bottom, setBottom] = React.useState({
    desktop: 120,
    movil: 80,
  }) //Se define el bottom del botón en px [desktop,móvil]

  React.useEffect(() => {
    window.onscroll = function (ev) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setBottom({
          desktop: 400,
          movil: 100,
        })
      } else {
        setBottom({
          desktop: 120,
          movil: 80,
        })
      }
    }
  }, [])

  return (
    <StyledBotonFlotante
      bottom={bottom}
      onClick={() => animateScroll.scrollToTop(options)}
    >
      <ArrowToTop color="white" size={20} />
    </StyledBotonFlotante>
  )
}

export default BackToTopButton
