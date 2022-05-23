import * as React from 'react';

/*
import styled from "styled-components";
import {MediumBlue, WinterSky} from "../colors";
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp";
import {Telegram} from "@styled-icons/boxicons-logos/Telegram";
import {Messenger} from "@styled-icons/boxicons-logos/Messenger";
import {PhoneCall} from "@styled-icons/evaicons-solid/PhoneCall";
import {Row} from "./grid";
import Astro from "../../assets/img/astro-img.webp";
import {StyledLinkButton, StyledCircleButton, StyledText} from "../styled";
import {CloseOutline} from "@styled-icons/evaicons-outline/CloseOutline";

const StyledBotonFlotante = styled.div`
  box-shadow: ${MediumBlue(0.9)} 0px 20px 30px -10px;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  background-color: rgba(0,0,0,.87);
  border: 6px solid ${MediumBlue(1)};
  position: fixed;
  bottom: ${(props) => props.bottom['desktop'] ? props.bottom['desktop'] : '20'}px; 
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .45s ease-in-out;
  z-index: 999;
  
  &.open {
    border: 1px solid ${MediumBlue(1)};
    border-radius: 15px;
    width: 300px;
    height: 450px;
    padding: 1rem 0;
  }
  
  &.alert {
    border: 6px solid ${WinterSky(1)};
    background-color: ${WinterSky(1)};
    box-shadow: ${WinterSky(0.9)} 0px 20px 30px -10px;
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
      border: 4px solid ${WinterSky(1)};
    }
  }
`;

const StyledNotificacion = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: ${WinterSky(1)};
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
    const [open,setOpen] = useState(false);
    const [displayMenu,setDisplayMenu] = useState(false);
    const [shake,setShake] = useState(false);
    const [bottom,setBottom] = useState({
        'desktop':20,
        'movil':40
    }); //Se define el bottom del botón en px [desktop,móvil]

    React.useEffect(() => {
        window.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setBottom(
                    {
                        'desktop':100,
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

    const handleClick = () => {
        setOpen(false);
        setDisplayMenu(false);
    }

    return(
        <StyledBotonFlotante bottom={bottom} className={open ? 'open' : '' + (shake && ' shake alert')} onClick={() => {
            if(open === false) {
                setOpen(true)}}
        }
        >
            {shake && <>
                <StyledNotificacion>1</StyledNotificacion>
            </>}
            {open ? <>
                <Row className="fade-in" style={{flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',display: (displayMenu ? 'flex' : 'none')}}>
                    <StyledCircleButton onClick={() => handleClick()} style={{position:'absolute',top:5,right:5}}>
                        <CloseOutline size={30} />
                    </StyledCircleButton>
                    <StyledText style={{marginTop:'3rem'}} align={'center'}>
                        Hola, Me llamo AstroDev, ¿Charlamos?
                    </StyledText>
                    <StyledLinkButton onClick={() => handleClick()} href="https://api.whatsapp.com/send?phone=+523323660598&text=Excelente%20d%C3%ADa!%20me%20gustar%C3%ADa%20una%20cotizaci%C3%B3n" target="_blank">
                        <Whatsapp size={20} color={'white'}/> WhatsApp
                    </StyledLinkButton>
                    <StyledLinkButton style={{marginTop:'1rem'}} onClick={() => handleClick()} href="https://t.me/nucleodev" target="_blank">
                        <Telegram size={20} color={'white'}/> Telegram
                    </StyledLinkButton>
                    <StyledLinkButton style={{marginTop:'1rem'}} onClick={() => handleClick()} href="http://m.me/nucleodevoficial" target="_blank">
                        <Messenger size={20} color={'white'}/> Messenger
                    </StyledLinkButton>
                    <StyledLinkButton style={{marginTop:'1rem'}} onClick={() => handleClick()} href="tel:+523323660598" target="_blank">
                        <PhoneCall size={20} color={'white'}/> Llámame
                    </StyledLinkButton>
                </Row>
                <StyledImg className={'open'} src={Astro}/>
            </> : <StyledImg src={Astro}/>}

        </StyledBotonFlotante>
    )
}

export default BotonFlotanteContacto;*/