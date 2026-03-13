import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#tentang", label: "Tentang" },
    { href: "#layanan", label: "Layanan" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className={`font-heading text-xl transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          Green Salon
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-sm tracking-wider uppercase transition-colors ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6289698617455"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient text-foreground font-body font-bold text-xs tracking-wider uppercase px-6 py-2.5 rounded-sm shadow-gold hover:scale-105 transition-transform"
          >
            Reservasi
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6289698617455"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gold-gradient text-foreground font-body font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-sm"
          >
            Reservasi
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
