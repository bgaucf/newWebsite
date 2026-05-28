import knightroImage from '../assets/images/UCFS031_web_1_1.png';
import nathanHeadshot from '../assets/images/nathanhs.jpg';
import asaHeadshot from '../assets/images/asahs.jpg';
import nickThomasHeadshot from '../assets/images/nickthomashs.jpg';
import colinHeadshot from '../assets/images/colinhs.jpg';
import aidenHeadshot from '../assets/images/aidenellishs.jpg';

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
  {
    name: 'Colin Montie',
    role: 'Former President',
    title: '',
    image: colinHeadshot,
  },
  {
    name: 'Aiden Ellis',
    role: 'Former Secretary',
    title: '',
    image: aidenHeadshot,
  },
];

export default function Alumni() {
  return (
    <main className="flex-1 bg-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black">
            Notable Alumni
          </h1>
          <p className="text-xl text-gray-600 mb-12">Organization Alumni</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {notableAlumni.map((alum, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-cream-dark rounded-xl p-6 border border-gray-200 hover:border-gold/50 transition-colors group"
              >
                <img
                  src={alum.image}
                  alt={alum.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0 ring-2 ring-gold/50"
                />
                <div>
                  <h3 className="text-xl font-bold text-black group-hover:text-gold-dark">{alum.name}</h3>
                  <p className="text-gray-600">{alum.role}</p>
                  {alum.title && <p className="text-gray-500 text-sm">{alum.title}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
