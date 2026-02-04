import knightroImage from '../assets/images/UCFS031_web_1_1.png';
import HeroBackground from '../components/HeroBackground';

const notableAlumni = [
  {
    name: 'Nathan Wright',
    role: 'Alumni President & Mentor',
    title: 'Performance Science Analyst - IMG Academy',
  },
  {
    name: 'Asa Arnold',
    role: 'Student Manager Athletics - Notre Dame',
    title: 'Host of Analytics w/ Asa podcast | MS Business Analytics - Notre Dame',
  },
  {
    name: 'Nicolas Thomas',
    role: 'Associate Producer',
    title: 'EA (Electronic Arts)',
  },
  {
    name: 'Nicholas Davidson',
    role: 'Operations Analyst',
    title: 'BNY Mellon',
  },
];

export default function Alumni() {
  return (
    <main className="flex-1">
      <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[300px] flex flex-col justify-center">
        <HeroBackground />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-16 text-gold">
            Notable Alumni
          </h1>
          <div className="space-y-10">
            {notableAlumni.map((alum, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-white/10 rounded-xl p-6 border border-gold/20 hover:border-gold/40 transition-colors"
              >
                <img
                  src={knightroImage}
                  alt=""
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0 ring-2 ring-gold/50"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gold mb-1">{alum.name}</h2>
                  <p className="text-lg text-gray-200 font-medium">{alum.role}</p>
                  <p className="text-gray-400">{alum.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6">Future Alumni</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Placeholder for future alumni as the organization continues to produce professionals in the sports
            analytics field and beyond.
          </p>
        </div>
      </section>
    </main>
  );
}
