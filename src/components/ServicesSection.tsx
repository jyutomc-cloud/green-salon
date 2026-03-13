import { Scissors, Sparkles } from "lucide-react";

const services = [
  { name: "Potong Rambut", price: "Rp 25.000" },
  { name: "Cuci, Potong, Blow", price: "Rp 40.000" },
  { name: "Cuci Blow", price: "Rp 20.000" },
  { name: "Cat Rambut", price: "Mulai Rp 90.000" },
  { name: "Creambath", price: "Rp 70.000" },
  { name: "Keratin Treatment", price: "Mulai Rp 90.000" },
  { name: "Cuci & Catok", price: "Rp 40.000" },
  { name: "Highlight", price: "Mulai Rp 90.000" },
  { name: "Serum Rambut", price: "Rp 50.000" },
  { name: "Smoothing", price: "Rp 180.000 – Rp 200.000" },
  { name: "Rebonding", price: "Mulai Rp 170.000" },
  { name: "Hair Mask", price: "Rp 45.000" },
  { name: "Rias Wajah (Makeup)", price: "Rp 165.000" },
  { name: "Facial", price: "Rp 50.000" },
  { name: "Hair Spa", price: "Rp 50.000" },
  { name: "Keriting", price: "Rp 90.000" },
  { name: "Totok Wajah", price: "Rp 35.000" },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-dark font-body tracking-[0.3em] uppercase text-sm mb-4">
            Layanan Kami
          </p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
            Menu Perawatan & Harga
          </h2>
          <div className="divider-gold w-16 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-5 border-b border-border group"
            >
              <div className="flex items-center gap-3">
                {i % 2 === 0 ? (
                  <Scissors className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <Sparkles className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
                <span className="font-body text-foreground group-hover:text-emerald transition-colors">
                  {service.name}
                </span>
              </div>
              <span className="font-body text-sm text-gold-dark font-bold whitespace-nowrap ml-4">
                {service.price}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/6289698617455"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-gradient text-primary-foreground font-body font-bold tracking-wider uppercase text-sm px-10 py-4 rounded-sm hover:scale-105 transition-transform duration-300"
          >
            Reservasi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
