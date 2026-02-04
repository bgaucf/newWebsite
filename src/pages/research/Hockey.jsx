import HeroBackground from '../../components/HeroBackground';

export default function Hockey() {
  return (
    <main className="flex-1">
      <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[280px] flex flex-col justify-center">
        <HeroBackground />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gold">
            Hockey
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Future research to come in tandem with participation in NHL Big Data Cup competition.
          </p>
        </div>
      </section>
    </main>
  );
}
