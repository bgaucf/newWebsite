import CollapsiblePdfEmbed from '../../components/CollapsiblePdfEmbed';
import soccerRatingsPdf from '../../../Objective Player Performance Ratings in Soccer.pdf';

export default function Soccer() {
  return (
    <main className="flex-1 bg-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black">Soccer</h1>
          <p className="text-xl text-gray-600 mb-8">
            This project aimed to redesign the match rating system in soccer using 2023/24 &quot;Big 5 leagues&quot; data to establish baseline percentiles for ratings to operate in. By using a percentile-based, contextual rating formula, subjectivity of ratings can be removed while also publicizing calculation, subsequently eliminating proprietary, private calculations.
          </p>

          <CollapsiblePdfEmbed
            src={soccerRatingsPdf}
            title="Objective Player Performance Ratings in Soccer"
          />
        </div>
      </section>
    </main>
  );
}
