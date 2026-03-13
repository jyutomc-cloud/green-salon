import { Leaf, Heart, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold-dark font-body tracking-[0.3em] uppercase text-sm mb-4">
          Tentang Kami
        </p>
        <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
          Ruang Eksklusif untuk Kecantikan Anda
        </h2>
        <div className="divider-gold w-16 mx-auto mb-10" />
        <p className="text-muted-foreground font-body text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
          Green Salon hadir sebagai ruang privat khusus wanita, di mana Anda bisa merasakan ketenangan dan kenyamanan
          dalam setiap sesi perawatan. Kami menggunakan produk-produk berkualitas premium untuk memastikan hasil terbaik
          bagi rambut dan kulit Anda, dalam suasana yang menenangkan dan penuh kehangatan.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Privasi Terjaga", desc: "Ruang khusus wanita yang aman dan nyaman untuk setiap perawatan Anda." },
            { icon: Leaf, title: "Produk Premium", desc: "Menggunakan produk berkualitas tinggi demi hasil perawatan terbaik." },
            { icon: Heart, title: "Pelayanan Personal", desc: "Setiap klien mendapat perhatian penuh dari tim profesional kami." },
          ].map((item, i) => (
            <div key={i} className="bg-card p-8 rounded-sm border border-border hover:border-gold/30 transition-colors duration-300">
              <div className="w-14 h-14 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-emerald" />
              </div>
              <h3 className="text-lg font-heading text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
