import HeroBackground from '../../components/HeroBackground';

const projects = [
  {
    title: 'Forecasting Strength Training Performance with Machine Learning',
    description:
      'This project applied regression and time-series forecasting techniques to predict weightlifting performance (bench press, squat, and deadlift) using workout history and recovery metrics, with results deployed in an interactive Streamlit dashboard that allows users to simulate future progress.',
  },
];

export default function Other() {
  return (
    <main className="flex-1">
      <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[280px] flex flex-col justify-center">
        <HeroBackground />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gold">
            Other
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-10">
            {projects.map((project, i) => (
              <div key={i} className="border-l-4 border-gold pl-6">
                <h2 className="text-xl font-bold text-black mb-2">{project.title}</h2>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
