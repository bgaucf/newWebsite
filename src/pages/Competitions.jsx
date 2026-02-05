import { Link } from 'react-router-dom';

const recurringCompetitions = [
  { name: 'NFL Big Data Bowl' },
  { name: 'Cincinnati Reds Hackathon', badge: '2025 Finalist' },
  { name: 'NHL Big Data Cup' },
];

const previousCompetitions = [
  {
    name: '2024-2025 Addition Financial Competition',
    result: '3rd Place',
    description: 'Modeling for Consumer Mortgage Lending Choices',
  },
  {
    name: 'NBA Trade Deadline Competition',
    description: 'Assigned an NBA team to assess and conduct the best transactions in a mock trade deadline',
  },
  {
    name: 'March (Machine Learning) Madness',
    description: 'Using machine learning to apply game outcome probabilities of each iterable matchup in NCAA tournament',
  },
  {
    name: 'Chicago White Sox Lineup Modeling Competition',
    description: 'Assembling the highest simulated runs scored lineup using post-spring 40-man roster',
  },
];

export default function Competitions() {
  return (
    <main className="flex-1 bg-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black">Competitions</h1>
          <p className="text-xl text-gray-600 mb-12">
            BGA members participate in national analytics competitions and conferences, applying their skills
            in real-world competitive settings.
          </p>
          <h2 className="text-2xl font-bold mb-8">Recurring</h2>
          <div className="space-y-4 mb-16">
            {recurringCompetitions.map((comp, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-cream-dark border border-gray-200 hover:border-gold/50 transition-colors"
              >
                <span className="text-xl font-semibold text-black">{comp.name}</span>
                {comp.badge && (
                  <span className="px-3 py-1 bg-gold-pale0 text-black text-sm font-bold rounded-full">
                    {comp.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-8">Other Previous Competitions</h2>
          <div className="space-y-6">
            {previousCompetitions.map((comp, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-cream-dark border border-gray-200 hover:border-gold/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-black">{comp.name}</h3>
                  {comp.result && (
                    <span className="px-3 py-1 bg-gold-pale0 text-black text-sm font-bold rounded-full">
                      {comp.result}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{comp.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-gold-pale rounded-xl border-2 border-gold/30">
            <Link
              to="/competitions/fantasy-sports"
              className="flex items-center gap-4 group"
            >
              <span className="text-4xl">🏆</span>
              <div>
                <h3 className="text-xl font-bold text-black group-hover:text-gold-dark">Fantasy Sports</h3>
                <p className="text-gray-600">
                  Annual Fantasy Football, Basketball leagues & March Madness bracket groups
                </p>
              </div>
              <svg className="w-6 h-6 text-gold-dark ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
