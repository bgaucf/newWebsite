import CollapsiblePdfEmbed from '../../components/CollapsiblePdfEmbed';
import soccerRatingsPdf from '../../../Objective Player Performance Ratings in Soccer.pdf';

export default function Soccer() {
  return (
    <main className="flex-1 bg-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-black">Soccer</h1>
          <div className="space-y-10">
            <div className="pl-6">
              <h2 className="text-xl font-bold text-black mb-2">Revamping Match Ratings</h2>
              <p className="text-gray-600 leading-relaxed">
                This project aimed to redesign the match rating system in soccer using 2023/24 &quot;Big 5 leagues&quot; data to establish baseline percentiles for ratings to operate in. By using a percentile-based, contextual rating formula, subjectivity of ratings can be removed while also publicizing calculation, subsequently eliminating proprietary, private calculations.
              </p>

              <CollapsiblePdfEmbed
                src={soccerRatingsPdf}
                title="Objective Player Performance Ratings in Soccer"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
