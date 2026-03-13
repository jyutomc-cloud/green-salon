import { MapPin, Clock, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="kontak" className="bg-emerald-gradient text-primary-foreground">
      {/* Map */}
      <div className="w-full h-64 md:h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5!2d110.4239878!3d-7.6680826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5f64a1e9be5b%3A0xf782278c51043b6a!2sSusiSalon!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Green Salon"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Hubungi Kami</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <MapPin className="w-6 h-6 text-gold mx-auto mb-3" />
            <h3 className="font-heading text-lg mb-2">Lokasi</h3>
            <p className="text-primary-foreground/70 font-body text-sm">
              Lihat lokasi kami di Google Maps
            </p>
          </div>
          <div>
            <Clock className="w-6 h-6 text-gold mx-auto mb-3" />
            <h3 className="font-heading text-lg mb-2">Jam Buka</h3>
            <p className="text-primary-foreground/70 font-body text-sm">
              Senin – Minggu<br />
              (Hubungi untuk info lebih lanjut)
            </p>
          </div>
          <div>
            <Phone className="w-6 h-6 text-gold mx-auto mb-3" />
            <h3 className="font-heading text-lg mb-2">Telepon</h3>
            <a
              href="https://wa.me/6289698617455"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light font-body text-sm transition-colors"
            >
              +62 896-9861-7455
            </a>
          </div>
        </div>

        <div className="text-center border-t border-primary-foreground/20 pt-8">
          <p className="font-body text-sm text-primary-foreground/50">
            © 2026 Green Salon — Khusus Wanita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
