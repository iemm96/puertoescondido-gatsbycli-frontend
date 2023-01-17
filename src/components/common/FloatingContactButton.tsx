import * as React from 'react';

import styled from "styled-components";
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp";
import {Messenger} from "@styled-icons/boxicons-logos/Messenger";
import {PhoneCall} from "@styled-icons/evaicons-solid/PhoneCall";
import {CloseOutline} from "@styled-icons/evaicons-outline/CloseOutline";
import { ChatDots } from "@styled-icons/bootstrap/ChatDots";
import {Typography, Stack, Button} from "@mui/material";
import {Email} from "@mui/icons-material";

export const StyledLinkButton = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${(props) => props.color ? props.color : 'white'};
  background-color: ${(props) => props.background ? props.background : `rgba(0,0,0,0)`};
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  border: 2px solid ${(props) => props.borderColor ? props.borderColor : 'white'};
  cursor: pointer;
  position: relative;
  max-width: 150px;
  transition: .25s ease-in;
  outline: none;

  &:hover {
    border: 2px solid white;
    transition: .25s ease-in-out;
    background-color: ${(props) => props.background ? props.background : '#CD7D1E'};
    box-shadow: 0px 24px 44px -20px rgba(0,0,0,0.98);
    -webkit-box-shadow: 0px 24px 44px -20px rgba(0,0,0,0.98);
    -moz-box-shadow: 0px 24px 44px -20px rgba(0,0,0,0.98);
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.5rem;
    font-size: 16px;
  }
`;

export const StyledText = styled.p`
    color: ${(props) => props.color ? props.color : 'white;'};
    ${(props) => props.align && `text-align:${props.align};`}
    ${(props) => props.size && `font-size:${props.size}px;`}
    ${(props) => props.weight && `font-weight:${props.weight};`}
    ${(props) => props.align && `text-align:${props.align};`}
`;


export const StyledCircleButton = styled.button`
  color: ${(props) => props.color ? props.color : 'white'};
  background-color: ${(props) => props.background ? props.background : 'transparent'};
  width: 50px;
  height: 50px;
  border-radius: 30px;
  font-size: 16px;
  border:2px solid white;
  transition: 0.25s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  
  &.active {
    background-color: transparent;
    border: 2px solid #CD7D1E;
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
  
`;

const StyledBotonFlotante = styled.div`
  box-shadow: #00A2A6 0px 20px 30px -10px;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  background-color: rgba(0,0,0,.87);
  border: 6px solid #00A2A6;
  position: fixed;
  bottom: ${(props) => props.bottom['desktop'] ? props.bottom['desktop'] : '20'}px; 
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .45s ease-in-out;
  z-index: 999;
  
  &.open {
    border: 1px solid #00A2A6;
    border-radius: 15px;
    width: 300px;
    height: 450px;
    padding: 1rem 0;
  }
  
  &.alert {
    border: 6px solid #CD7D1E;
    background-color: #CD7D1E;
    box-shadow: #CD7D1E 0px 20px 30px -10px;
  }

  @media (min-width: 1112px) {
    bottom: ${(props) => props.bottom['desktop'] ? props.bottom['desktop'] : '20'}px;
  }
  
  @media (max-width: 480px) {
    right: 10px;
    height: 60px;
    width: 60px;
    bottom: ${(props) => props.bottom['movil'] ? props.bottom['movil'] : '10'}px;
    &.alert {
      border: 4px solid #CD7D1E};
    }
  }
`;

const StyledNotificacion = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #CD7D1E;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -20px;
  left: -10px;
  color: white;
  font-weight: 600;
  border-radius: 50%;

  @media (max-width: 480px) {
    font-weight: 400;
    width: 25px;
    height: 25px;
    left: -5px;
    top: -5px;
  }
`;

const StyledImg = styled.img`
  height: 80px;
  &.open {
    position: absolute;
    top: 10px;
  }
  
  @media (max-width: 480px) {
    height: 60px;
  }
`

const FloatingContactButton = () => {
    const [open,setOpen] = React.useState(false);
    const [displayMenu,setDisplayMenu] = React.useState(false);
    const [shake,setShake] = React.useState(false);
    const [bottom,setBottom] = React.useState({
        'desktop':20,
        'movil':40
    }); //Se define el bottom del botón en px [desktop,móvil]

    React.useEffect(() => {
        window.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setBottom(
                    {
                        'desktop':400,
                        'movil':100
                    }
                );
            }else{
                setBottom(
                    {
                        'desktop':20,
                        'movil':10
                    }
                );
            }
        };

        if(open === false) {
            setTimeout(() => setShake(true), 15000);
        }
    },[]);

    React.useEffect(() => {
        if(open) {
            setShake(false);
            setTimeout(() => setDisplayMenu(true),250)
        }
    },[open]);

    const handleClick = (url?:string) => {
        setOpen(false);
        setDisplayMenu(false);

        if( url ) {
            window.open(url, '_blank');
        }
    }

    return(
        <StyledBotonFlotante bottom={bottom} className={open ? 'open' : '' + (shake && ' shake alert')} onClick={() => {
            if(open === false) {
                setOpen(true)}}
        }
        >
            {shake && <>
                <StyledNotificacion>
                    <Typography color="white">
                        1
                    </Typography>
                </StyledNotificacion>
            </>}
            {open ? <>
                <Stack  sx={{ p: 2 }} spacing={ 2 } className="fade-in" style={{flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',display: (displayMenu ? 'flex' : 'none')}}>
                    <StyledCircleButton onClick={() => handleClick()} style={{position:'absolute',top:5,right:5}}>
                        <CloseOutline size={30} />
                    </StyledCircleButton>
                    <Typography color="white" sx={{mt:3}} align={'center'}>
                        Hola, ¿Tienes dudas? ¡Estamos para ayudarte!
                    </Typography>
                    <Button variant="outlined" fullWidth
                        startIcon={<Whatsapp size={20} color={'white'}/>}
                        onClick={() => handleClick('https://api.whatsapp.com/send/?phone=529541084925&text=Hola+los+contacto+desde+su+web')}>
                         WhatsApp
                    </Button>
                    <Button variant="outlined" fullWidth
                        startIcon={
                            <Email sx={{ color: 'white', fontSize: 20 }}/>
                        }
                        onClick={() => handleClick(`mailto:inmobiliariapuertoescondido@gmail.com&subject=Hola+los+contacto+desde+su+pagina+web`)}>
                        Email
                    </Button>
                    <Button variant="outlined" fullWidth
                        startIcon={
                            <Messenger size={20} color={'white'}/>
                        }
                        onClick={() => handleClick('https://m.me/TerrenosenPuertoEscondido')}>
                        Messenger
                    </Button>
                    <Button variant="outlined" fullWidth
                        startIcon={
                            <PhoneCall size={20} color={'white'}/>
                        }
                        onClick={() => handleClick('tel:+529541084925')}>
                        Llámame
                    </Button>
                </Stack>
            </> : <ChatDots color="white" size={40}/> }

        </StyledBotonFlotante>
    )
}

export default FloatingContactButton;