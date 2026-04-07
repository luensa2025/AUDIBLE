import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
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
          Términos y Condiciones de Servicio
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Última actualización: 7 de abril de 2026
        </p>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 [&_h2]:text-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1">

          <p>
            Los presentes términos y condiciones regulan el uso del sitio web y los servicios
            ofrecidos por <strong>AUDIOCARE S.A.S.</strong>, centro de audiología con domicilio en
            Santiago de Cali, Valle del Cauca, Colombia. Al acceder al sitio web o solicitar
            nuestros servicios, usted acepta estos términos en su totalidad.
          </p>

          <h2>1. Identificación del Prestador</h2>
          <ul>
            <li><strong>Razón social:</strong> AudioCare S.A.S.</li>
            <li><strong>Domicilio:</strong> BeOne Medical Work, Calle 15A #101-51, Ciudad Jardín, Cali, Valle del Cauca</li>
            <li><strong>Teléfono:</strong> (+57) 311 408 3525</li>
            <li><strong>Correo:</strong> citas@audiocare.co</li>
            <li><strong>Habilitación:</strong> Centro habilitado por la Secretaría de Salud Municipal de Santiago de Cali</li>
          </ul>

          <h2>2. Servicios Ofrecidos</h2>
          <p>AUDIOCARE presta los siguientes servicios de audiología:</p>
          <ol>
            <li><strong>Tamizaje Auditivo Neonatal:</strong> Otoemisiones Acústicas (OEA) y Potenciales Evocados Auditivos Automatizados (PEAA), incluyendo servicio a domicilio.</li>
            <li><strong>Evaluación Auditiva Integral:</strong> Audiometría tonal, logoaudiometría, impedanciometría y emisiones otoacústicas.</li>
            <li><strong>Adaptación de Audífonos e Insumos:</strong> Selección, adaptación, ajustes técnicos y venta de insumos (pilas, kits de limpieza, accesorios de conectividad). Aliados de las marcas Widex y Oticon.</li>
            <li><strong>Tratamiento del Vértigo:</strong> Evaluación y manejo de trastornos del equilibrio.</li>
            <li><strong>Fonoaudiología:</strong> Terapia del lenguaje, habla y comunicación.</li>
            <li><strong>Audiología Ocupacional:</strong> Programas de vigilancia epidemiológica auditiva y audiometrías ocupacionales.</li>
          </ol>

          <h2>3. Agendamiento de Citas</h2>
          <ul>
            <li>Las citas pueden agendarse a través del formulario web, WhatsApp al (+57) 311 408 3525 o correo electrónico citas@audiocare.co.</li>
            <li>La solicitud de cita no constituye confirmación. AUDIOCARE se comunicará con el paciente para confirmar fecha, hora y profesional asignado.</li>
            <li>El paciente debe proporcionar información veraz y completa al momento de agendar.</li>
          </ul>

          <h2>4. Cancelación y Reprogramación</h2>
          <ul>
            <li>El paciente podrá cancelar o reprogramar su cita con un mínimo de <strong>24 horas de anticipación</strong> sin costo alguno.</li>
            <li>Las cancelaciones con menos de 24 horas o la inasistencia sin aviso previo podrán generar restricciones para futuras programaciones.</li>
            <li>AUDIOCARE se reserva el derecho de reprogramar citas por razones de fuerza mayor, caso en el cual se notificará al paciente con la mayor antelación posible.</li>
          </ul>

          <h2>5. Obligaciones del Paciente</h2>
          <ol>
            <li>Asistir puntualmente a la cita programada.</li>
            <li>Proporcionar información veraz sobre su estado de salud e historial médico.</li>
            <li>Informar sobre alergias, medicamentos en uso y condiciones médicas relevantes.</li>
            <li>Seguir las indicaciones y recomendaciones del profesional tratante.</li>
            <li>Realizar los pagos correspondientes en los plazos establecidos.</li>
            <li>Tratar con respeto al personal de AUDIOCARE.</li>
          </ol>

          <h2>6. Obligaciones de AUDIOCARE</h2>
          <ol>
            <li>Prestar servicios de audiología con profesionales idóneos, con RETHUS activo y registro de habilitación vigente.</li>
            <li>Utilizar equipos calibrados y certificados de última tecnología.</li>
            <li>Elaborar y custodiar la historia clínica conforme a la Resolución 1995 de 1999.</li>
            <li>Informar al paciente sobre su diagnóstico, opciones de tratamiento, procedimientos, riesgos y costos.</li>
            <li>Respetar la confidencialidad de la información del paciente.</li>
            <li>Emitir factura o comprobante de pago por los servicios prestados.</li>
          </ol>

          <h2>7. Tarifas y Formas de Pago</h2>
          <ul>
            <li>Las tarifas de los servicios serán informadas al paciente previo a la prestación del servicio.</li>
            <li>Se aceptan pagos en efectivo, transferencia bancaria y medios electrónicos.</li>
            <li>Para servicios cubiertos por aseguradora, EPS o ARL, el paciente deberá presentar la documentación requerida y asumir las copias o cuotas moderadoras que apliquen.</li>
            <li>Los audífonos e insumos tienen precios variables según marca, modelo y especificaciones. Se informará el precio antes de cualquier venta.</li>
          </ul>

          <h2>8. Garantías sobre Audífonos</h2>
          <ul>
            <li>Los audífonos adquiridos a través de AUDIOCARE cuentan con la garantía del fabricante (Widex u Oticon), cuyo plazo y condiciones serán informados al momento de la compra.</li>
            <li>La garantía no cubre daños por mal uso, caídas, exposición a humedad excesiva o manipulación indebida.</li>
            <li>AUDIOCARE ofrece ajustes técnicos y seguimiento post-adaptación incluidos durante el período de garantía.</li>
          </ul>

          <h2>9. Servicio a Domicilio</h2>
          <ul>
            <li>AUDIOCARE ofrece servicios de tamizaje auditivo neonatal y evaluación auditiva a domicilio en la ciudad de Cali y área metropolitana.</li>
            <li>El servicio a domicilio puede tener un costo adicional que será informado al momento del agendamiento.</li>
            <li>El paciente deberá garantizar un espacio adecuado y silencioso para la realización de las pruebas.</li>
          </ul>

          <h2>10. Consentimiento Informado</h2>
          <p>
            Antes de cualquier procedimiento audiológico, AUDIOCARE solicitará al paciente
            (o a su representante legal en caso de menores de edad) la firma del consentimiento
            informado correspondiente, en el cual se explicarán los procedimientos, beneficios,
            riesgos y alternativas.
          </p>

          <h2>11. Propiedad Intelectual</h2>
          <p>
            Todo el contenido del sitio web de AUDIOCARE — incluyendo textos, imágenes, logotipos,
            diseño y estructura — es propiedad de AUDIOCARE S.A.S. o de sus respectivos titulares
            y está protegido por las leyes de propiedad intelectual colombianas (Ley 23 de 1982,
            Decisión Andina 351). Queda prohibida su reproducción, distribución o uso sin
            autorización expresa.
          </p>

          <h2>12. Limitación de Responsabilidad</h2>
          <ul>
            <li>AUDIOCARE no garantiza resultados específicos de los tratamientos audiológicos, los cuales dependen de las condiciones individuales de cada paciente.</li>
            <li>La información publicada en el sitio web tiene carácter informativo y no sustituye la consulta profesional presencial.</li>
            <li>AUDIOCARE no será responsable por interrupciones del sitio web debidas a mantenimiento, fallas técnicas o causas de fuerza mayor.</li>
          </ul>

          <h2>13. Resolución de Controversias</h2>
          <p>
            Cualquier controversia derivada de estos términos será resuelta inicialmente mediante
            comunicación directa entre las partes. De no llegar a un acuerdo, las partes podrán
            acudir a los mecanismos alternativos de resolución de conflictos previstos en la
            legislación colombiana. En última instancia, serán competentes los jueces y tribunales
            de Santiago de Cali, Colombia.
          </p>

          <h2>14. Legislación Aplicable</h2>
          <p>
            Estos términos se rigen por la legislación de la República de Colombia, en particular:
          </p>
          <ul>
            <li>Ley 1581 de 2012 — Protección de datos personales</li>
            <li>Ley 1480 de 2011 — Estatuto del consumidor</li>
            <li>Ley 1438 de 2011 — Sistema General de Seguridad Social en Salud</li>
            <li>Resolución 1995 de 1999 — Historias clínicas</li>
            <li>Ley 376 de 1997 — Reglamentación de la profesión de Fonoaudiología</li>
          </ul>

          <h2>15. Modificaciones</h2>
          <p>
            AUDIOCARE se reserva el derecho de modificar estos términos en cualquier momento.
            Las modificaciones entrarán en vigencia desde su publicación en el sitio web.
            Se recomienda consultar periódicamente esta página.
          </p>

          <h2>16. Contacto</h2>
          <p>
            Para cualquier consulta sobre estos términos, puede comunicarse con nosotros:
          </p>
          <ul>
            <li><strong>WhatsApp:</strong> (+57) 311 408 3525</li>
            <li><strong>Correo:</strong> citas@audiocare.co</li>
            <li><strong>Dirección:</strong> BeOne Medical Work, Calle 15A #101-51, Ciudad Jardín, Cali</li>
          </ul>

        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
