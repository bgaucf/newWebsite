import { Link } from 'react-router-dom';
import HeroBackground from '../components/HeroBackground';

const extracurriculars = [
  { title: 'Trivia Nights', description: 'Trivia designed by Alumni and DeVos Program members' },
  { title: 'Watch Parties', description: "NFL, NBA, MLB, Champion's League, College" },
  { title: 'Tailgates', description: 'Tailgates for UCF Football games' },
  { title: 'Intramural Sports', description: 'Undefeated Basketball Regular Season 2025' },
  { title: 'Potlucks', description: 'End of semester potluck at Lake Claire' },
  { title: 'Fantasy Sports', description: 'Annual Fantasy Football, Basketball leagues & March Madness bracket groups', path: '/competitions/fantasy-sports' },
];

const values = [
  'Curiosity with Purpose',
  'Excellence in Execution',
  'Learning Through Application',
  'Access Through Merit and Initiative',
  'Competitive Excellence',
  'Community and Collaboration',
];

export default function About() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[280px] flex flex-col justify-center">
        <HeroBackground />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gold">
            About Us
          </h1>
        </div>
      </section>

      {/* About explanation */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Black and Gold Analytics (BGA) is a student-led organization dedicated to developing the next generation
            of sports analysts.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Founded in Spring 2023 by Abdullah Mohammed, BGA evolved in Spring 2024 under Nathaniel Wright into a
            platform focused on hands-on research, professional development, and applied projects that give students
            meaningful experience across multiple sports, from football and basketball to hockey, baseball, and beyond.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Members engage in independent research, collaborate with local teams, participate in national analytics
            competitions, and connect with professionals through speaker events and mentorship programs. These
            opportunities allow students to build portfolios, develop practical skills, and gain real-world exposure
            that supports future careers in the sports industry.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            BGA is more than a student organization. It is a community. Alumni actively mentor current members, share
            insights, and help create pathways for the next generation of analysts. Whether you are a student looking
            to grow your skills or a professional interested in mentoring, partnering, or connecting with emerging
            talent, BGA offers a space where curiosity becomes experience and ideas become actionable insights.
          </p>
        </div>
      </section>

      {/* Officers & Alumni */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">People</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              to="/about/officers"
              className="flex items-center gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-2xl group-hover:bg-gold/30 transition-colors">
                👥
              </div>
              <div>
                <h3 className="text-xl font-bold text-black group-hover:text-gold-dark transition-colors">Officers</h3>
                <p className="text-gray-600 text-sm">Current leadership &amp; members</p>
              </div>
              <svg className="w-5 h-5 text-gold ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/about/alumni"
              className="flex items-center gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-2xl group-hover:bg-gold/30 transition-colors">
                🎓
              </div>
              <div>
                <h3 className="text-xl font-bold text-black group-hover:text-gold-dark transition-colors">Alumni</h3>
                <p className="text-gray-600 text-sm">Notable alumni &amp; where they are now</p>
              </div>
              <svg className="w-5 h-5 text-gold ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Mission Statement</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Black and Gold Analytics is a student-led research organization that transforms curiosity into
              professional competence by empowering aspiring analysts to produce industry-level work, apply their
              skills through real-world partnerships and competition, and gain access to careers across the sports
              analytics landscape supported by a lifelong alumni network that pays opportunity forward.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Black and Gold Analytics aspires to be a nationally recognized student research organization that
              serves as a trusted pipeline of talent into professional and collegiate sports, defined by competitive
              excellence, impactful partnerships, and a culture where curiosity matures into expertise and opportunity
              is continuously paid forward.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Values</h2>
            <ul className="space-y-2">
              {values.map((value, i) => (
                <li key={i} className="flex items-center gap-2 text-lg text-gray-700">
                  <span className="text-gold font-bold">•</span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Us</h2>
          <div className="space-y-4 text-lg">
            <p>
              <span className="font-semibold">Organization Email:</span>{' '}
              <a href="mailto:bgaucf@gmail.com" className="text-gold-dark hover:text-gold font-medium">
                bgaucf@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">President&apos;s Email:</span>{' '}
              <a href="mailto:colin.montie@ucf.edu" className="text-gold-dark hover:text-gold font-medium">
                colin.montie@ucf.edu
              </a>
            </p>
            <p>
              <a
                href="https://discord.gg/qh6GUqxRf5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-dark hover:text-gold font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Join our Discord
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Extracurriculars */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Extracurriculars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map((item, index) => {
              const cardClass = 'rounded-xl p-6 bg-gray-50 border border-gray-200 hover:border-gold/50 transition-colors';
              const content = (
                <>
                  <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  {item.path && (
                    <span className="inline-flex items-center gap-1 mt-2 text-gold font-medium text-sm">
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  )}
                </>
              );
              return item.path ? (
                <Link key={index} to={item.path} className={`block ${cardClass} group hover:shadow-md`}>
                  {content}
                </Link>
              ) : (
                <div key={index} className={cardClass}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
