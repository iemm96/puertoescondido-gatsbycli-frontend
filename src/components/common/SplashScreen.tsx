import * as React from 'react';
import Box from "@mui/material/Box";
// @ts-ignore
import LogoColor from '../../images/logo_color.svg';
import Typography from "@mui/material/Typography";
import { motion, AnimatePresence } from 'framer-motion';

export const transition = {
    duration: 1,
    ease: [0.6, .01, -0.05, 0.9]
}

const SplashScreen = ( { duration }:{ duration:number } ) => {

    const [ isVisible, setIsVisible ] = React.useState<boolean>( true );
    React.useEffect(() => {
        changeBodyOverflow()
    }, [ ]);

    const changeBodyOverflow = () => {
        setTimeout(() => setIsVisible( false ),duration * 1000);
    }

    return(
        <AnimatePresence>
                {
                    isVisible && (
                        <motion.div
                            exit={{
                                opacity: 0
                            }}
                            style={{
                                opacity: 1,
                                position: 'fixed',
                                height: '100%',
                                width: '100%',
                                background: 'rgb(255,255,255)',
                                zIndex: 2000,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden'
                            }}
                        >
                            <motion.div
                                initial={{
                                    y: 40,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: { ...transition }
                                }}

                            >
                                <motion.div
                                    animate={{ opacity: [1, .5, 1] }}
                                    transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
                                >
                                    <LogoColor src={ LogoColor } width={ 175 }  alt="Inmobiliaria Puerto Escondido"/>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{
                                    y: -20,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: { ...transition, delay: 0.5 }
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    Preparando todo...
                                </Typography>
                            </motion.div>

                        </motion.div>
                    )
                }

            </AnimatePresence>


    )
}

export default SplashScreen;