/**
 * Short, approved guidance for the consultation flow. This stays within the
 * services and claims described on the site instead of inventing advice.
 */
export const approvedConsultationAnswerGuide = {
  subjects:
    "Support can combine ATAR subject tutoring, assessment planning, essay feedback, and university pathway work. We confirm the exact course and school requirements in the first consultation.",
  planning:
    "We map the student's subjects, assessment calendar, current level, target marks, and longer-term pathway. The plan is then reviewed as the term develops.",
  essays:
    "Essay coaching starts with the question, then moves through a thesis, paragraph outline, evidence, explanation, and a final check against the marking criteria.",
  university:
    "We can help compare courses, prerequisites, timelines, scholarships, and application steps. Current entry requirements should always be checked against official university information.",
  plans:
    "Essentials is $250 per month with one 60-minute session each week (4 sessions per month). Mentor is $450 per month with one 120-minute session each week (4 sessions per month), including a 10-minute break, plus deeper planning, essay feedback, and accountability support. Both include ATAR support.",
} as const;

export type ApprovedConsultationTopic = keyof typeof approvedConsultationAnswerGuide;

const supportRequestGuideMap: Record<string, ApprovedConsultationTopic> = {
  "Recover from missed work and rebuild my results.": "planning",
  "Understand what an assignment is asking and write stronger essays.": "essays",
  "Create a weekly plan and stay accountable to it.": "planning",
  "Connect my subject choices and marks to university options.": "university",
  "Build a calmer, more consistent approach to senior school.": "subjects",
};

export function findApprovedConsultationGuide(supportRequest?: string) {
  if (!supportRequest) {
    return null;
  }

  const topic = supportRequestGuideMap[supportRequest];
  return topic ? approvedConsultationAnswerGuide[topic] : null;
}
