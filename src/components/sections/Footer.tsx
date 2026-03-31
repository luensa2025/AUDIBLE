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
            <p>Cali, Valle del Cauca, Colombia</p>
            <p>contacto@audiocare.com.co</p>
            <p>Tel: (+57) 300 000 0000</p>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-8 pt-8 text-center text-xs text-cream/40">
          <p>© {new Date().getFullYear()} AudioCare S.A.S. Todos los derechos reservados.</p>
          <p className="mt-1">Centro de Audiología habilitado por la Secretaría de Salud Municipal de Cali.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
