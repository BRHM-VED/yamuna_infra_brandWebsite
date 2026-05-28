function toWhatsAppDigits(phone: string) {
  return phone.replace(/[^\d]/g, '');
}

export default function WhatsAppFloatingButton() {
  // WhatsApp-only number (do not reuse other site contact numbers)
  const phone = toWhatsAppDigits('+91 76174 24344');
  const href = `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-9999 grid size-[56px] place-items-center rounded-full shadow-xl hover:opacity-95 active:scale-[0.98] transition"
      style={{ backgroundColor: '#25D366' }}
    >
      {/* WhatsApp icon (inline SVG) */}
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 3C8.8203 3 3 8.5969 3 15.5C3 18.2505 3.97646 20.7896 5.60783 22.8056L4.5 29L10.9556 27.0648C12.781 27.9935 14.8628 28.5 17.0625 28.5C24.2419 28.5 30.0625 22.9031 30.0625 16C30.0625 9.0969 24.2419 3 17.0625 3H16Z"
          fill="white"
          fillOpacity="0.18"
        />
        <path
          d="M16.8 8.6c-3.6 0-6.5 2.7-6.5 6 0 1.1.3 2.1.9 3l-.6 2.9 3.1-1c.9.5 1.9.8 3 .8 3.6 0 6.5-2.7 6.5-6s-2.9-5.7-6.4-5.7Zm3.8 8.4c-.2.5-1 .9-1.4.9s-.8.1-1.8-.3c-1.1-.4-2-1.1-2.8-2-.8-.9-1.3-2-1.3-2.7 0-.8.4-1.4.7-1.6.2-.2.4-.2.6-.2h.4c.2 0 .3 0 .4.3l.6 1.4c.1.2.1.3 0 .4l-.2.3c-.1.1-.2.2-.1.4.2.5.6 1.1 1.1 1.6.6.6 1.3 1 1.8 1.1.2.1.3 0 .4-.1l.5-.5c.1-.1.3-.1.5 0l1.5.6c.2.1.3.2.3.3 0 .2 0 .5-.2.9Z"
          fill="white"
        />
      </svg>
    </a>
  );
}

