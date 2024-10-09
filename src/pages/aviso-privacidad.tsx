import { ChevronLeft } from "@mui/icons-material"
import { Container, Paper, Typography } from "@mui/material"
import * as React from "react"
import Layout from "../components/layout"
import StyledButton from "../styled/StyledButton"
import { Box } from "@mui/system"
import { navigate } from "gatsby"
import withTheme from "../components/theme"

const Privacy = () => {
  return (
    <Layout>
      <Paper>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography
            sx={{ mt: 10, mb: 2 }}
            color="text.primary"
            align="center"
            variant="h4"
          >
            Aviso de Privacidad
          </Typography>
          <Typography color="text.primary">
            A los Usuarios (como se definen posteriormente), les informamos que
            el siguiente Aviso de Privacidad, les es aplicable por el simple uso
            o acceso a cualquiera de las páginas, aplicaciones web y móviles,
            softwares y, aplicaciones en general, que integran el Portal de
            www.inmobiliariapuertoescondido.com (en adelante y, conjunta e
            indistintamente, el "Portal"), por lo que entenderemos que lo acepta
            y acuerda en obligarse en su cumplimiento.{" "}
            <b>
              En caso de que no esté de acuerdo con el Aviso de Privacidad y/o
              con los Términos y Condiciones a su disposición, deberá abstenerse
              de acceder o utilizar el Portal.
            </b>
          </Typography>

          <Typography>
            El Usuario, entendido como aquella persona que realiza el uso o
            accede, mediante equipo de cómputo y/o cualquier equipo de
            comunicación o dispositivo, al Portal (en adelante el “Usuario”),
            acepta plena y sin reserva todas y cada una de las disposiciones
            incluidas en el presente Aviso de Privacidad.
          </Typography>

          <Typography variant="h6">
            RESPONSABLE DEL TRATAMIENTO DE SUS DATOS PERSONALES.
          </Typography>
          <Typography>
            Para Inmobiliaria Puerto Escondido (en adelante la “Empresa”) la
            seguridad de los Usuarios es nuestra prioridad, por lo que
            protegemos sus datos personales mediante el uso, aplicación y
            mantenimiento de altas medidas de seguridad técnicas, físicas y
            administrativas.
          </Typography>

          <Typography>
            Como Usuario, usted tiene la oportunidad de escoger entre una amplia
            gama de productos y servicios a través de nuestro Portal, sabiendo
            que sus datos personales estarán protegidos y serán tratados de
            manera confidencial. Les informamos que el RESPONSABLE de recabar y
            dar tratamiento y/o utilizar los datos personales que el Usuario
            proporcione a través del Portal, es la Empresa, así como sus
            subsidiarias, asociadas, sociedades controladoras y afiliadas.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            DOMICILIO DEL RESPONSABLE. Para efectos del presente aviso de
            privacidad, la Empresa señala, individualmente, como su domicilio,
            el ubicado en Segunda norte 306, Sector Reforma B, San Pedro
            Mixtepec -Dto. 22 -, Oaxaca, C. P. 71980
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            DATOS PERSONALES QUE PUEDEN SER RECOLECTADOS.
          </Typography>
          <Typography>
            Los datos personales que la Empresa puede recopilar del Usuario al
            utilizar el Portal y/o contratar nuestros servicios y productos, son
            los siguientes: 1. Nombre, teléfono, domicilio (calle, número
            exterior, colonia, ciudad, estado, código postal), correo
            electrónico.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            FINALIDADES DEL TRATAMIENTO DE SUS DATOS PERSONALES.
          </Typography>
          <Typography>
            Los datos personales que la Empresa recabe serán utilizados para
            atender las siguientes finalidades: 1. Adquisición de Hosting y
            Dominio para el Usuario., Contactar y enviar información relevante
            acerca de nuestros servicios y/o promociones al Usuario., El usuario
            tenga acceso a Soporte Técnico personalizado., Cotizaciones,
            propuestas e información acerca de un servicio solicitado por el
            Usuario. 2. Para integrar expedientes, bases de datos y sistemas
            necesarios para llevar a cabo las operaciones y servicios
            correspondientes; (ii) Para reclamar la entrega de premios y/o
            promociones; (iii) Para llevar a cabo análisis internos; 3. De
            manera adicional, se podrán utilizar sus datos personales para las
            siguientes finalidades secundarias: (i) Mercadotecnia, publicidad y
            prospección comercial; (ii) Ofrecerle, en su caso, otros productos y
            servicios propios de la Empresa o de cualquiera de sus afiliadas,
            subsidiarias, sociedades controladoras, asociadas, comisionistas o
            sociedades; (iii) Remitirle promociones de otros bienes, servicios
            y/o productos; (iv) Para realizar análisis estadísticos, de
            generación de modelos de información y/o perfiles de comportamiento
            actual y predictivo y, (v) Para participar en encuestas, sorteos y
            promociones.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            OPCIONES Y MEDIOS PARA LIMITAR EL USO O DIVULGACIÓN DE LOS DATOS.
          </Typography>
          <Typography>
            La Empresa tiene implementadas medidas de seguridad administrativas,
            técnicas y físicas para proteger sus datos personales, mismas que
            igualmente exigimos sean cumplidas por los proveedores de servicios
            que contratamos. Usted podrá limitar el uso o divulgación de sus
            datos personales enviando un correo electrónico a
            inmobiliariapuertoescondido@gmail.com indicándonos en el cuerpo del
            correo su nombre completo y que dato desea que no sea divulgado, de
            proceder su solicitud, se le registrará en el listado de exclusión.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            MEDIOS PARA EJERCER LOS DERECHOS DE ACCESO, RECTIFICACIÓN,
            CANCELACIÓN U OPOSICIÓN (DERECHOS ARCO).
          </Typography>
          <Typography>
            P uede enviar un correo electrónico a
            inmobiliariapuertoescondido@gmail.com, en cualquier momento, para
            ejercer sus Derechos de Acceso, Rectificación, Cancelación u
            Oposición (“Derechos ARCO”). Para ejercer los Derechos ARCO, usted
            (o su representante legal), deberá presentar la solicitud,
            identificándose con la siguiente documentación:
          </Typography>

          <Typography sx={{ mb: 2, mt: 4 }}>
            Si uno o más de los documentos mencionados anteriormente no están
            incluidos, y/o los documentos tienen errores u omisiones, la Empresa
            le notificará dentro de los 3 días hábiles posteriores a la
            recepción de la solicitud y le pedirá los documentos faltantes y/o
            las correcciones pertinentes; tendrá 5 días hábiles a partir de esa
            notificación para proporcionar la información actualizada, de lo
            contrario, la solicitud se entenderá como no presentada.
            TRANSFERENCIA DE DATOS PERSONALES. La Empresa podrá divulgar sus
            datos personales a aquellos terceros que, en virtud de los servicios
            y productos ofrecidos, necesiten conocerlos para cumplir cabalmente
            con los mismos. Asimismo, la Empresa puede divulgar su información a
            las autoridades competentes en términos de la legislación aplicable;
            cualquier transferencia de sus datos personales sin consentimiento
            se realizará de acuerdo con el Artículo 37 de la LFPDPPP. WEB
            BEACONS. La Empresa, podrá o no, utilizar tecnologías de seguimiento
            tales como web beacons, similares a las cookies, para recabar datos
            sobre sus visitas en el Portal; éstas son pequeñas imágenes
            electrónicas incrustadas en el contenido web o mensajes de correo
            electrónico, las cuales no se encuentran normalmente visibles para
            los Usuarios y que nos permiten generar contenidos casi
            personalizados para ofrecerle una mejor experiencia cuando utilice
            nuestro Portal. En caso de no estar de acuerdo con cualquiera de las
            condiciones aquí establecidas, el Usuario siempre podrá cambiar la
            configuración de su navegador. MODIFICACIONES AL AVISO DE
            PRIVACIDAD. El presente aviso de privacidad puede sufrir
            modificaciones, cambios o actualizaciones derivadas, entre otras
            cosas, por nuevos requerimientos legales; necesidades propias de la
            Empresa, por los productos o servicios que ofrecemos; por nuestras
            prácticas de privacidad; por cambios en nuestro modelo de negocio, o
            por otras causas. Cualquier modificación al presente aviso de
            privacidad le será notificada a través de cualquiera de los
            siguientes medios: un comunicado por escrito enviado a su domicilio;
            por el correo electrónico que señale; un mensaje a su teléfono
            móvil; un mensaje dado a conocer a través del Portal o de cualquier
            medio electrónico que utilice para celebrar operaciones; o bien, en
            periódicos de amplia circulación el domicilio social de la Empresa.
          </Typography>
          <Box sx={{ justifyContent: "center", display: "flex", mt: 4 }}>
            <StyledButton
              variant="outlined"
              onClick={() => navigate("/")}
              startIcon={<ChevronLeft />}
            >
              Volver
            </StyledButton>
          </Box>
        </Container>
      </Paper>
    </Layout>
  )
}

export default withTheme(Privacy)
