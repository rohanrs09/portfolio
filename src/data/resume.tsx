import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// "Hello is this you? How are you doing? have tyou loked into the tiume? only 8 mins left are you're still workuing ion tyhjios? you need to be working on the this as qwell right?"

export const DATA = {
  name: "Rohan",
  initials: "rohan",
  url: "https://rohanfolio.com",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "I'm a full-stack developer that loves building products and web apps that can impact millions of lives.",
  summary:
    "Hi,I am Rohan, 20 years old.I currently pursuing Bachelor of engineering in Information Technology.Passionate about technology.I am interested Web development dedicated to crafting efficient and user-friendly digital experiences. Innovator in coding, design, and problem-solving. working in web technologies and Ui / Ux design, delivering quality work.",
  avatarUrl: "/pc.png",
  arrow: "/arrow.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shelkerohan7309@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rohanrs09",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohan-shelke-bba43b22b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RohanSh52817293",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.appopener.com/yt/hwajl20wa",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ahen ",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Remote",
      logoUrl: "/work1.svg",
      start: "May 2021",
      end: "Oct 2022",
      description: "Improved app usability, performance, and user experience for seamless bookings.",
    },
    {
      company: "CodeSoft Virtual Internship",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/work2.svg",
      start: "January 2023",
      end: "April 2023",
      description: "Finished assigned development tasks successfully.",
    },
    {
      company: "App Club Member",
      href: "#",
      badges: [],
      location: "Pune",
      title: "Team Member",
      logoUrl: "/work3.svg",
      start: "January 2021",
      end: "April 2023",
      description: "Managed and organized 3+ events for the App Club, ensuring smooth execution and positive feedback.",
    },
    {
      company: "Badminton Sport",
      href: "#",
      badges: [],
      location: "Pune",
      title: "Game",
      logoUrl: "/work4.svg",
      start: "before",
      end: "Present",
      description: "Played badminton regularly to stay fit and improve physical health.",
    },
  ],

  projects: [
    {
      title: " AI Content Generator",
      href: "https://github.com/rohanrs09/ai-content-generator",
      dates: "Jun 2024 - Present",
      active: true,
      description:
        "Developed an AI content platform with user authentication, rich text editing, automated credit tracking, and content history management.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "AceternityUI",
        "Gemini Api",
        "Clerk",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rohanrs09/ai-content-generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "aicontent.mp4",
    },
    {
      title: "Movie Recommendation App ",
      href: "https://movixrs.netlify.app/",
      dates: "feb 2024 - mar 2024",
      active: true,
      description:
        "Movix is a React-based app for exploring movies/TV shows, offering search, sorting, detailed info, trailers, and smart recommendations.",
      technologies: ["HTML", "CSS", "JavaScript", "TMDB-API","ReactJS"],
      links: [
        {
          type: "App",
          href: "https://movixrs.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rohanrs09/movix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "movix.mp4",
    },
    {
      title: "A HealthCare Management System",
      href: "https://github.com/rohanrs09/carepulse",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Built a healthcare app with Next.js for patient management, appointment booking, admin controls, SMS notifications, and secure, scalable performance.",
      technologies: [
        "Next.js",
        "Shadcn UI",
        "Appwrite",
        "TailwindCSS",
        "Twilio",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rohanrs09/carepulse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "care.mp4",
    },
    {
      title: "ECOMZY Shopping App",
      href: "https://shopify-beryl-nine.vercel.app/",
      dates: "dec 2023- jan 2024",
      active: true,
      description:
        "Share more about your project work here. Share more about your project work here. Share more about your project work here.",
      technologies: ["React", "Redux", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://shopify-beryl-nine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rohanrs09/ShopApp",
          icon: <Icons.github className="size-3" />, 
        }
      ],
      image: "",
      video: "shop.mp4",
    },
  ],
} as const;
