import { useState } from 'react';
import PdfEmbed from './PdfEmbed';

export default function CollapsiblePdfEmbed({ src, title, buttonLabel = 'View PDF' }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border border-gold text-gold hover:bg-gold hover:text-black transition-colors"
      >
        {open ? 'Hide PDF' : buttonLabel}
      </button>

      {open && (
        <PdfEmbed src={src} title={title} />
      )}
    </div>
  );
}

