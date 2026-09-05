import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/971561677408?text=${encodeURIComponent(
  "Hi Ecomtik — I'd like to discuss growing my business."
)}`;

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Ecomtik on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-10px_rgba(37,211,102,0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-10px_rgba(37,211,102,0.75)] sm:right-7 sm:bottom-7"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
    </a>
  );
}
