import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: gallery1, alt: "Hasil smoothing rambut", label: "Smoothing" },
  { src: gallery2, alt: "Hasil keriting rambut", label: "Keriting" },
  { src: gallery3, alt: "Perawatan creambath", label: "Creambath" },
  { src: gallery4, alt: "Hasil highlight rambut", label: "Highlight" },
  { src: gallery5, alt: "Rias wajah pengantin", label: "Rias Wajah" },
  { src: gallery6, alt: "Hair spa treatment", label: "Hair Spa" },
];

const GallerySection = () => {
  return (
    <section id="galeri" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-dark font-body tracking-[0.3em] uppercase text-sm mb-4">
            Portofolio
          </p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
            Hasil Perawatan Kami
          </h2>
          <div className="divider-gold w-16 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-sm ${
                i === 0 || i === 5 ? "row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <span className="font-heading text-primary-foreground text-lg">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
