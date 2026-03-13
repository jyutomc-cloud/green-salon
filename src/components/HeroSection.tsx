import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior Green Salon yang elegan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-6 opacity-0 animate-fade-in-up">
          Khusus Wanita
        </p>
        <h1 className="text-5xl md:text-7xl font-heading text-primary-foreground mb-6 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Green Salon
        </h1>
        <div className="divider-gold w-24 mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }} />
        <p className="text-xl md:text-2xl font-heading italic text-primary-foreground/90 mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Kemewahan dan Relaksasi Pribadi, Khusus Untuk Anda.
        </p>
        <p className="text-base md:text-lg font-body text-primary-foreground/70 mb-10 max-w-xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          Nikmati perawatan rambut dan wajah premium di ruang yang eksklusif dan menenangkan.
        </p>
        <a
          href="https://wa.me/6289698617455"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold-gradient text-foreground font-body font-bold tracking-wider uppercase text-sm px-10 py-4 rounded-sm shadow-gold hover:scale-105 transition-transform duration-300 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Reservasi Sekarang
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
