import knightroImage from '../assets/images/UCFS031_web_1_1.png';
import nathanHeadshot from '../assets/images/nathanhs.jpg';
import asaHeadshot from '../assets/images/asahs.jpg';
import nickThomasHeadshot from '../assets/images/nickthomashs.jpg';

const notableAlumni = [
  {
    name: 'Nathan Wright',
    role: 'Alumni President & Mentor',
    title: 'Performance Science Analyst - IMG Academy',
    image: nathanHeadshot,
  },
  {
    name: 'Asa Arnold',
    role: 'Student Manager Athletics - Notre Dame',
    title: 'Host of Analytics w/ Asa podcast | MS Business Analytics - Notre Dame',
    image: asaHeadshot,
  },
  {
    name: 'Nicolas Thomas',
    role: 'Associate Producer',
    title: 'EA (Electronic Arts)',
    image: nickThomasHeadshot,
  },
  {
    name: 'Nicholas Davidson',
    role: 'Operations Analyst',
    title: 'BNY Mellon',
    image: knightroImage,
  },
];

export default function Alumni() {
  return (
    <main className="flex-1 bg-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-black">
            Notable Alumni
          </h1>
          <div className="space-y-10">
            {notableAlumni.map((alum, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-cream-dark rounded-xl p-6 border border-gray-200 hover:border-gold/50 transition-colors"
              >
                <img
                  src={alum.image}
                  alt={alum.name}
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0 ring-2 ring-gold/50"
                />
                <div>
                  <h2 className="text-2xl font-bold text-black mb-1">{alum.name}</h2>
                  <p className="text-lg text-gray-700 font-medium">{alum.role}</p>
                  <p className="text-gray-600">{alum.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
