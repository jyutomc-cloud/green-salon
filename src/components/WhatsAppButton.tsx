import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6289698617455"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
      aria-label="Hubungi Admin via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 text-sm font-body font-bold whitespace-nowrap">
        Hubungi Admin
      </span>
    </a>
  );
};

export default WhatsAppButton;
