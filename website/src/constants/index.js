import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Science",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Deep Learning",
    icon: backend,
  },
  {
    title: "Content Creating",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const teammembers = [
  {
    name: "Kunal Agrawal",
    designation: "President",
    image: "team-member1.jpg",
    linkedin: "https://www.linkedin.com/in/kunalragrawal/",
  },
  {
    name: "Aman Tiwari",
    designation: "Vice-President",
    image: "team-member2.jpeg",
    linkedin: "https://www.linkedin.com/in/aman-tiwari-603245200/",
  },
  {
    name: "Ganesh Utla",
    designation: "Secretary",
    image: "team-member3.jpg",
    linkedin: "https://www.linkedin.com/in/ganesh-utla-888abc/",
  },
  {
    name: "Vaibhav Ashta",
    designation: "Technical Head",
    image: "team-member4.jpeg",
    linkedin: "https://www.linkedin.com/in/vaibhav-ashta/",
  },
  {
    name: "Lavanya Bhat",
    designation: "Marketing Head",
    image: "team-member5.jpeg",
    linkedin: "https://www.linkedin.com/in/lavanya-bhat-a73868205/",
  },
  {
    name: "Abhir Iyer",
    designation: "Social Media Head",
    image: "team-member6.jpg",
    linkedin: "https://www.linkedin.com/in/abhir-iyer/",
  },
  {
    name: "Vishal Gupta",
    designation: "Event Manager",
    image: "team-member7.jpg",
    linkedin: "https://www.linkedin.com/in/vishal-gupta-403132209/",
  },
  {
    name: "Deexith Madas",
    designation: "Treasurer",
    image: "team-member8.jpg",
    linkedin: "https://www.linkedin.com/in/deexith-madas-625283208/",
  },
  {
    name: "Keval Waghate",
    designation: "Publication Head",
    image: "team-member9.jpeg",
    linkedin: "https://www.linkedin.com/in/keval-waghate-4254a0216/",
  },
  {
    name: "Sakshi Maurya",
    designation: "Jt Marketing Head",
    image: "team-member10.jpg",
    linkedin: "https://www.linkedin.com/in/sakshi-maurya-a495a7216/",
  },
  {
    name: "Ananta Pandey",
    designation: "Jt Publication Head",
    image: "team-member11.jpg",
    linkedin: "https://www.linkedin.com/in/ananta-s-k-149aa5264/",
  },
  {
    name: "Vrushali Sandam",
    designation: "Jt Technical Head",
    image: "team-member12.jpg",
    linkedin: "https://www.linkedin.com/in/vrushali-sandam-283054253/",
  },
];

const projects = [
  {
    name: "Git & GitHub Workshop",
    description:
      "For software developers, Git plays a very vital role in managing the codebase and collaborating with others. Our speaker Mr. Dhiraj Chauhan took a very hands-on workshop where participants were given an in-depth overview of Git. The session wrapped up with basic usage of GitHub by tasking participants to commit on First Contribution Board.",
    tags: [
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
      {
        name: "firstcommit",
        color: "pink-text-gradient",
      },
    ],
    image: "/mbc1.jpeg",
    linkedin: "https://www.linkedin.com/in/cdhiraj40/",
  },
  {
    name: "CP Workshop",
    description:
      "Mr. Jwala Chorasiya, the speaker of the Workshop, expressed his view for Competitive Programming, he also tackled some recent questions from the CodeChef platform and helped students understand the approach while solving them & the intuition to successfully solve these problems.",
    tags: [
      {
        name: "cp",
        color: "blue-text-gradient",
      },
      {
        name: "codechef",
        color: "green-text-gradient",
      },
      {
        name: "timecomplexity",
        color: "pink-text-gradient",
      },
    ],
    image: "mbc2.jpeg",
    linkedin: "https://www.linkedin.com/in/jwala-chorasiya-34048b1b2"
  },
  {
    name: "MLH Fellowship Seminar",
    description:
      "Our speaker Mr. Asjad Khan described his journey and experience cracking the fellowship. He gave a detailed guide on how to apply, stages in MLH Fellowship and further briefed about do's & don't so that participants are better prepared for this opportunity.",
    tags: [
      {
        name: "mlh",
        color: "blue-text-gradient",
      },
      {
        name: "fellowship",
        color: "green-text-gradient",
      },
      {
        name: "hacks",
        color: "pink-text-gradient",
      }
    ],
    image: "/mbc3.jpeg",
    linkedin: "https://www.linkedin.com/in/asjad2001/",
  },
  {
    name: "Kaggle Expert Session",
    description:
      "Our speaker Ms. Khushi Shah described her journey and experience in pursuing Data Science. She gave a detailed guide on how to apply for internships in AI-based Companies. She next detailed on Kaggle and step by step guide to become a Kaggle Expert 3x.",
    tags: [
      {
        name: "kaggle",
        color: "blue-text-gradient",
      },
      {
        name: "datascience",
        color: "green-text-gradient",
      },
      {
        name: "internships",
        color: "pink-text-gradient",
      },
    ],
    image: "/mbc4.jpeg",
    linkedin: "https://www.linkedin.com/in/khushishah1/",
  },
  {
    name: "Git & GitHub Workshop - II",
    description:
      "The session was mainly geared towards introducing Git to SE. Our speaker, Mr. Keval Waghate kick started the session by explaining basic terminologies and commands. He skillfully demoed all these commands with brief explanation.",
    tags: [
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
      {
        name: "commands",
        color: "pink-text-gradient",
      },
    ],
    image: "/mbc5.jpeg",
    linkedin: "https://www.linkedin.com/in/keval-waghate-4254a0216/",
  },
  {
    name: "Kaggle Competitions Workshop",
    description:
      "Our speaker Mr. Debarshi Chanda briefed us about Kaggle Competitions, its challenges and the various tiers/ranks available. He also highlighted best practices (Notebook Flow/Structure, Models, EDA & more) while developing models and solutions.",
    tags: [
      {
        name: "kaggle",
        color: "blue-text-gradient",
      },
      {
        name: "datascience",
        color: "green-text-gradient",
      },
      {
        name: "eda",
        color: "pink-text-gradient",
      }
    ],
    image: "/mbc6.jpeg",
    linkedin: "https://www.linkedin.com/in/debarshi-chanda/",
  },
  {
    name: "Kaggle Notebooks & Discussion",
    description:
      "The workshop was hosted by Mr. Somesh Fengade, whose expertise and passion for the topic were evident throughout the presentation. We appreciate the time he took to answer questions from the audience, as it provided us with additional clarity and understanding.",
    tags: [
      {
        name: "kaggle",
        color: "blue-text-gradient",
      },
      {
        name: "datascience",
        color: "green-text-gradient",
      },
      {
        name: "discussion",
        color: "pink-text-gradient",
      }
    ],
    image: "/mbc7.jpeg",
    linkedin: "https://www.linkedin.com/in/somesh-9188/",
  },
  {
    name: "EDA Workshop",
    description:
      "The workshop was hosted by Mr. Hrishikesh Yadav, whose expertise and passion for the topic were evident throughout the presentation. We appreciate the time he took to answer questions from the audience, as it provided us with additional clarity and understanding.",
    tags: [
      {
        name: "kaggle",
        color: "blue-text-gradient",
      },
      {
        name: "datascience",
        color: "green-text-gradient",
      },
      {
        name: "eda",
        color: "pink-text-gradient",
      },
    ],
    image: "/mbc8.jpeg",
    linkedin: "https://www.linkedin.com/in/hrishikesh-yadav-aa748121a/",
  },
  {
    name: "DL Hackathon",
    description:
      "Congratulations to the winning teams of our Inter Department Deep Learning Hackathon! Your hard work, dedication, and innovation truly paid off. We're proud to have witnessed such impressive feats of machine learning and artificial intelligence. Thank you to all the participants for making this event a success!",
    tags: [
      {
        name: "deeplearning",
        color: "blue-text-gradient",
      },
      {
        name: "hackathon",
        color: "green-text-gradient",
      },
      {
        name: "innovation",
        color: "pink-text-gradient",
      },
    ],
    image: "/mbc9.jpeg",
    linkedin: "https://www.linkedin.com/posts/mind-benders-tcet_deeplearninghackathon-machinelearning-artificialintelligence-activity-7055346293618933760-Gtg1?utm_source=share&utm_medium=member_desktop",
  },
];

export { services, technologies, experiences, teammembers, projects };
