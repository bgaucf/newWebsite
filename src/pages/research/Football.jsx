const projects = [
  {
    title: 'The Statistically Offensive Scheme',
    description:
      "This project was assembled as part of Nathan Wright working as an analyst for Colonial High School Football. In this project, the results of numerous works of research in playcalling, decision-making, outcome modeling, and defensive expectancies were merged together to design the statistically optimal offense. If you're going to read any project on this website, this project is the one.",
  },
  {
    title: 'Quantifying QB Decision-Making in the Passing Game',
    description:
      'This project introduced xWEPA, a framework for quantifying quarterback decision-making in the passing game. By combining expected play value (xEPA) with quarterback-specific completion probabilities (qbxcp), the metric isolates the quality of the decision itself rather than its realized outcome. Results showed that xWEPA retains predictive value for wins and scoring, significantly reduces variance compared to EPA and WEPA, and strongly aligns with performance in high-leverage plays.',
  },
  {
    title: 'NFL Defensive Reaction Modeling – Big Data Bowl',
    description:
      'This project engineered a situationally aware framework to visualize expected defensive responses—rush count, coverage type, and adjustments—based on down, distance, motion, and play intent. Machine learning models analyzed pre- and post-snap alignment data to surface trends in defensive behavior, enabling predictive insights for offensive strategy and game planning.',
  },
  {
    title: 'Tracking Data Analysis of WR Pre-snap Mannerisms',
    description:
      'This project analyzed NFL player tracking and contextual data using Python to investigate whether wide receivers reveal play intent through pre-snap movement speed. Statistical models and visualizations were built to identify significant tempo differences in targeted vs non-targeted WRs.',
  },
  {
    title: 'Arizona Cardinals Scouting Report',
    description:
      'A bespoke project conducting full-scope opponent scouting report on the Arizona Cardinals using publicly available NFL data (nfl_data_py), analyzing offensive/defensive tendencies, situational behavior, and individual player profiles.',
  },
  {
    title: '4th Down Decision-Making',
    description:
      'A study on 4th down conversion attempt success rates & a 4th down decision-making dashboard. Success probabilities were examined based on situational, contextual, and player variables to predict conversion at an 86% success rate. A decision-making dashboard visualizes expected gains and outputs recommendations.',
  },
  {
    title: 'Charting Targeted Route Success',
    description:
      'Used play-by-play data to model EPA and completion probabilities of routes when targeted, displaying "Weighted Points Added"—expected gain from EPA upon completion × completion probability.',
  },
  {
    title: 'Early Down Play Calling Analysis',
    description:
      'Analyzed 2021-2023 NFL play-by-play data using Python to evaluate early-down playcalling strategies and identify trends in 3rd-down distance-to-go & conversion success rates across all 32 teams.',
  },
  {
    title: 'Optimizing Run Game Performance: YPC Analysis',
    description:
      'A study on YPC when attacking certain gaps in blocking schemes, expanded into how YPC changes with formation and personnel deployment, developed in a scouting report style for football coaches.',
  },
  {
    title: 'Modeling Redzone Playcalling Efficiency',
    description:
      'Built a model evaluating red zone playcall efficiency, focusing on down, distance, field position, and defensive alignment. Regression analysis quantified expected points added (EPA) for various offensive concepts.',
  },
  {
    title: 'Championship NFL Team Salary Cap Analysis',
    description:
      'Analyzed NFL salary cap allocations and draft capital with Python, identifying positional spending trends and performance correlations using OverTheCap and Sports Reference data.',
  },
  {
    title: 'Prospect to Pro',
    description:
      'Analyzed data from first and second-round NFL draft picks (2013-2020) to identify correlations between college performance and NFL success. Developed machine learning models to predict NFL career success based on college statistics, awards, and other factors.',
  },
];

export default function Football() {
  return (
    <main className="flex-1 bg-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-black">Football</h1>
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
