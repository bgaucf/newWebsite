import CollapsiblePdfEmbed from '../../components/CollapsiblePdfEmbed';
import optimalOffensePdf from '../../../Optimal Offense Presentation.pdf';
import qbTrustProcessPdf from '../../../Trust the Process.pdf';
import bigDataBowlPdf from '../../../NFL Big Data Bowl 2025.pdf';
import wrSpeedPdf from '../../../Wide Receiver Pre-Snap Speed Predicting Being Targeted.pdf';
import cardinalsScoutingPdf from '../../../Cardinals Scouting Report.pdf';
import fourthDownPdf from '../../../Analyzing and Estimating 4th Down Conversion Probability.pdf';
import primaryRoutePdf from '../../../Primary Route Target Efficiency.pdf';
import earlyDownPlaycallingPdf from '../../../Early-Down Playcalling Analysis.pdf';
import runDeploymentPdf from '../../../Run Deployment Findings.pdf';
import rushingEfficiencyPdf from '../../../Unpacking Rushing Efficiency_ Insights from NFL Yards Per Carry Analysis.pdf';
import redzonePlaycallingPdf from '../../../Redzone Playcalling Efficiency.pdf';
import capSpacePdf from '../../../Anatomy of a Champion - Where Are Teams Spending Their Cap Space.pdf';
import prospectToProPdf from '../../../Prospect to Pro_ Predicting NFL Success from College Football Performance.pdf';

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
              <div key={i} className="pl-6">
                <h2 className="text-xl font-bold text-black mb-2">{project.title}</h2>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>

                {project.title === 'The Statistically Offensive Scheme' && (
                  <CollapsiblePdfEmbed
                    src={optimalOffensePdf}
                    title="Optimal Offense Presentation"
                  />
                )}

                {project.title === 'Quantifying QB Decision-Making in the Passing Game' && (
                  <CollapsiblePdfEmbed
                    src={qbTrustProcessPdf}
                    title="Trust the Process"
                  />
                )}

                {project.title === 'NFL Defensive Reaction Modeling – Big Data Bowl' && (
                  <CollapsiblePdfEmbed
                    src={bigDataBowlPdf}
                    title="NFL Big Data Bowl 2025"
                  />
                )}

                {project.title === 'Tracking Data Analysis of WR Pre-snap Mannerisms' && (
                  <CollapsiblePdfEmbed
                    src={wrSpeedPdf}
                    title="Wide Receiver Pre-Snap Speed Predicting Being Targeted"
                  />
                )}

                {project.title === 'Arizona Cardinals Scouting Report' && (
                  <CollapsiblePdfEmbed
                    src={cardinalsScoutingPdf}
                    title="Cardinals Scouting Report"
                  />
                )}

                {project.title === '4th Down Decision-Making' && (
                  <CollapsiblePdfEmbed
                    src={fourthDownPdf}
                    title="Analyzing and Estimating 4th Down Conversion Probability"
                  />
                )}

                {project.title === 'Charting Targeted Route Success' && (
                  <CollapsiblePdfEmbed
                    src={primaryRoutePdf}
                    title="Primary Route Target Efficiency"
                  />
                )}

                {project.title === 'Early Down Play Calling Analysis' && (
                  <CollapsiblePdfEmbed
                    src={earlyDownPlaycallingPdf}
                    title="Early-Down Playcalling Analysis"
                  />
                )}

                {project.title === 'Optimizing Run Game Performance: YPC Analysis' && (
                  <CollapsiblePdfEmbed
                    src={rushingEfficiencyPdf}
                    title="Unpacking Rushing Efficiency: Insights from NFL Yards Per Carry Analysis"
                    buttonLabel="View YPC analysis slides"
                  />
                )}

                {project.title === 'Modeling Redzone Playcalling Efficiency' && (
                  <CollapsiblePdfEmbed
                    src={redzonePlaycallingPdf}
                    title="Redzone Playcalling Efficiency"
                  />
                )}

                {project.title === 'Championship NFL Team Salary Cap Analysis' && (
                  <CollapsiblePdfEmbed
                    src={capSpacePdf}
                    title="Anatomy of a Champion - Where Are Teams Spending Their Cap Space"
                  />
                )}

                {project.title === 'Prospect to Pro' && (
                  <CollapsiblePdfEmbed
                    src={prospectToProPdf}
                    title="Prospect to Pro: Predicting NFL Success from College Football Performance"
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

