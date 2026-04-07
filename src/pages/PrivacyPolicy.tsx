import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-3xl px-4 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="text-3xl md:text-4xl font-display text-foreground mb-2">
          Política de Privacidad y Tratamiento de Datos Personales
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Última actualización: 7 de abril de 2026
        </p>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 [&_h2]:text-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1">

          <p>
            <strong>AUDIOCARE S.A.S.</strong>, identificada con NIT en trámite, con domicilio en
            la ciudad de Santiago de Cali, Valle del Cauca, Colombia, en cumplimiento de la
            Ley 1581 de 2012 (Ley de Protección de Datos Personales), el Decreto 1377 de 2013
            y demás normas concordantes, informa a los titulares sobre la política de tratamiento
            de datos personales que será aplicada a toda la información personal recopilada y
            tratada por la organización.
          </p>

          <h2>1. Responsable del Tratamiento</h2>
          <ul>
            <li><strong>Razón social:</strong> AudioCare S.A.S.</li>
            <li><strong>Dirección:</strong> BeOne Medical Work, Calle 15A #101-51, Ciudad Jardín, Cali, Valle del Cauca</li>
            <li><strong>Teléfono:</strong> (+57) 311 408 3525</li>
            <li><strong>Correo electrónico:</strong> citas@audiocare.co</li>
            <li><strong>Sitio web:</strong> audiocare.co</li>
          </ul>

          <h2>2. Datos Personales Recopilados</h2>
          <p>AUDIOCARE podrá recopilar los siguientes datos personales:</p>
          <ul>
            <li>Nombre completo</li>
            <li>Número de identificación (cédula, tarjeta de identidad, pasaporte)</li>
            <li>Número de teléfono y/o celular</li>
            <li>Correo electrónico</li>
            <li>Dirección de residencia</li>
            <li>Fecha de nacimiento</li>
            <li>Datos de salud auditiva (historia clínica, resultados de exámenes, diagnósticos)</li>
            <li>Información de aseguradora, EPS o ARL</li>
            <li>Datos de facturación y medios de pago</li>
          </ul>

          <h2>3. Datos Sensibles</h2>
          <p>
            Dada la naturaleza de los servicios de salud que presta AUDIOCARE, se podrán recopilar
            <strong> datos sensibles</strong> relacionados con el estado de salud auditiva de los
            pacientes. El tratamiento de estos datos se realizará exclusivamente con finalidades
            de atención médica, diagnóstico, tratamiento y seguimiento audiológico, conforme a
            la Ley 1581 de 2012 (artículo 6) y la Resolución 1995 de 1999 sobre historias clínicas.
            El titular no está obligado a autorizar el tratamiento de datos sensibles.
          </p>

          <h2>4. Finalidades del Tratamiento</h2>
          <p>Los datos personales serán utilizados para:</p>
          <ol>
            <li>Agendar, confirmar y gestionar citas audiológicas</li>
            <li>Elaborar y actualizar la historia clínica del paciente</li>
            <li>Realizar diagnósticos, tratamientos y seguimientos audiológicos</li>
            <li>Contactar al titular para informar sobre resultados, controles y recomendaciones</li>
            <li>Enviar información sobre servicios, promociones y novedades de AUDIOCARE (previo consentimiento)</li>
            <li>Cumplir con obligaciones legales y regulatorias del sector salud</li>
            <li>Reportar información a entidades de salud cuando la ley lo exija</li>
            <li>Gestionar facturación, cobros y procesos administrativos</li>
            <li>Atender peticiones, quejas, reclamos y sugerencias (PQRS)</li>
            <li>Mejorar la calidad de los servicios prestados</li>
          </ol>

          <h2>5. Derechos de los Titulares</h2>
          <p>De conformidad con la Ley 1581 de 2012, los titulares de datos personales tienen derecho a:</p>
          <ul>
            <li>Conocer, actualizar y rectificar sus datos personales</li>
            <li>Solicitar prueba de la autorización otorgada</li>
            <li>Ser informado sobre el uso dado a sus datos personales</li>
            <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC)</li>
            <li>Revocar la autorización y/o solicitar la supresión de datos, cuando no exista un deber legal o contractual que lo impida</li>
            <li>Acceder de forma gratuita a sus datos personales tratados</li>
          </ul>

          <h2>6. Mecanismos para Ejercer los Derechos</h2>
          <p>
            Los titulares podrán ejercer sus derechos mediante comunicación escrita dirigida a
            AUDIOCARE a través de:
          </p>
          <ul>
            <li><strong>Correo electrónico:</strong> citas@audiocare.co</li>
            <li><strong>WhatsApp:</strong> (+57) 311 408 3525</li>
            <li><strong>Presencialmente:</strong> BeOne Medical Work, Calle 15A #101-51, Ciudad Jardín, Cali</li>
          </ul>
          <p>
            Las solicitudes serán atendidas en un plazo máximo de quince (15) días hábiles
            contados a partir de la fecha de recepción.
          </p>

          <h2>7. Autorización</h2>
          <p>
            AUDIOCARE solicitará autorización previa, expresa e informada a los titulares para
            el tratamiento de sus datos personales. Dicha autorización podrá ser obtenida por
            cualquier medio que pueda ser consultado posteriormente: formulario web, mensaje
            de WhatsApp, documento físico o correo electrónico.
          </p>

          <h2>8. Seguridad de la Información</h2>
          <p>
            AUDIOCARE implementa medidas técnicas, humanas y administrativas razonables para
            proteger los datos personales contra acceso no autorizado, pérdida, alteración o
            destrucción. Los datos de salud son almacenados con controles de acceso restringido
            conforme a la normatividad de historias clínicas.
          </p>

          <h2>9. Transferencia y Transmisión de Datos</h2>
          <p>
            AUDIOCARE podrá transferir o transmitir datos personales a terceros únicamente cuando:
          </p>
          <ul>
            <li>Sea necesario para la prestación del servicio de salud (laboratorios, especialistas referentes)</li>
            <li>Lo exija una autoridad competente en ejercicio de sus funciones legales</li>
            <li>Exista autorización previa del titular</li>
            <li>Se requiera para cumplir obligaciones contractuales (aseguradoras, EPS, ARL)</li>
          </ul>

          <h2>10. Cookies y Tecnologías Web</h2>
          <p>
            El sitio web de AUDIOCARE puede utilizar cookies y tecnologías similares para mejorar
            la experiencia del usuario. Las cookies no recopilan datos personales identificables
            sin consentimiento del usuario. El usuario puede configurar su navegador para rechazar
            cookies, aunque algunas funcionalidades del sitio podrían verse afectadas.
          </p>

          <h2>11. Vigencia</h2>
          <p>
            La presente política entra en vigencia a partir del 7 de abril de 2026 y permanecerá
            vigente mientras AUDIOCARE S.A.S. realice tratamiento de datos personales. Los datos
            personales serán conservados durante el tiempo necesario para cumplir con las
            finalidades descritas y conforme a los plazos legales aplicables (mínimo 15 años
            para historias clínicas, según Resolución 1995 de 1999).
          </p>

          <h2>12. Modificaciones</h2>
          <p>
            AUDIOCARE se reserva el derecho de modificar esta política en cualquier momento.
            Las modificaciones serán comunicadas a los titulares a través del sitio web y/o
            correo electrónico.
          </p>

        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
