import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anisa R.",
    service: "Smoothing",
    text: "Hasilnya luar biasa halus dan tahan lama! Suasananya sangat nyaman karena khusus wanita, jadi saya merasa lebih rileks.",
    rating: 5,
  },
  {
    name: "Dewi S.",
    service: "Rias Wajah",
    text: "Makeup untuk acara lamaran saya sempurna! Tim Green Salon sangat detail dan hasilnya persis seperti yang saya inginkan.",
    rating: 5,
  },
  {
    name: "Fitri M.",
    service: "Creambath & Hair Spa",
    text: "Perawatan rambut di sini benar-benar premium. Rambut saya jadi lebih sehat dan berkilau. Pasti akan kembali lagi!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-dark font-body tracking-[0.3em] uppercase text-sm mb-4">
            Testimoni
          </p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
            Apa Kata Pelanggan Kami
          </h2>
          <div className="divider-gold w-16 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-background p-8 rounded-sm border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg relative"
            >
              {/* Gold accent top */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gold-gradient" />

              {/* Stars */}
              <div className="flex gap-1 mb-5 mt-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-heading text-foreground">{t.name}</p>
                <p className="font-body text-sm text-gold-dark">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
