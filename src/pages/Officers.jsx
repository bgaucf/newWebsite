import knightroImage from '../assets/images/UCFS031_web_1_1.png';
import colinHeadshot from '../assets/images/colinhs.jpg';
import aidenHeadshot from '../assets/images/aidenellishs.jpg';
import berliantHeadshot from '../assets/images/berlianths.jpg';
import matthewHendersonHeadshot from '../assets/images/matthendersonhs.jpg';
import jaydenHeadshot from '../assets/images/jaydenhs.jpg';
import samHeadshot from '../assets/images/samhs.jpg';
import robertHeadshot from '../assets/images/roberths.jpg';
import gabeHeadshot from '../assets/images/gabehs.jpg';

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
    <main className="flex-1 bg-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black">
            Officers
          </h1>
          <p className="text-xl text-gray-600 mb-12">Organization Leadership</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {officers.map((officer, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-cream-dark rounded-xl p-6 border border-gray-200 hover:border-gold/50 transition-colors group"
              >
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0 ring-2 ring-gold/50"
                />
                <div>
                  <h3 className="text-xl font-bold text-black group-hover:text-gold-dark">{officer.name}</h3>
                  <p className="text-gray-600">{officer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
