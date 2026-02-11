import CollapsiblePdfEmbed from '../../components/CollapsiblePdfEmbed';
import strengthForecastPdf from '../../../workout_prediction_project.pdf';

const projects = [
  {
    title: 'Forecasting Strength Training Performance with Machine Learning',
    description:
      'This project applied regression and time-series forecasting techniques to predict weightlifting performance (bench press, squat, and deadlift) using workout history and recovery metrics, with results deployed in an interactive Streamlit dashboard that allows users to simulate future progress.',
  },
];

export default function Other() {
  return (
    <main className="flex-1 bg-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-black">Other</h1>
          <div className="space-y-10">
            {projects.map((project, i) => (
              <div key={i} className="pl-6">
                <h2 className="text-xl font-bold text-black mb-2">{project.title}</h2>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>

                {project.title === 'Forecasting Strength Training Performance with Machine Learning' && (
                  <CollapsiblePdfEmbed
                    src={strengthForecastPdf}
                    title="Forecasting Strength Training Performance with Machine Learning"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
