import { Star, Quote } from "lucide-react";

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
    <section className="py-28 md:py-36 px-6 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald/3 rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block text-gold-dark font-body tracking-[0.4em] uppercase text-xs mb-6">
            Testimoni
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-8 leading-tight">
            Apa Kata<br />
            <span className="italic text-emerald">Pelanggan Kami</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-10 bg-gold/40" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card p-10 rounded-sm border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-[0_12px_40px_-12px_hsl(var(--gold)/0.12)] relative group"
            >
              {/* Gold line top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/20 mb-6 group-hover:text-gold/40 transition-colors duration-500" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>

              <p className="font-body text-muted-foreground leading-[1.9] mb-8 text-sm">
                "{t.text}"
              </p>

              <div className="border-t border-border pt-5">
                <p className="font-heading text-foreground text-base">{t.name}</p>
                <p className="font-body text-xs text-gold-dark tracking-wider uppercase mt-1">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
