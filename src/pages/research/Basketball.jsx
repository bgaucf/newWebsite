const projects = [
  {
    title: 'NBA Impact Score',
    description:
      "Impact Score is a new objective composite metric used to measure an individual player's impact vs average on team performance through a variety of lenses. The score comprises a summation of absolute differences in player statistical standing vs league-average in basic per-game, advanced, and per-100 possession metrics as well as on/off scoring differentials measured through multiple +/- and net rating systems.",
  },
  {
    title: 'Player-Play Synergy',
    description:
      'This project quantified individual player points generated per-play performance through various basketball play concepts including pick and rolls, isolations, post-ups, and off-ball cuts. A framework was generated to measure proficiency for every player, denote play proficiencies at an individual level, and generate the optimal offensive play scheme based on rankings for players on a given roster.',
  },
  {
    title: 'Travel Time Performance Impact',
    description:
      'This study aimed to quantify the impacts of travel on the performance of players and teams around the league. By establishing baseline averages and measuring performances in a variety of travel density "workloads", the impacts of travel were measured.',
  },
  {
    title: 'Shot Quality Allowed*',
    description:
      "A work in progress: This study aims to define a new way to measure on-ball defense aptitude by ignoring the results of a shot contest but rather focusing on the quality of shots allowed by defenders when covering a shooter. This will allow for more accurate determinations of a player's ability to limit high-quality shots to opposing shooters.",
  },
  {
    title: 'Quantifying Pick and Roll Decision-Making Proficiency*',
    description:
      'A work in progress: This study uses tracking data to develop a methodology of scoring the decision-making of a pick and roll ball handler.',
  },
  {
    title: 'Predicting NCAA Tournament Champion',
    description:
      'Project used historical trends of previous NCAA basketball tournament champion programs (2013-2023) to identify common characteristics of champion-caliber teams. Measured 2024 and 2025 tournament fields against these trends to find next tournament champion prior to tournament start. This analysis correctly identified next tournament champion candidates: UConn and Florida.',
  },
];

export default function Basketball() {
  return (
    <main className="flex-1 bg-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-black">Basketball</h1>
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
