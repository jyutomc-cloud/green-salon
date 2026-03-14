import { Scissors, Sparkles } from "lucide-react";

const servicesLeft = [
  { name: "Potong Rambut", price: "Rp 25.000" },
  { name: "Cuci, Potong, Blow", price: "Rp 40.000" },
  { name: "Cuci Blow", price: "Rp 20.000" },
  { name: "Cat Rambut", price: "Mulai Rp 90.000" },
  { name: "Creambath", price: "Rp 70.000" },
  { name: "Keratin Treatment", price: "Mulai Rp 90.000" },
  { name: "Cuci & Catok", price: "Rp 40.000" },
  { name: "Highlight", price: "Mulai Rp 90.000" },
  { name: "Serum Rambut", price: "Rp 50.000" },
];

const servicesRight = [
  { name: "Smoothing", price: "Rp 180.000 – Rp 200.000" },
  { name: "Rebonding", price: "Mulai Rp 170.000" },
  { name: "Hair Mask", price: "Rp 45.000" },
  { name: "Rias Wajah (Makeup)", price: "Rp 165.000" },
  { name: "Facial", price: "Rp 50.000" },
  { name: "Hair Spa", price: "Rp 50.000" },
  { name: "Keriting", price: "Rp 90.000" },
  { name: "Totok Wajah", price: "Rp 35.000" },
];

const ServiceItem = ({ name, price, index }: { name: string; price: string; index: number }) => (
  <div className="flex items-center gap-4 py-5 border-b border-border/60 group hover:border-gold/30 transition-colors duration-300">
    <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
      {index % 2 === 0 ? (
        <Scissors className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold transition-colors" />
      ) : (
        <Sparkles className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold transition-colors" />
      )}
    </div>
    <span className="font-body text-foreground flex-1 group-hover:text-emerald transition-colors duration-300">
      {name}
    </span>
    <span className="font-body text-sm text-gold-dark font-bold whitespace-nowrap tracking-wide">
      {price}
    </span>
  </div>
);

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-28 md:py-36 px-6 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block text-gold-dark font-body tracking-[0.4em] uppercase text-xs mb-6">
            Layanan Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-8 leading-tight">
            Menu Perawatan<br />
            <span className="italic text-emerald">& Harga</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-10 bg-gold/40" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          <div>
            {servicesLeft.map((service, i) => (
              <ServiceItem key={i} name={service.name} price={service.price} index={i} />
            ))}
          </div>
          <div>
            {servicesRight.map((service, i) => (
              <ServiceItem key={i} name={service.name} price={service.price} index={i} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="https://wa.me/6289698617455"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-gradient text-primary-foreground font-body font-bold tracking-[0.2em] uppercase text-xs px-12 py-4 rounded-none hover:scale-105 transition-transform duration-300 shadow-[0_4px_20px_-6px_hsl(var(--emerald)/0.4)]"
          >
            Reservasi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
