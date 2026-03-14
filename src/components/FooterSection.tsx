import { MapPin, Clock, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="kontak" className="bg-emerald-gradient text-primary-foreground">
      {/* Map */}
      <div className="w-full h-72 md:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5!2d110.4239878!3d-7.6680826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5f64a1e9be5b%3A0xf782278c51043b6a!2sSusiSalon!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Green Salon"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-body tracking-[0.4em] uppercase text-xs mb-6">
            Kontak
          </span>
          <h2 className="text-4xl md:text-5xl font-heading mb-8">Hubungi Kami</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-10 bg-gold/40" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center mb-16">
          <div className="group">
            <div className="w-14 h-14 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-300">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading text-lg mb-3">Lokasi</h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Lihat lokasi kami di Google Maps
            </p>
          </div>
          <div className="group">
            <div className="w-14 h-14 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-300">
              <Clock className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading text-lg mb-3">Jam Buka</h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Senin – Minggu<br />
              (Hubungi untuk info lebih lanjut)
            </p>
          </div>
          <div className="group">
            <div className="w-14 h-14 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-300">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading text-lg mb-3">Telepon</h3>
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

        <div className="text-center border-t border-primary-foreground/10 pt-10">
          <p className="font-heading text-lg text-primary-foreground/80 mb-2">Green Salon</p>
          <p className="font-body text-xs text-primary-foreground/40 tracking-wider">
            © 2026 Green Salon — Khusus Wanita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
