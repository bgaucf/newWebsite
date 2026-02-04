import { Link } from 'react-router-dom';
import stadiumImage from '../assets/images/bouncehousefireworks.png';
import researchImage from '../assets/images/person-drawing-symbols-coming-out-light-bulb-top-book-1.jpg';
import skillDevImage from '../assets/images/skills development plan.png';
import professionalInsightsImage from '../assets/images/BGAProfessionalLogo.png';

const opportunities = [
  {
    title: 'Research',
    description:
      'Conduct self-started analytical research with other analysts in the organization to add to your portfolio.',
    path: '/research',
    image: researchImage,
  },
  {
    title: 'Skill Development',
    description:
      'Participate in workshop series which build skills needed for a career in sports/data analytics ranging from personal development to coding.',
    image: skillDevImage,
  },
  {
    title: 'Professional Insights',
    description:
      'Hear from professionals and alumni in the sports industry that speak to the organization each semester.',
    image: professionalInsightsImage,
    imageFit: 'contain',
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden min-h-[500px] flex flex-col justify-center">
        <img
          src={stadiumImage}
          alt="UCF Bounce House fireworks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gold">
            Black & Gold Analytics
          </h1>
          <h2 className="text-xl md:text-2xl text-gold font-semibold">
            UCF&apos;s Premier Sports Data Analytics Student Organization
          </h2>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            The mission of Black & Gold Analytics is to transform curiosity into professional competence for aspiring
            sports analysts. We provide students with hands-on research opportunities, applied projects, speaker events,
            and mentorship to help them build practical skills, develop meaningful portfolios, and gain exposure to the
            sports analytics industry. Our programs give members the experience, guidance, and community they need to
            prepare for careers in front offices, performance departments, and scouting organizations without relying
            solely on securing internships.
          </p>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
            Opportunities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all group"
              >
                <div className="aspect-video w-full overflow-hidden bg-gray-200">
                  <img
                    src={opp.image}
                    alt={opp.title}
                    className={`w-full h-full ${opp.imageFit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-300`}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gold-dark transition-colors">
                    {opp.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{opp.description}</p>
                {opp.path && (
                  <Link
                    to={opp.path}
                    className="inline-flex items-center text-gold-dark font-semibold hover:text-gold-dark transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
