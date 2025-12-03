import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaChartBar } from "react-icons/fa";

export const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "Building responsive and dynamic websites tailored to your business needs.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Creating smooth and powerful mobile applications for Android and iOS platforms.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphics Design",
    description: "Designing visually stunning graphics, logos, and branding materials.",
  },
  {
    icon: <FaChartBar />,
    title: "Video Editing",
    description: "Creating engaging video content with clean cuts, smooth transitions, and story-focused editing.",
  },
];

export const SKILLS = [
  {
    skill: "React.js",
    description:
      "Expertise in building SPAs with React, managing state, and using hooks.",
    percentage: "94%",
  },
  {
    skill: "Next.js",
    description:
      "Experienced in building production-ready React apps with Next.js, including routing, data fetching, and SEO-friendly pages.",
    percentage: "90%",
  },
  {
    skill: "Node.js",
    description:
      "Skilled in building scalable backend services using Node.js runtime.",
    percentage: "91%",
  },
  {
    skill: "Express.js",
    description:
      "Proficient in creating REST APIs and middleware architecture with Express.",
    percentage: "90%",
  },
  {
    skill: "Python programming",
    description:
      "Capable of writing efficient Python code for scripting and backend services.",
    percentage: "94%",
  },
  {
    skill: "Flutter",
    description:
      "Experience building cross-platform mobile applications using Flutter and Dart, focusing on smooth UIs and performant client-side logic.",
    percentage: "85%",
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Intern Full stack Developer in AMU ICTC",
    company: "Arba Minch University ICTC",
    date: "July 2022 - Oct 2022",
    resposibilities: [
      "Led a team of Full Stack developers in the overall development of web based system",
      "Implemented advanced CSS animations and transitions to enhance the overall user experience",
      "Implemented advanced javascript for the event handling",
      "Implemented advanced PHP to develop backend for the system we have developed",
    ],
  },

  {
    title: "Junior Application Developer Officer",
    company: "Amhara Bank S.C",
    date: "Nov 2023 - Present",
    responsibilities: [
      "Develops, tests, and maintains software applications and system modules to ensure smooth data flow across all departments.,"+
      "Writes clean, scalable, and efficient code while implementing best practices in debugging, optimization, and version control.,"+
      "Builds and integrates APIs, services, and backend logic to support new system features and enhance existing functionality.,"+
      "Designs and implements modern system architectures, including modular and scalable components that support long-term system growth."
    ],

  },
];

export const EDUCATION = [
  {
    title: "HIGHER EDUCATION",
    organization: "Arba Minch University",
    date: "Sept 2019 - July 2023",
    field: "Bachelor's Degree in Software Engineering",
    description:
      "Completed a comprehensive five-year undergraduate program in Software Engineering, where I gained strong foundations in software development, systems analysis, database management, and web and mobile application development. Participated in various academic projects, team-based assignments, and individual research work that strengthened my problem-solving and coding skills. The program also emphasized real-world application of software engineering principles and introduced me to agile methodologies and emerging technologies.",
  },
];

export const PROJECTS = [
  
  {
    title: "SimuniMart Ecommerce Platform",
    icon: "./assets/images/simuni.png",
    link: "https://simunimart.com",
    linkLabel: "Simuni Mart (simunimart.com)",
    resposibilities: [
      "Production-ready ecommerce platform for SimuniMart with real customers and orders.",
      "Modern product catalog, cart, checkout, and order management flows optimized for usability.",
      "Secure authentication, role-based access for admins, and integration with payment and fulfillment workflows.",
      "Responsive UX tailored for mobile and desktop shoppers with performance-focused implementation.",
    ],
  },
  {
    title: "Web Based CV Analysis and Eligibility Prediction System",
    icon: "./assets/images/python_bootstrap.jpeg",
    link: "https://github.com/ZekiKobe/Web_based_CV_analysis_and_ellegibility_prediction_system_using_django",
    resposibilities: [
      "Automated parsing of CV data.",
      "NLP-driven eligibility predictions for job roles.",
      "Actionable CV improvement feedback for candidates.",
      "User and admin dashboards for managing profiles and job listings.",
    ],
  },

  // {
  //   title: "Ecommerce Website (practice project)",
  //   icon: "./assets/images/ecommerce.png",
  //   link: "https://github.com/ZekiKobe/simple_ecommrce_website",
  //   resposibilities: [
  //     "Dynamic product catalog with search and filter capabilities.",
  //     "Secure user authentication, shopping cart, and checkout process.",
  //     "Responsive design for all devices, integrated payment system, and admin panel for order management.",
  //     "Suitable integration with popular stripe payment gateway",
  //   ],
  // },


  {
    title: "Clearance Management System",
    icon: "./assets/images/cs1.png",
    link: "https://github.com/ZekiKobe/Clearance_amagement_system_HC",
    resposibilities: [
      "Secure user management for students and staff.",
      "Document upload and approval system.",
      "Real-time updates and notifications on clearance status.",
      "With inclusions of digital signatures for the approvals of clearance in every level",
    ],
  },

  {
    title: "Simple To do app using Node Js",
    icon: "./assets/images/nodejs.png",
    link: "https://github.com/ZekiKobe/Todo_app_using_node-js/tree/master",
    resposibilities: [
      "Intuitive task entry: Quickly add new tasks with a simple interface.",
      "Real-time task editing and deletion: Easily update or remove tasks as needed.",
      "Responsive design: Fully accessible on both desktop and mobile devices.",
      "Developed with popular JS library called Node Js",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Surafel Alemu",
    title: "Application Developer",
    photo: "/assets/images/sura.png",
    profession: "Application Developer Officer",
    description:
      "It has been a pleasure working with Zekarias during their time in web development. Throughout the program, " +
      "they demonstrated exceptional dedication, quick learning ability, and a genuine passion for coding." +
      "From building responsive layouts with HTML and CSS to implementing dynamic functionality with JavaScript," +
      "Zekariyas consistently delivered high-quality work. Their strong attention to detail, problem-solving skills, " +
      "and continuous drive for improvement were evident in every project.",
  },
  {
    name: "Makite Desta",
    title: "Application Developer",
    photo: "/assets/images/makite.png",
    profession: "Application Developer Officer",
    description:
      "Collaborating with Zekariyas has been a rewarding experience. They bring a rare combination of technical " +
      "expertise, creativity, and strong teamwork to every task. Whether working on front-end interfaces," +
      "back-end logic, or performance optimization, Zekarias approaches challenges with professionalism and efficiency." +
      "Their ability to troubleshoot issues and adapt quickly to new technologies makes them an invaluable asset to any " +
      "development team. I have no doubt that Zekariyas has a bright future in web development and" +
      "I highly recommend them for any related role",
  },
  {
    name: "Mekuriya Tesfaye ",
    title: "Database administrator",
    photo: "/assets/images/mekuriya1.png",
    profession: "Database administrator Officer",
    description:
      "Zekarias demonstrated outstanding technical skills and a deep understanding of software development at Amhara Bank. He excelled in crafting robust solutions and optimizing performance, particularly during the Lakehouse building. His collaborative approach and strong problem-solving ability made him an invaluable asset to our team.",
  }
  // {
  //   name: "Aschale Tikuye ",
  //   title: "Senior Application Developer",
  //   photo: "/assets/images/asche.jpg",
  //   profession: "Senior Application developer",
  //   description:
  //     "Zekarias consistently delivers high-quality code and brings strong technical insights to the table. They’re self-motivated, quick to adapt, and always eager to take on new challenges. A true professional.",
  // },
];
