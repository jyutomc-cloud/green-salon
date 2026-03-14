import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior Green Salon yang elegan"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Decorative frame */}
      <div className="absolute inset-8 md:inset-16 border border-gold/20 rounded-sm pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-3xl mx-auto">
        <div className="mb-8 opacity-0 animate-fade-in-up">
          <span className="inline-block text-gold font-body tracking-[0.5em] uppercase text-xs border border-gold/30 px-6 py-2">
            Khusus Wanita
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-heading text-primary-foreground mb-4 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Green
        </h1>
        <h1 className="text-4xl md:text-5xl font-heading italic text-gold mb-8 leading-none opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Salon
        </h1>

        <div className="flex items-center justify-center gap-4 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="h-px w-12 bg-gold/50" />
          <div className="w-2 h-2 rotate-45 border border-gold/60" />
          <div className="h-px w-12 bg-gold/50" />
        </div>

        <p className="text-lg md:text-xl font-heading italic text-primary-foreground/85 mb-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          Kemewahan dan Relaksasi Pribadi,
        </p>
        <p className="text-lg md:text-xl font-heading italic text-primary-foreground/85 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
          Khusus Untuk Anda.
        </p>

        <p className="text-sm md:text-base font-body text-primary-foreground/60 mb-12 max-w-md mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          Nikmati perawatan rambut dan wajah premium di ruang yang eksklusif dan menenangkan.
        </p>

        <a
          href="https://wa.me/6289698617455"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold-gradient text-foreground font-body font-bold tracking-[0.2em] uppercase text-xs px-12 py-4 rounded-none shadow-gold hover:scale-105 transition-transform duration-300 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          Reservasi Sekarang
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-foreground/40 font-body text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
