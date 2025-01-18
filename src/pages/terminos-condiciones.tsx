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
            Términos y Condiciones
          </Typography>
          <Typography color="text.primary">
            A los Usuarios, les informamos que los siguientes Términos y
            Condiciones les son aplicables por el simple uso o acceso a
            cualquiera de las páginas, aplicaciones web y móviles, softwares y,
            aplicaciones en general, que integran el Portal de
            www.inmobiliariapuertoescondido.com (en adelante y, conjunta e
            indistintamente, el "Portal"), por lo que entenderemos que los
            acepta y acuerda en obligarse a su cumplimiento. En el caso de que
            no esté de acuerdo con los Términos y Condiciones deberá abstenerse
            de acceder o utilizar el Portal.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Grupo Escondido PMX y/o sus subsidiarias, controladoras, partes
            relacionadas y afiliadas (en a d e la n t e y , c o n ju n t a e in
            d is t in t a m e n t e , la “ E m p r e s a ” ) s e r e s e r v a n
            e l d e r e c h o d e m o d if ic a r discrecionalmente el contenido
            del Portal en cualquier momento, sin necesidad de previo aviso.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            El Usuario, entendido como aquella persona que realiza el uso o
            accede al Portal, mediante equipo de cómputo y/o cualquier equipo de
            comunicación o dispositivo (en adelante el “Usuario”), conviene en
            no utilizar dispositivos, software, o cualquier otro medio tendiente
            a interferir tanto en las actividades y/u operaciones del Portal, en
            las bases de datos y/o información que se contenga en el mismo.
          </Typography>
          <Typography variant="h6" sx={{ mt: 3 }}>
            1. USO Y RESTRICCIONES.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            El acceso o utilización del Portal expresan la adhesión plena y sin
            reservas del Usuario a los presentes Términos y Condiciones. A
            través del Portal, el Usuario se servirá, contratará y/o utilizará
            diversos servicios y contenidos (los "Servicios y Contenidos"),
            puestos a disposición por la Empresa. La Empresa tendrá el derecho a
            negar, restringir o condicionar al Usuario el acceso al Portal,
            total o parcialmente, a su entera discreción, así como a modificar
            los Servicios y Contenidos del Portal en cualquier momento y sin
            necesidad de previo aviso.
          </Typography>

          <Typography>
            El Usuario reconoce que no todos los Servicios y Contenidos están
            disponibles en todas las áreas geográficas y que algunos Servicios y
            Contenidos pueden ser utilizados solamente con posterioridad a su
            contratación, activación o registro previo por el Usuario y/o
            mediante el pago de estos. La Empresa no garantiza la disponibilidad
            y continuidad de la operación del Portal y de los Servicios y
            Contenidos, ni la utilidad del P ortal o los S ervicios y C
            ontenidos en relación con cualquier actividad específ ica,
            independientemente del medio de acceso que utilice el Usuario. La
            Empresa no será responsable por daño o pérdida alguna de cualquier
            naturaleza que pueda ser causado debido a la falta de disponibilidad
            o continuidad de operación del Portal y/o de los Servicios y
            Contenidos.
          </Typography>

          <Typography>
            El aprovechamiento de los Servicios y Contenidos en el Portal, es
            exclusiva responsabilidad del Usuario, quien en todo caso deberá
            servirse de ellos acorde a las funcionalidades permitidas en el
            propio Portal y a los usos autorizados en los presentes Términos y
            Condiciones, por lo que el Usuario se obliga a utilizarlos de tal
            modo que no contravengan las buenas costumbres, los derechos de
            terceros, las normas de uso y convivencia en Internet, las leyes de
            los Estados Unidos Mexicanos y, la legislación vigente en el país en
            que el Usuario se encuentre al acceder al Portal y usar los
            Servicios y Contenidos. El Portal es para el uso individual del
            Usuario por lo que no podrá comercializar de manera alguna los
            Servicios y Contenidos.
          </Typography>
          <Typography variant="h6" sx={{ mt: 3 }}>
            2. RESTRICCIONES.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            El Usuario no tiene el derecho de colocar híper ligas dentro del
            Portal, a utilizar las ligas del Portal, ni el derecho de colocar o
            utilizar los Servicios y Contenidos en sitios o páginas propias o de
            terceros sin autorización previa y por escrito de la Empresa. El
            Usuario no podrá impedir a cualquier otro Usuario el uso del Portal
            ni de los Servicios y Contenidos.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }}>
            3. PROPIEDAD INTELECTUAL.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Los derechos de propiedad intelectual, propiedad industrial respecto
            de los Servicios y Contenidos, los signos distintivos y dominios de
            las Páginas o del Portal, así como los derechos de uso y explotación
            de estos, incluyendo de manera enunciativa más no limitativa, su
            divulgación, publicación, reproducción, distribución y
            transformación, son propiedad exclusiva de la Empresa. El Usuario no
            adquiere ningún derecho de propiedad intelectual y/o industrial por
            el simple uso o acceso de los Servicios y Contenidos del Portal y,
            en ningún momento, dicho uso será considerado como una autorización
            o licencia para utilizar los Servicios y Contenidos con fines
            distintos a los que se contemplan en los presentes Términos y
            Condiciones.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }}>
            4. PROPIEDAD INTELECTUAL DE TERCEROS.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            El Usuario acuerda que las disposiciones que se establecen en el
            artículo 3 anterior respecto de la titularidad de los derechos de la
            Empresa, también son aplicables a los derechos de terceros respecto
            de los Servicios y Contenidos de las Páginas, dominios o información
            presentada o vinculada al Portal.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }}>
            5. CALIDAD DE LOS SERVICIOS Y CONTENIDOS Y SUS GARANTÍAS.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Ni la Empresa, ni sus proveedores o socios comerciales, serán
            responsables de cualquier daño o perjuicio que sufra el Usuario a
            consecuencia de inexactitudes, consultas realizadas, asesorías,
            errores tipográficos y cambios o mejoras que se realicen
            periódicamente a los Servicios y Contenidos. Las recomendaciones y
            consejos obtenidos a través del Portal son de naturaleza general,
            por lo que no deben tomarse en cuenta en la adopción de decisiones
            personales ni profesionales. Para ello, se debe consultar a un
            profesional apropiado que pueda asesorar al Usuario de acuerdo con
            sus necesidades específicas.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            La Empresa ofrece los Servicios y Contenidos con un nivel de
            competencia y diligencia razonable desde un punto de vista
            comercial, sin embargo, no ofrece ningún tipo de garantía en
            relación con estos. El Portal es proporcionado por la Empresa "tal
            como está" y "según disponibilidad". La Empresa no manifiesta
            ninguna representación o garantía de ningún tipo, expresa o
            implícita, en relación con la operación del Portal, información,
            contenido, materiales o productos incluidos. El Usuario acepta
            expresamente que el uso del Portal es bajo su propio riesgo. La
            Empresa se reserva el derecho a remover o eliminar cualquier
            información del Portal, en cualquier momento, a su entera
            discreción. Ni la Empresa, ni sus proveedores o distribuidores
            ofrecen garantías específicas sobre los Servicios y Contenidos; la
            Empresa excluye todas las garantías en la medida que las leyes
            vigentes lo permitan.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            De conformidad con los Términos y Condiciones, la Empresa no asume
            ni asumirá ningún tipo de responsabilidad frente a ninguna persona,
            derivada o que pudiera derivarse por los Servicios y Contenidos,
            navegación en el Portal, consultas, aclaraciones y/o cualquier otra
            clase de respuesta otorgada por parte de la Empresa por cualquier
            medio de comunicación.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            El Usuario se obliga a dejar en paz y a salvo a la Empresa, a sus
            accionistas, subsidiarias, afiliadas, funcionarios, directores,
            empleados, asesores, apoderados, representantes y/o cualquier
            persona relacionada con esta, de cualquier responsabilidad que
            pudiera imputarse en virtud y/o en relación con el Portal, la
            prestación de los Servicios y Contenidos o cualquier otro derivado
            de los presentes Términos y Condiciones.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            El Usuario entiende y acepta que la Empresa se encontrará limitada
            por responsabilidad de cualquier tipo, en todos los casos, al monto
            pagado como contraprestación por los Servicios y Contenidos.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            5.1 DEVOLUCIONES Y CANCELACIONES.
          </Typography>
          <Typography>
            Para seguridad de los Usuarios, en cualquier momento podrán cancelar
            los Servicios y Contenidos que adquieran en el Portal, a su entera
            discreción y sin responsabilidad alguna. El Usuario reconoce que los
            cargos que se realicen a tarjetas de débito o crédito, con motivo de
            los Servicios y Contenidos, no serán objeto de devolución y, que al
            realizar dichos pagos se sujeta a los Términos y Condiciones de los
            proveedores de servicios relacionados con dichos pagos.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            6. BIENES Y SERVICIOS DE TERCEROS ENLAZADOS.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            El hecho de que se ofrezca información en el Portal o en otros
            sitios ligados o vinculados, no implica la recomendación, garantía,
            patrocinio o aprobación por parte de la Empresa respecto de dicha
            información, bienes y/o servicios. La disponibilidad de bienes y/o
            servicios ofertados por terceros o por sitios ligados o vinculados,
            no es responsabilidad de la Empresa. En virtud de lo anterior, la
            Empresa no será responsable ante cualquier autoridad de cualquier
            naturaleza, por cualquier asunto relacionado con la venta, consumo,
            distribución, entrega, disponibilidad o prestación con respecto de
            cualquiera de los bienes y/o servicios ofertados por terceros o por
            sitios ligados o vinculados a través del Portal.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Respecto de los Servicios y Contenidos que prestan terceros dentro o
            mediante enlaces a el Portal (tales como ligas, banners y botones),
            la Empresa se limita exclusivamente, para conveniencia del Usuario,
            a: (i) informar al Usuario sobre los mismos y, (ii) a proporcionar
            un medio para poner en contacto al Usuario con proveedores o
            vendedores. Los productos y/o servicios que se comercializan dentro
            del Portal y/o en los sitios de terceros enlazados son suministrados
            por comerciantes independientes y no se entenderá en ningún caso que
            son responsabilidad de la Empresa. No existe ningún tipo de relación
            laboral, asociación o sociedad, entre la Empresa y dichos terceros.
            Toda asesoría, consejo, declaración, información y contenido de las
            páginas de terceros enlazadas o dentro del Portal representan las
            opiniones y juicios de dicho tercero, consecuentemente, la Empresa
            no será responsable de ningún daño o perjuicio que sufra el Usuario
            a consecuencia de estos.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            7. CONFIDENCIALIDAD.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            La Empresa se obliga a mantener confidencial la información que
            reciba del Usuario que tenga dicho carácter conforme a las
            disposiciones legales aplicables en los Estados Unidos Mexicanos; la
            Empresa no asume ninguna obligación de mantener confidencial
            cualquier otra información que el Usuario le proporcione.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            8. USO DE LA INFORMACIÓN NO CONFIDENCIAL.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Mediante el uso del Portal, el Usuario autoriza a la Empresa, de
            manera enunciativa más no limitativa, a utilizar, publicar,
            reproducir, divulgar, comunicar públicamente y transmitir la
            información no confidencial, en términos de lo establecido en la Ley
            Federal de Protección de Datos Personales en Posesión de
            Particulares, en la Ley Federal de los Derechos de Autor, en la Ley
            Federal de Protección al Consumidor y en cualquiera otra aplicable
            en la legislación mexicana.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            9. COOKIES.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            El Usuario que tenga acceso al Portal, conviene en recibir archivos
            que les transmitan los servidores de la Empresa. Una "Cookie" es un
            archivo de datos que se almacena en el disco duro de la computadora
            del Usuario cuando éste acceda al Portal. Dichos archivos pueden
            contener información tal como la identificación proporcionada por el
            Usuario o información para rastrear las páginas que el Usuario ha
            visitado. Una Cookie no puede leer los datos o información del disco
            duro del Usuario ni leer las Cookies creadas por otros sitios o
            páginas.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Generalmente, las Cookies son aceptadas automáticamente, el Usuario
            puede cambiar la configuración de su navegador en cualquier momento.
            En caso de que el Usuario decida rechazar las Cookies, es posible
            que ciertas secciones del Portal no tengan su funcionamiento óptimo
            o incluso no funcionen en absoluto.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            10. AVISO DE PRIVACIDAD DE DATOS PERSONALES.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Toda la información que la Empresa recabe del Usuario es tratada con
            absoluta confidencialidad conforme las disposiciones legales
            aplicables en la legislación mexicana. Para conocer más sobre la
            protección de sus datos personales por favor consulte nuestro Aviso
            de Privacidad.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            10. CLAVES DE ACCESO.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            En todo momento, el Usuario es el responsable único y final de
            mantener en secreto las claves de acceso que pudiera tener y con las
            cuales tuviera acceso a ciertos Servicios y Contenidos del Portal.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            11. CLAVES DE ACCESO.
          </Typography>

          <Typography sx={{ mt: 2, fontWeight: 700 }}>
            En todo momento, el Usuario es el responsable único y final de
            mantener en secreto las claves de acceso que pudiera tener y con las
            cuales tuviera acceso a ciertos Servicios y C ontenidos del P ortal.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            12. LEYES APLICABLES Y JURISDICCIÓN.
          </Typography>

          <Typography sx={{ mt: 2, fontWeight: 500 }}>
            La Empresa tendrá el derecho de modificar, en cualquier momento, los
            Términos y Condiciones, sin previo aviso y/o consentimiento del
            Usuario. En consecuencia, el Usuario debe leer atentamente los
            Términos y Condiciones cada vez que pretenda utilizar el Portal.
            Ciertos Servicios y Contenidos ofrecidos a los Usuarios en y/o a
            través del Portal están sujetos a condiciones particulares p r o p i
            a s q u e s u s t i t u y e n , c o m p l e t a n y / o m o d i f i
            c a n l o s p r e s e n t e s Té r m i n o s y C o n d i c i o n e s
            . C onsiguientemente, el U suario también debe leer atentamente las
            correspondientes condiciones particulares antes de acceder a
            cualquiera de los Servicios y Contenidos.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            13. LEYES APLICABLES Y JURISDICCIÓN.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Para la interpretación, cumplimiento y ejecución de los presentes
            Términos y Condiciones, el Usuario está de acuerdo en que serán
            aplicables las leyes Federales de los Estados Unidos Mexicanos y
            competentes los tribunales de San Pedro Mixtepec -Dto. 22 - Oaxaca,
            renunciando expresamente a cualquier otro fuero o jurisdicción que
            pudiera corresponderles debido a sus domicilios presentes o futuros
            o por cualquier otra causa.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            2. CONTACTO.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            El Usuario puede contactar, en todo momento, al personal de la
            Empresa para cualquier aclaración, comentario, duda y/o sugerencia
            relacionada con los Servicios y Contenidos, con el P ortal y/o con
            los presentes Términos y C ondiciones en
            Inmobiliariapuertoescondido@ gmail.com.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
            3. PROMOCIONES.
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
