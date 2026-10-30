export const portfolioData = {
  profile: {
    name: "Parthiban S",
    shortName: "Parthiban",
    role: "BACKEND DEVELOPER | AI & ML ENGINEERING STUDENT",
    location: "Bengaluru, India",
    statusBadge: "OPEN TO INTERNSHIPS & PLACEMENTS →",
    tagline: "✦ Turning ideas into powerful digital experiences.",
    bio: "I build reliable, scalable back-end systems and enjoy turning real-world problems into working products. Java was my first language, and I’ve been hooked on development ever since.",
    quote: "First make it work, then make it right, then make it fast.",
    quoteAuthor: "Parthiban",
    callout: "LET’S BUILD SOMETHING GREAT TOGETHER.",
    ctaPitch: "I’m looking for internship and placement opportunities at product-based companies. Let’s build something impactful.",
    email: "parthi1817@gmail.com",
    phone: "+91 63633 91534",
    phoneDisplay: "+91 63633 91534",
    linkedin: "https://www.linkedin.com/in/parthiban-s-588086379/",
    linkedinHandle: "linkedin.com/in/parthiban-s-588086379",
    github: "https://github.com/parthi1817",
    githubHandle: "github.com/parthi1817",
  },

  stats: [
    { label: "CLASS 10 (ICSE)", value: 92, suffix: "%", subtext: "St. Vincent Pallotti School" },
    { label: "CLASS 12 (PU BOARD)", value: 93, suffix: "%", subtext: "New Horizon · KCET 23k" },
    { label: "PROJECTS BUILT", value: 3, suffix: "+", subtext: "Hackathons & Expos" },
  ],

  projects: [
    {
      id: "geore",
      index: "01",
      title: "GEORE",
      subtitle: "DISASTER MAPPING & HEAT-MAP",
      category: "Backend & Geo-Mapping",
      badge: "Smart India Hackathon",
      desc: "Built for our internal Smart India Hackathon. During floods, officers often can’t reach affected areas. Geore lets them search an area, highlights the flooded region and shows a heat-map. The public can also ask about any area and get an answer within 12 seconds.",
      extendedDesc: "Engineered during an intense Smart India Hackathon sprint. Geore serves dual mission-critical purposes: an administrative operations dashboard allowing disaster management officers to track flood perimeters and density heat-maps in real-time, plus a rapid public query interface providing civilians verified safety intelligence with a sub-12-second SLA.",
      features: [
        "Interactive flood perimeter mapping and risk density heat-maps",
        "Sub-12 second response latency for public civilian status queries",
        "Rescue route assistance and coordinate-based danger zones",
        "Designed and pitched for Smart India Hackathon (SIH) internal qualifier"
      ],
      tech: ["Java", "SQL", "Disaster Mapping APIs", "Algorithmic Routing", "Heat-Map Algorithms"],
      github: "https://github.com/parthi1817/Geore.git",
      status: "Hackathon Qualifier Prototype",
      accent: "from-red-950/80 via-neutral-900 to-black"
    },
    {
      id: "with-love",
      index: "02",
      title: "WITH LOVE",
      subtitle: "AR 3D HEART HEALTH VISUALIZER",
      category: "AR / 3D & Healthcare",
      badge: "24h AR Hackathon",
      desc: "Built in a 24-hour AR hackathon by the AIFI Club for people who can’t read lab reports. The patient enters their results and sees a 3D heart: red (danger, fast beat), yellow (moderate, slightly faster) or green (healthy, normal beat).",
      extendedDesc: "Developed from concept to functional demo within 24 hours at the AIFI Club AR Hackathon. With Love democratizes complex cardiovascular lab metrics into immediate visual feedback. Instead of deciphering dense biochemical ranges, users watch a responsive 3D biological heart pulse and shift color dynamically based on their inputted vital parameters.",
      features: [
        "Dynamic 3D biological heart model with real-time responsive pulse rates",
        "Color-coded tri-state triage: Green (Optimal), Yellow (Elevated), Red (Critical)",
        "Accessibility-driven UI for patients with low medical or numerical literacy",
        "Completed within a 24-hour rapid prototyping hackathon sprint"
      ],
      tech: ["Augmented Reality", "3D Visualization", "JavaScript", "Medical Logic Engine", "Responsive UI"],
      github: "https://github.com/ANTOJERRIN/Withlove101.git",
      status: "24H AR Hackathon Prototype",
      accent: "from-rose-950/80 via-neutral-900 to-black"
    },
    {
      id: "iot-cansat",
      index: "03",
      title: "IOT CANSAT",
      subtitle: "TEMPERATURE & ALTITUDE SATELLITE",
      category: "IoT & Embedded Systems",
      badge: "IoT Expo Project",
      desc: "Built with my team during an IoT expo: a CanSat that measures temperature and altitude through the atmosphere.",
      extendedDesc: "Collaborative aerospace-inspired hardware and telemetry system. Built in a standard soda-can form factor, the CanSat is equipped with atmospheric sensing payloads that transmit barometric pressure, temperature, and calculated altitude profiles to a ground monitoring station during descent.",
      features: [
        "Atmospheric sensor fusion measuring real-time ambient temp and barometric pressure",
        "Altitude profile calculation and telemetry data logging",
        "Compact modular can-format payload structure",
        "Showcased live to faculty and tech peers during university IoT Expo"
      ],
      tech: ["C / C++", "IoT Telemetry", "Embedded Sensors", "Serial Communication", "Hardware Prototyping"],
      github: "https://github.com/Jack26-bit/How-to-build-a-Cansat.git",
      status: "IoT Expo Featured Project",
      accent: "from-zinc-900 via-neutral-900 to-black"
    }
  ],

  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      tag: "PRESENT · 2nd Year (3rd Sem)",
      institution: "Engineering College, Bengaluru",
      period: "2024 - 2028 (Expected)",
      details: "Specializing in intelligent backend architectures, data structures, algorithm design, and applied machine learning.",
      isCurrent: true
    },
    {
      degree: "Pre-University (Class 12)",
      tag: "93% · KCET Rank 23000",
      institution: "New Horizon PU College",
      period: "2022 - 2024",
      details: "PCMC stream (Physics, Chemistry, Mathematics, Computer Science). Secured 93% distinction and top-tier rank in Karnataka CET.",
      isCurrent: false
    },
    {
      degree: "ICSE (Class 10)",
      tag: "92% Distinction",
      institution: "St. Vincent Pallotti School",
      period: "Completed 2022",
      details: "Comprehensive foundation with Computer Applications (Core Java programming). Sparked the passion for software development.",
      isCurrent: false
    }
  ],

  skills: {
    primary: [
      { name: "Java", highlight: true, note: "First love & core strength" },
      { name: "SQL", highlight: true, note: "Complex queries, relational models" },
      { name: "Database Mgmt", highlight: false, note: "Schema design & ACID guarantees" },
      { name: "VS Code", highlight: false, note: "Primary IDE & debugging workflows" },
      { name: "Debugging", highlight: false, note: "Root-cause analysis & optimization" },
      { name: "Algorithmic Thinking", highlight: true, note: "Data structures & problem solving" },
      { name: "Team Leadership", highlight: false, note: "Hackathons & project coordination" }
    ],
    categories: [
      {
        title: "Languages & Core",
        items: ["Java (Core & OOP)", "SQL", "Python (Basics)", "C / C++ (Basics)"]
      },
      {
        title: "Backend & Systems",
        items: ["Relational Database Design", "Database Mgmt (DBMS)", "Algorithmic Thinking", "Data Structures"]
      },
      {
        title: "Tools & Methodologies",
        items: ["VS Code", "Git / GitHub", "Debugging & Profiling", "Team Leadership"]
      }
    ]
  },

  process: [
    {
      step: "01",
      title: "UNDERSTAND",
      summary: "Break down the problem and requirements.",
      details: "Deconstruct the core requirements, question assumptions, evaluate user constraints, and establish clear input-output contracts."
    },
    {
      step: "02",
      title: "PLAN",
      summary: "Design the logic, data and architecture.",
      details: "Architect relational schemas, map data flow diagrams, select appropriate data structures, and outline modular component boundaries."
    },
    {
      step: "03",
      title: "BUILD",
      summary: "Write clean, efficient code.",
      details: "Implement readable, self-documenting code with disciplined OOP principles, strong type safety, and clean separation of concerns."
    },
    {
      step: "04",
      title: "TEST",
      summary: "Debug and optimize.",
      details: "Stress-test edge cases, trace execution paths, profile performance bottlenecks, and refactor for latency and memory efficiency."
    },
    {
      step: "05",
      title: "DELIVER",
      summary: "Ship and iterate.",
      details: "Deploy dependable software, gather practical feedback, monitor performance in production, and continuously iterate."
    }
  ]
};

