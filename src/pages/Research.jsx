import { Link } from 'react-router-dom';

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
                className="flex items-center gap-4 p-6 rounded-xl border-2 border-gray-200 hover:border-gold hover:bg-gold-pale/50 transition-all group"
              >
                <span className="text-4xl">{area.icon}</span>
                <span className="text-lg font-semibold group-hover:text-gold-dark">{area.label}</span>
                <svg
                  className="w-5 h-5 ml-auto text-gray-400 group-hover:text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
