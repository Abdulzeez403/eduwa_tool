const featuredTools = [
  {
    name: "QANDA",
    description:
      "AI-based math problem-solving and tutoring platform using OCR and step-by-step solutions.",
    tags: ["math", "OCR", "tutoring"],
    about:
      "QANDA scans math problems and provides instant, detailed solutions and personalized study content.",
    feature: [
      "OCR-based solution search",
      "Step-by-step explanations",
      "One‑on‑one tutoring",
    ],
    status: "active",
    pricing: ["Freemium", "Subscription"],
    useCase: ["Homework help", "Math study", "Concept reinforcement"],
    website_link: "https://qanda.ai/en",
    category: ["Learning Tools", "Math"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Perusall",
    description:
      "Collaborative annotation platform with AI-automated grading for reading assignments.",
    tags: ["annotation", "collaboration", "reading"],
    about:
      "Perusall enables social reading with group annotation, discussion, and built‑in AI grading.",
    feature: ["Social annotation", "AI grading", "LMS integration"],
    status: "active",
    pricing: ["Paid"],
    useCase: ["Reading comprehension", "Group study", "Class discussions"],
    website_link: "https://www.perusall.com",
    category: ["Learning Tools", "Reading"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Khanmigo (Khan Academy)",
    description:
      "AI tutor and writing coach integrated in Khan Academy for personalized learning.",
    tags: ["tutor", "writing", "AI chatbot"],
    about:
      "Khanmigo offers tutoring in subjects and essay feedback, and supports teacher tools—all via AI.",
    feature: ["Subject tutor", "Writing coach", "Teacher analytics"],
    status: "active",
    pricing: ["Subscription ($4/mo)"],
    useCase: ["Student tutoring", "Essay writing help", "Teacher assistance"],
    website_link: "https://www.khanacademy.org",
    category: ["Learning Tools", "Tutoring"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Mathspace",
    description:
      "Adaptive online math education program with personalized feedback and tutorials.",
    tags: ["math", "adaptive learning", "personalization"],
    about:
      "Mathspace adapts problems based on performance, offering hints and instant feedback.",
    feature: [
      "Adaptive questions",
      "Hints & video tutorials",
      "Progress reports",
    ],
    status: "active",
    pricing: ["Paid (school licensing)"],
    useCase: ["Math mastery", "Skill practice", "Classroom use"],
    website_link: "https://www.mathspace.co",
    category: ["Learning Tools", "Math"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Wooclap",
    description:
      "Interactive Q&A and polling tool for live lessons, now enhanced with AI question creation.",
    tags: ["interactive", "polls", "AI-generated questions"],
    about:
      "Wooclap engages students in real time with polls and automatically generated questions.",
    feature: [
      "Live polls/Q&A",
      "AI‑powered quiz creation",
      "Multilingual support",
    ],
    status: "active",
    pricing: ["Freemium", "Paid plans"],
    useCase: [
      "Class engagement",
      "Formative assessment",
      "Interactive lessons",
    ],
    website_link: "https://www.wooclap.com",
    category: ["Learning Tools", "Interactive"],
    website_logo: "",
    website_image: "",
  },
];

export const AItools = [
  {
    name: "ClassroomScreen",
    description:
      "A customizable classroom management tool with widgets to support daily teaching routines.",
    tags: ["classroom", "teacher tools", "widgets"],
    about:
      "ClassroomScreen is an all-in-one digital dashboard that helps teachers manage their classrooms more effectively. It includes interactive widgets such as timers, noise meters, polls, random name pickers, and more—all designed to streamline classroom flow, keep students focused, and reduce distractions. It allows teachers to personalize their screen to match their teaching style, whether in-person or remote.",
    feature: [
      "Timer and stopwatch",
      "Noise level monitor",
      "Polls and voting",
      "Random name picker",
      "Custom backgrounds and layouts",
    ],
    status: "active",
    pricing: ["Free", "Pro"],
    useCase: ["Classroom management", "Lesson organization", "Focus support"],
    website_link: "https://classroomscreen.com",
    category: ["Teacher Tools", "Classroom"],
    website_logo: "",
    website_image: "",
  },

  {
    name: "Socratic by Google",
    description:
      "AI-powered educational assistant that helps students with explanations and resources.",
    tags: ["homework help", "study guide", "Google"],
    about:
      "Socratic is an educational app by Google that uses AI and image recognition to help students find explanations for academic problems. It covers a range of subjects and provides visual, video, and text-based solutions from credible sources to enhance learning.",
    feature: [
      "Visual explanations",
      "Subject-based help",
      "Voice and image input",
    ],
    status: "active",
    pricing: ["Free"],
    useCase: ["Homework help", "Exam prep", "Concept clarification"],
    website_link: "https://socratic.org",
    category: ["Learning Tools", "General"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Century Tech",
    description:
      "AI-driven platform for personalized learning paths, assessments, and teacher insights.",
    tags: ["adaptive learning", "K12", "analytics"],
    about:
      "Century Tech combines cognitive neuroscience, data science, and AI to create individualized learning paths for students. It provides continuous assessment, supports teacher decision-making with real-time analytics, and enhances classroom and remote education experiences.",
    feature: [
      "Real-time performance tracking",
      "Personalized learning",
      "Teacher dashboards",
    ],
    status: "active",
    pricing: ["Subscription"],
    useCase: ["School analytics", "Student support", "Adaptive content"],
    website_link: "https://www.century.tech",
    category: ["Adaptive Learning", "K-12"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "ScribeSense",
    description:
      "AI-powered grading and feedback platform for essays and written assignments.",
    tags: ["essay grading", "feedback", "AI"],
    about:
      "ScribeSense automates the grading of essays and written assignments using AI. It provides detailed feedback on structure, grammar, and content, helping educators save time while ensuring students receive constructive critiques to improve their writing skills.",
    feature: [
      "Automated essay grading",
      "Detailed feedback",
      "Plagiarism detection",
    ],
    status: "active",
    pricing: ["Subscription"],
    useCase: ["Essay grading", "Writing improvement", "Feedback"],
    website_link: "https://scribesense.com",
    category: ["Learning Tools", "Writing"],
    website_logo: "",
    website_image: "",
  },

  {
    name: "ELSA Speak",
    description:
      "AI English pronunciation coach using speech recognition to help learners improve their speaking skills.",
    tags: ["language learning", "English", "speech AI"],
    about:
      "ELSA Speak uses cutting-edge speech recognition to analyze users' English pronunciation and fluency. The AI provides real-time feedback, tailored exercises, and performance tracking to help non-native speakers improve their spoken English and boost confidence.",
    feature: [
      "Pronunciation scoring",
      "Personalized lesson plans",
      "Progress tracking",
    ],
    status: "active",
    pricing: ["Freemium", "Premium"],
    useCase: ["Language learning", "Fluency coaching", "Accent reduction"],
    website_link: "https://www.elsaspeak.com",
    category: ["Language Learning", "Education"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Querium",
    description:
      "AI-powered STEM tutoring platform providing step-by-step support for math and science.",
    tags: ["STEM", "math", "science", "tutoring"],
    about:
      "Querium provides a personalized AI tutor designed to help students master STEM subjects, especially math and science. It delivers intelligent step-by-step tutoring with feedback and adapts the learning pace based on student needs, ideal for exam preparation and homework help.",
    feature: [
      "Step-by-step tutoring",
      "Adaptive feedback",
      "STEM-specific modules",
    ],
    status: "active",
    pricing: ["Subscription"],
    useCase: ["STEM learning", "Exam prep", "Homework help"],
    website_link: "https://www.querium.com",
    category: ["Learning Tools", "STEM"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Nuance Dragon Speech Recognition",
    description:
      "AI speech recognition tool used in education for dictation and transcription.",
    tags: ["dictation", "speech-to-text", "accessibility"],
    about:
      "Dragon by Nuance is a powerful AI-driven speech recognition software widely used in education for accessibility and productivity. It helps students and teachers dictate text, create notes, or transcribe lectures, enhancing inclusivity and learning outcomes.",
    feature: [
      "Fast speech-to-text conversion",
      "Custom vocabulary",
      "Multi-platform support",
    ],
    status: "active",
    pricing: ["Paid"],
    useCase: ["Accessibility", "Lecture transcription", "Note-taking"],
    website_link: "https://www.nuance.com/dragon.html",
    category: ["Accessibility", "Education"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Otter.ai",
    description:
      "AI-powered transcription tool for recording and analyzing lectures and discussions.",
    tags: ["transcription", "lectures", "study notes"],
    about:
      "Otter.ai automatically records and transcribes spoken content, making it ideal for students and educators. It supports note-sharing, voice identification, and live transcription, helping learners review, organize, and collaborate on educational content more effectively.",
    feature: [
      "Live transcription",
      "Speaker identification",
      "Collaboration features",
    ],
    status: "active",
    pricing: ["Freemium", "Pro"],
    useCase: ["Lecture capture", "Study aid", "Collaboration"],
    website_link: "https://otter.ai",
    category: ["Learning Tools", "Study Support"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Duolingo",
    description:
      "AI-powered language learning platform with gamified lessons in 40+ languages.",
    tags: ["language", "gamification", "learning"],
    about:
      "Duolingo is one of the most popular language learning apps, using AI to personalize lesson difficulty and optimize practice sessions. Its gamified structure keeps learners engaged while its AI evaluates progress and adjusts the curriculum accordingly.",
    feature: [
      "Gamified lessons",
      "Adaptive learning",
      "Speech and writing practice",
    ],
    status: "active",
    pricing: ["Free", "Duolingo Plus"],
    useCase: ["Language learning", "Self-paced study", "Skill building"],
    website_link: "https://www.duolingo.com",
    category: ["Language Learning", "Education"],
    website_logo: "",
    website_image: "",
  },
];
