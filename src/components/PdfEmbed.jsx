export default function PdfEmbed({ src, title }) {
  return (
    <div className="w-full mt-4">
      <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
        <iframe
          src={src}
          title={title}
          className="w-full"
          style={{ height: '600px', border: 'none' }}
        />
      </div>
    </div>
  );
}

