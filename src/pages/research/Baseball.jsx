const projects = [
  {
    title: 'Situational Pitch Efficacy',
    description:
      'This project aimed to visualize the efficacy of pitch types in every iterable combination of balls, strikes, outs, baserunners, pitcher & batter handedness, and pitcher velocity and spinrate capabilities. The result was a R ShinyApp dashboard that provides real-time calculations based on the inputs provided.',
  },
  {
    title: 'Stolen Base Decision-Making',
    description:
      'This project aimed to calculate stolen base probabilities and expected gains from attempts based on Catcher Pop Time, Runner Speed, Game Situation, Pitcher Delivery Time, and Pitcher Pickoff Tendencies. A recommendation of whether or not to attempt a steal and the result of "Expected Runs Added" is outputted.',
  },
  {
    title: 'Predicting Player Playing Time - Cincinnati Reds Hackathon',
    description:
      'This project was part of the 2025 Cincinnati Reds Hackathon, a competition in which contestants were tasked with modeling expected playing time for the 2024 MLB season using only the provided 2021-2023 Baseball Savant pitch-by-pitch dataset. In this competition, the team defeated numerous Ivy League, Doctorate, Master\'s students and prestigious analytics organizations from around the country en route to a finalist nomination.',
  },
  {
    title: 'Examining the Effects of Fielder Positioning',
    description:
      'This project embarked on an exploratory analysis of the effects of shifts and shades in the infield and outfield, modeling how batting averages and expected batting averages of individual and league-wide batters in the MLB were affected when facing shifts and shades while batting.',
  },
];

export default function Baseball() {
  return (
    <main className="flex-1 bg-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-black">Baseball</h1>
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
