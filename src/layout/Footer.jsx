import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  MapPin,
  FileText,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-(--color-primary) text-white px-6 py-10">
      <div className=" container mx-auto flex justify-between items-center">
        <div>
          <h4 className="font-semibold mb-4">Social</h4>
          <div className="flex gap-4 opacity-80">
            <Instagram size={22} />
            <Facebook size={22} />
            <Youtube size={22} />
            <Twitter size={22} />
          </div>
          <p className="text-xs mt-2 opacity-60">
            Profili social in fase di attivazione
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Sede legale</h4>
          <p className="flex items-start gap-2 text-sm opacity-80">
            <MapPin size={18} className="mt-0.5" />
            Via Esempio 12, 10100 Torino (TO)
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Dati legali</h4>
          <p className="flex items-center gap-2 text-sm opacity-80">
            <FileText size={18} />
            P. IVA 01234567890
          </p>
        </div>
      </div>

      <div className="text-center text-xs mt-8 opacity-60">
        © {new Date().getFullYear()} ASD Piemonte Calcio – Tutti i diritti
        riservati
      </div>
    </footer>
  );
};

export default Footer;
