import HeroBackground from '../components/HeroBackground';

export default function FantasySports() {
  return (
    <main className="flex-1">
      <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[280px] flex flex-col justify-center">
        <HeroBackground />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gold">
            Fantasy Sports
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Annual Fantasy Football, Basketball leagues & March Madness bracket groups.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Fantasy Football</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">2025 Winner</span> — Brady Chestnutt</p>
              <p><span className="font-semibold">2024 Winner</span> — Nathaniel Wright</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Fantasy Basketball</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">2024 Winner</span> — Jayden Cruz Berdecia</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">March Madness Brackets</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">2025 Winner</span> — BGA Community Bracket / Nathaniel Wright</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
