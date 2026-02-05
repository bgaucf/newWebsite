import knightroImage from '../assets/images/UCFS031_web_1_1.png';
import colinHeadshot from '../assets/images/colinhs.jpg';
import aidenHeadshot from '../assets/images/aidenellishs.jpg';
import berliantHeadshot from '../assets/images/berlianths.jpg';
import matthewHendersonHeadshot from '../assets/images/matthendersonhs.jpg';
import jaydenHeadshot from '../assets/images/jaydenhs.jpg';
import samHeadshot from '../assets/images/samhs.jpg';
import robertHeadshot from '../assets/images/roberths.jpg';
import gabeHeadshot from '../assets/images/gabehs.jpg';
import HeroBackground from '../components/HeroBackground';

const officers = [
  { name: 'Colin Montie', role: 'President', image: colinHeadshot },
  { name: 'Ryan Cannon', role: 'Vice President', image: knightroImage },
  { name: 'Aiden Ellis', role: 'Secretary', image: aidenHeadshot },
  { name: 'Jayden Cruz-Berdecia', role: 'DeVos SBM Liaison', image: jaydenHeadshot },
  { name: 'Isaiah Weaver', role: 'Treasurer', image: knightroImage },
  { name: 'Sam Jolicoeur', role: 'Treasurer', image: samHeadshot },
  { name: 'Robert Hudson', role: 'Director of Projects & Competitions', image: robertHeadshot },
  { name: 'Matthew Berliant', role: 'Treasurer', image: berliantHeadshot },
  { name: 'Matthew Henderson', role: 'Treasury Assistant', image: matthewHendersonHeadshot },
  { name: 'Gabriel Macedo', role: 'Treasury Assistant', image: gabeHeadshot },
];

export default function Officers() {
  return (
    <main className="flex-1">
      <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[300px] flex flex-col justify-center">
        <HeroBackground />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gold">
            Officers
          </h1>
          <h2 className="text-xl text-gray-300 mb-12">Organization Leadership</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {officers.map((officer, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-white/10 rounded-xl p-6 border border-gold/20 hover:border-gold/40 transition-colors"
              >
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0 ring-2 ring-gold/50"
                />
                <div>
                  <h3 className="text-xl font-bold text-gold">{officer.name}</h3>
                  <p className="text-gray-300">{officer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
