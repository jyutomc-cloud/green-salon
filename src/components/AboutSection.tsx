import { Leaf, Heart, Shield } from "lucide-react";

const features = [
  { icon: Shield, title: "Privasi Terjaga", desc: "Ruang khusus wanita yang aman dan nyaman untuk setiap perawatan Anda." },
  { icon: Leaf, title: "Produk Premium", desc: "Menggunakan produk berkualitas tinggi demi hasil perawatan terbaik." },
  { icon: Heart, title: "Pelayanan Personal", desc: "Setiap klien mendapat perhatian penuh dari tim profesional kami." },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-28 md:py-36 px-6 bg-background relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block text-gold-dark font-body tracking-[0.4em] uppercase text-xs mb-6">
            Tentang Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-8 leading-tight">
            Ruang Eksklusif untuk<br />
            <span className="italic text-emerald">Kecantikan Anda</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-10 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-10 bg-gold/40" />
          </div>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-[1.9] max-w-2xl mx-auto">
            Green Salon hadir sebagai ruang privat khusus wanita, di mana Anda bisa merasakan ketenangan dan kenyamanan
            dalam setiap sesi perawatan. Kami menggunakan produk-produk berkualitas premium untuk memastikan hasil terbaik
            bagi rambut dan kulit Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="group text-center p-10 rounded-sm bg-card border border-border hover:border-gold/40 hover:shadow-[0_8px_30px_-12px_hsl(var(--gold)/0.15)] transition-all duration-500"
            >
              <div className="w-16 h-16 bg-emerald/8 border border-emerald/15 rounded-full flex items-center justify-center mx-auto mb-7 group-hover:bg-emerald/12 group-hover:scale-110 transition-all duration-500">
                <item.icon className="w-6 h-6 text-emerald" />
              </div>
              <h3 className="text-lg font-heading text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
