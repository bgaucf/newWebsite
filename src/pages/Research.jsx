import { Link } from 'react-router-dom';
import ucfFootballImg from '../../ucffootball.png';
import ucfBasketballImg from '../../ucfbasketball.png';
import ucfBaseballImg from '../../ucfbaseball.png';
import ucfSoccerImg from '../../ucfsoccer.jpg';
import ucfHockeyImg from '../../ucfhockey.png';
import otherImg from '../../other.jpg';

const researchAreas = [
  { path: '/research/football', label: 'Football', icon: '🏈' },
  { path: '/research/basketball', label: 'Basketball', icon: '🏀' },
  { path: '/research/baseball', label: 'Baseball', icon: '⚾' },
  { path: '/research/soccer', label: 'Soccer', icon: '⚽' },
  { path: '/research/hockey', label: 'Hockey', icon: '🏒' },
  { path: '/research/other', label: 'Other', icon: '📊' },
];

export default function Research() {
  return (
    <main className="flex-1 bg-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black">Research Projects</h1>
          <p className="text-xl text-gray-600 mb-12">
            Our members conduct self-started analytical research across multiple sports, building portfolios
            that demonstrate professional-level analysis and insights.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="flex flex-col rounded-2xl overflow-hidden border border-gray-200 bg-white/90 hover:border-gold hover:bg-gold-pale/70 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="relative w-full h-40 rounded-t-2xl overflow-hidden bg-black/40">
                  {area.label === 'Football' && (
                    <img
                      src={ucfFootballImg}
                      alt="UCF Football"
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  )}

                  {area.label === 'Basketball' && (
                    <img
                      src={ucfBasketballImg}
                      alt="UCF Basketball"
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  )}

                  {area.label === 'Baseball' && (
                    <img
                      src={ucfBaseballImg}
                      alt="UCF Baseball"
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  )}

                  {area.label === 'Soccer' && (
                    <img
                      src={ucfSoccerImg}
                      alt="UCF Soccer"
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  )}

                  {area.label === 'Hockey' && (
                    <img
                      src={ucfHockeyImg}
                      alt="UCF Hockey"
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  )}

                  {area.label === 'Other' && (
                    <img
                      src={otherImg}
                      alt="Other Research"
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  )}

                  {/* Fallback icon if any area ever has no image */}
                  {area.label !== 'Football' &&
                    area.label !== 'Basketball' &&
                    area.label !== 'Baseball' &&
                    area.label !== 'Soccer' &&
                    area.label !== 'Hockey' &&
                    area.label !== 'Other' && (
                      <div className="flex items-center justify-center w-full h-full bg-black text-4xl">
                        <span>{area.icon}</span>
                      </div>
                    )}

                  {/* Subtle gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
                </div>

                <div className="flex items-center gap-2 w-full px-4 py-3">
                  <span className="text-lg font-semibold text-black group-hover:text-gold-dark">
                    {area.label}
                  </span>
                  <svg
                    className="w-5 h-5 ml-auto text-gray-400 group-hover:text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
