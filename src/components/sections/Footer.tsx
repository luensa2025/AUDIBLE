import { Link } from "react-router-dom";

interface FooterProps {
  logo: string;
}

const Footer = ({ logo }: FooterProps) => {
  return (
    <footer className="bg-deep text-cream/60 py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="AudioCare" className="w-12 h-12 rounded-lg" />
            <div>
              <p className="text-cream font-display text-lg">AudioCare S.A.S.</p>
              <p className="text-sm">NIT: 901.XXX.XXX-X</p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1 text-sm">
            <p>BeOne Medical Work. Calle 15A 101-51, Ciudad Jardín</p>
            <p>Cali, Valle del Cauca, Colombia</p>
            <p>Tel: (+57) 311 408 3525</p>
            <p>
              <a href="mailto:citas@audiocare.co" className="hover:text-cream transition-colors">
                citas@audiocare.co
              </a>
            </p>
            <p>
              <a href="https://instagram.com/audiocare0" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
                @audiocare0
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-8 pt-8 text-center text-xs text-cream/40 space-y-2">
          <div className="flex justify-center gap-4">
            <Link to="/politica-privacidad" className="hover:text-cream transition-colors underline">
              Política de Privacidad
            </Link>
            <span>·</span>
            <Link to="/terminos" className="hover:text-cream transition-colors underline">
              Términos y Condiciones
            </Link>
          </div>
          <p>© {new Date().getFullYear()} AudioCare S.A.S. Todos los derechos reservados.</p>
          <p>Centro de Audiología habilitado por la Secretaría de Salud Municipal de Cali.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
