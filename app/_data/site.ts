export const publishedAssetBase = "";

export const navigation = [
  { href: "/support", label: "Support" },
  { href: "/plans", label: "Plans" },
  { href: "/story", label: "My story" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Start here" },
];

export const plans = [
  {
    id: "essentials",
    name: "Essentials",
    subtitle: "Focused weekly support",
    price: "$200",
    cadence: "1 x 60-minute session per week",
    lead: "A focused weekly lesson plus a forward plan for each subject and student.",
    features: [
      "ATAR classes and assessment support",
      "A term-by-term plan for each subject and student",
      "Weekly priorities, study habits, and next actions",
      "Essay structure and outline feedback",
      "Homework and assessment review with practical improvements",
      "Email or chat check-ins between sessions",
    ],
  },
  {
    id: "mentor",
    name: "Mentor",
    subtitle: "Full academic mentoring",
    price: "$400",
    cadence: "1 x 90-minute session per week + ongoing planning",
    lead: "Deeper weekly mentoring from subject strategy to assessments and university planning.",
    features: [
      "Everything in Essentials",
      "ATAR classes and assessment support across enrolled subjects",
      "An individual subject roadmap mapped to assessments and ATAR goals",
      "Detailed essay coaching: thesis, paragraph logic, evidence, drafting, and revision",
      "Marking-style feedback on essays and major assessments",
      "Weekly study-plan updates plus a mid-week accountability check-in",
      "University pathway and application planning",
      "A parent or guardian progress summary when requested",
    ],
  },
];

export const studentVoices = [
  {
    quote:
      "I was not sure where to start, but the planning session gave me a clear next step and a routine I could actually follow.",
    name: "Senior student",
    detail: "Year 12",
  },
  {
    quote:
      "The essay framework made it much easier to turn my ideas into a clear argument with evidence in every paragraph.",
    name: "ATAR student",
    detail: "English",
  },
];

export const concerns = [
  {
    number: "01",
    title: "You are working hard without a clear order",
    text: "Upcoming assessments, revision, and long-term ATAR goals compete for your attention.",
  },
  {
    number: "02",
    title: "Your marks do not show what you know",
    text: "You understand parts of the content but lose marks through structure, timing, or unclear explanations.",
  },
  {
    number: "03",
    title: "You are making decisions too late",
    text: "Subject choices, university options, and scholarship preparation need a plan before deadlines arrive.",
  },
];

export const supportAreas = [
  {
    number: "01",
    title: "ATAR subjects",
    lead: "Know what to do before the pressure arrives.",
    text: "We map each subject against upcoming units, assessments, and your target ATAR so weekly work has a clear purpose.",
    tags: ["Subject strategy", "Assessment planning", "Exam preparation"],
  },
  {
    number: "02",
    title: "Essay writing",
    lead: "Build arguments that are easy to follow and hard to mark down.",
    text: "We move from the question to a defensible thesis, a logical outline, evidence-led paragraphs, and a deliberate final revision.",
    tags: ["Thesis and arguments", "Evidence integration", "Draft feedback"],
  },
  {
    number: "03",
    title: "University pathways",
    lead: "Make future choices while you still have options.",
    text: "We compare courses, prerequisites, timelines, and application steps, then connect them back to the subjects and habits you need now.",
    tags: ["Course research", "Prerequisites", "Application planning"],
  },
];

export const subjectAreas = [
  {
    category: "MATHEMATICS",
    ringImage: "/scenes/subject-math.jpg",
    photoAuthor: "LBM1948",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    photoSource: "https://commons.wikimedia.org/wiki/File:Classroom_blackboard_at_Cornell_University,_Ithaca,_NY_25.jpg",
    detail: "Learn the method, explain each step clearly, and practise the question styles that cost you marks.",
    title: "Mathematics",
    subjects: ["General Mathematics", "Mathematical Methods", "Specialist Mathematics"],
  },
  {
    category: "SCIENCE",
    ringImage: "/scenes/subject-science.jpg",
    photoAuthor: "Belikov Maxim",
    photoLicense: "CC BY 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/4.0",
    photoSource: "https://commons.wikimedia.org/wiki/File:Equipment_and_glassware.jpg",
    detail: "Turn concepts, practical work, and data into concise responses that match the marking criteria.",
    title: "Science",
    subjects: ["Biology", "Chemistry", "Physics"],
  },
  {
    category: "ENGLISH & HUMANITIES",
    ringImage: "/scenes/subject-language.jpg",
    photoAuthor: "Shixart1985",
    photoLicense: "CC BY 2.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/2.0",
    photoSource: "https://commons.wikimedia.org/wiki/File:Young_person_reading_a_book_in_a_cozy_library_surrounded_by_shelves_of_literature.jpg",
    detail: "Plan a line of argument, select evidence with purpose, and make every paragraph answer the question.",
    title: "English & Humanities",
    subjects: ["English", "Literature", "EAL", "History"],
  },
  {
    category: "BUSINESS & SOCIAL SCIENCE",
    ringImage: "/scenes/subject-business.jpg",
    photoAuthor: "Øyvind Holmstad",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    photoSource: "https://commons.wikimedia.org/wiki/File:Accounting_book.jpg",
    detail: "Connect definitions, examples, and evaluation so your written answers show more than recall.",
    title: "Business & social science",
    subjects: ["Business", "Economics", "Legal Studies"],
  },
];

export const essayFramework = [
  {
    number: "01",
    label: "READ THE QUESTION",
    title: "Turn the prompt into a task list",
    text: "We underline the command words, define the key terms, and identify exactly what the marker needs to see answered.",
  },
  {
    number: "02",
    label: "BUILD THE ARGUMENT",
    title: "Write a thesis with a direction",
    text: "We shape a clear position, then choose two or three main claims that prove it rather than repeating the topic in different words.",
  },
  {
    number: "03",
    label: "MAP THE OUTLINE",
    title: "Give every paragraph a job",
    text: "The introduction sets the position and route. Each body paragraph follows point, evidence, explanation, and link-back. The conclusion answers the question again without adding a new idea.",
  },
  {
    number: "04",
    label: "USE EVIDENCE",
    title: "Make examples do analytical work",
    text: "We choose evidence that proves the paragraph point, introduce it precisely, explain how it supports the argument, and connect it back to the question.",
  },
  {
    number: "05",
    label: "REVISE WITH PURPOSE",
    title: "Improve the logic before the polish",
    text: "We check the argument, paragraph order, evidence, and marking criteria first, then tighten expression, transitions, and time management.",
  },
];

export const programExamples = [
  {
    number: "01",
    title: "Mathematics + assessment plan",
    subjects: "Methods / Specialist Mathematics",
    text: "Identify the next assessment skills, diagnose gaps, and build a revision sequence that starts before the deadline.",
  },
  {
    number: "02",
    title: "English + essay coaching",
    subjects: "English / Literature / EAL",
    text: "Move from a practice prompt to a thesis, a paragraph outline, evidence, and a revision checklist.",
  },
  {
    number: "03",
    title: "ATAR + university pathway",
    subjects: "Subjects / prerequisites / applications",
    text: "Connect subject choices and current marks to course requirements, timelines, and realistic next steps.",
  },
];

export const methods = [
  {
    number: "01",
    title: "Start with the destination",
    text: "We work backwards from assessment dates, target marks, and university goals.",
  },
  {
    number: "02",
    title: "Plan each subject early",
    text: "Every student gets a subject-by-subject roadmap before the workload becomes urgent.",
  },
  {
    number: "03",
    title: "Break work into actions",
    text: "Large goals become weekly and daily tasks that are easy to begin and review.",
  },
  {
    number: "04",
    title: "Use feedback as data",
    text: "We classify errors, track patterns, and change the study method instead of repeating the same attempt.",
  },
  {
    number: "05",
    title: "Review before the next deadline",
    text: "Plans are updated as results, school schedules, and priorities change.",
  },
];

export const universities = [
  {
    name: "University of Melbourne",
    railLabel: "Melbourne",
    detail: "Bachelor of Commerce",
    offer: "AUD 45,000 Scholarship Offer",
    image: "/universities/melbourne.jpg",
    imageAlt: "Historic University of Melbourne campus building",
    imagePosition: "center 52%",
    photoAuthor: "Geoff Penaluna",
    photoSource: "https://commons.wikimedia.org/wiki/File:Melbourne_University_grand_building.jpg",
    photoLicense: "CC BY-SA 2.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
  },
  {
    name: "University of Auckland",
    railLabel: "Auckland",
    detail: "Business / Science",
    offer: "Full Tuition Scholarship Offer",
    image: "/universities/auckland.jpg",
    imageAlt: "University of Auckland ClockTower",
    imagePosition: "center 43%",
    photoAuthor: "Uhooep",
    photoSource: "https://commons.wikimedia.org/wiki/File:Clock_Tower,_University_of_Auckland.jpg",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    name: "Victoria University of Wellington",
    railLabel: "Wellington",
    detail: "Commerce / Law",
    offer: "50% Tuition Scholarship Offer",
    image: "/universities/wellington.jpg",
    imageAlt: "Victoria University of Wellington Hunter Building",
    imagePosition: "center 48%",
    photoAuthor: "Khirol Amir",
    photoSource: "https://commons.wikimedia.org/wiki/File:Hunter_Building.jpg",
    photoLicense: "CC BY 2.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  {
    name: "University of Adelaide",
    railLabel: "Adelaide",
    detail: "Business / Economics",
    offer: "Merit-based Scholarship",
    image: "/universities/adelaide.jpg",
    imageAlt: "University of Adelaide Bonython Hall",
    imagePosition: "center 52%",
    photoAuthor: "Paleontour",
    photoSource: "https://commons.wikimedia.org/wiki/File:The_University_of_Adelaide.jpg",
    photoLicense: "CC BY 2.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  {
    name: "Massey University",
    railLabel: "Massey",
    detail: "Business / Applied Science",
    offer: "International Excellence Award",
    image: "/universities/massey.jpg",
    imageAlt: "Massey University Manawatū campus building",
    imagePosition: "center 48%",
    photoAuthor: "Michal Klajban",
    photoSource: "https://commons.wikimedia.org/wiki/File:Massey_University,_Palmerston_North_Campus,_New_Zealand_03.jpg",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
];

export const steps = [
  {
    number: "01",
    image: "/scenes/step-01.jpg",
    detail: "We write down your year level, subjects, assessment dates, and goals, then choose one useful next action.",
    photoAuthor: "Kannan Shanmugam, Shanmugam Studio, Kollam",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    photoSource: "https://commons.wikimedia.org/wiki/File:Student_attending_online_class_in_Kerala.jpg",
    title: "Free consultation",
    meta: "About 30 minutes",
    text: "Tell us what is happening now, what you want to improve, and what feels difficult. You do not need to have the problem perfectly defined.",
  },
  {
    number: "02",
    image: "/scenes/step-02.jpg",
    detail: "We recommend a subject mix, session rhythm, and planning horizon. There is no pressure to continue if it is not the right fit.",
    photoAuthor: "MilamAiken",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    photoSource: "https://commons.wikimedia.org/wiki/File:MBA_students_serve_as_mentors.jpg",
    title: "Plan your support",
    meta: "Individual proposal",
    text: "We prioritise the support you need first and explain what each plan would include.",
  },
  {
    number: "03",
    image: "/scenes/step-03.jpg",
    detail: "Try the planning process, lesson format, and feedback style before deciding whether ongoing mentoring is useful.",
    photoAuthor: "Gumah1",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    photoSource: "https://commons.wikimedia.org/wiki/File:Students_writing_in_class.jpg",
    title: "Trial and review",
    meta: "1–2 weeks",
    text: "Experience a real lesson and review your first plan. You decide whether to continue.",
  },
  {
    number: "04",
    image: "/scenes/step-04.jpg",
    detail: "We update the plan as assessments, results, and university priorities change.",
    photoAuthor: "Memorial Student Center Texas A&M University",
    photoLicense: "CC BY 2.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/2.0",
    photoSource: "https://commons.wikimedia.org/wiki/File:Latino_Educators-_Mentors_that_make_a_lasting_impact_(21876283221).jpg",
    title: "Ongoing mentoring",
    meta: "Continuous review",
    text: "Regular lessons and forward planning keep your study connected to the next milestone.",
  },
];

export const faqs = [
  {
    question: "Do both plans support ATAR classes?",
    answer:
      "Yes. Both Essentials and Mentor include ATAR subject and assessment support. The Mentor plan adds deeper planning, feedback, and accountability between lessons.",
  },
  {
    question: "How do you plan ahead for each student?",
    answer:
      "We map each student's subjects, assessment calendar, current level, target marks, and longer-term pathway. The roadmap is reviewed as the school term develops.",
  },
  {
    question: "How do you teach essay writing?",
    answer:
      "We start with the question, form a defensible thesis, choose a small set of main claims, outline the paragraphs, and place evidence where it proves the point. We then revise logic and marking-criteria coverage before polishing language.",
  },
  {
    question: "Which subjects can you support?",
    answer:
      "Common areas include General Mathematics, Mathematical Methods, Specialist Mathematics, Biology, Chemistry, Physics, English, Literature, EAL, History, Business, Economics, and Legal Studies. We confirm the exact course and school requirements in the first consultation.",
  },
  {
    question: "Do you guarantee an ATAR, university offer, or scholarship?",
    answer:
      "No. This is a planning and mentoring service, not a guarantee of a particular result. The goal is to improve the quality and consistency of the student's preparation.",
  },
];
