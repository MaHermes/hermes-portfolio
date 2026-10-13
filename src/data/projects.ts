
export type Project = {
    slug: string
    title: string
    subtitle: string
    description: string
    role?: string
    technologies?: string[]
    image?: string
    highlights?: string
    links?: {
        label: string;
        url: string;
      }[];
  }
  
  export const projects: Project[] = [
    {
      slug: "ancient-airlines",
      title: "Ancient Airlines",
      subtitle: "Personal · Unreal Engine",
      description:
        "A physics-based flight simulator developed with Unreal Engine.",
      technologies: ["Unreal Engine"],
      image: "/images/projects/ancient-airlines.jpg",
    },
    {
      slug: "eldrador",
      title: "Eldrador Creatures",
      subtitle: "Professional · Unity · Multi-platform",
      description:
        "A multi-platform action game developed for Steam, PlayStation, Nintendo Switch, Android and iOS.",
      role: "Lead Programmer",
      technologies: [
        "Unity",
        "C#",
        "Nintendo Switch",
        "PlayStation 4",
        "Steam",
        "Android",
        "iOS",
        "Custom Level Editor",
      ],
      image: "/images/projects/eldrador.jpg",
      highlights:
        "One of my personal projects was a custom level editor initially developed while working on my own Unity game. The tool later found practical use in professional development, helping to speed up level creation for Eldrador Creatures.",
    },
    {
        slug: "the-little-trashmaid",
        title: "The Little Trashmaid",
        subtitle: "Private · Unity · Mobile",
        description:
        "A collection of mobile mini-games inspired by the webcomic The Little Trashmaid, combining playful mechanics, progression and story elements.",
        role: "Game Design & Development",
        technologies: [
        "Unity",
        "C#",
        "Android",
        "iOS",
        "Game Design",
        ],
        image: "/images/projects/trashmaid.png",
        highlights:
        "The game combines an original memory-game concept with themed adaptations of jigsaw puzzles, hidden-object gameplay, spot-the-difference challenges and mechanics inspired by Cut the Rope.",
    },
    {
        slug: "memblox",
        title: "Memblox",
        subtitle: "Private · React Native · Firebase",
        description:
        "A modular organizer app that lets users create their own pages from a wide range of interactive components and tools.",
        role: "Concept, Design & Development",
        technologies: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Expo",
        "Android",
        "iOS",
        ],
        image: "/images/projects/memblox.jpg",
        highlights:
        "Pages can be composed from components such as text, images, documents, drawings, audio recordings, checklists, tables, timers, maps and more. Firebase synchronizes data across devices, while configurable page behaviours support different use cases.",
    },
    {
        slug: "close-up-together",
        title: "Close Up Together",
        subtitle: "Collaborative Video Learning",
        description:
          "A collaborative learning platform developed as part of my Master's thesis. Students can watch learning videos together, annotate content and work on shared documents. The platform uses CSCL scripts to structure collaborative learning scenarios in which two students alternate between explaining and learning roles, expanding on the video content together.",
        role: "Concept, Design & Development",
        technologies: [
          "React",
          "Node.js",
          "MongoDB",
          "Firebase Realtime Database",
          "Firepad",
          "CSCL"
        ],
        highlights: 
          "Synchronous video learning, structured peer-teaching with alternating roles, collaborative annotations and shared documents.",
          links: [
            {
              label: "Master's Thesis — FernUniversität Hagen",
              url: "https://www.fernuni-hagen.de/ks/lehre/abschlussarbeiten/seidel_2018_Markus-Hermes.shtml"
            },
            {
              label: "IEEE Publication (2024)",
              url: "https://ieeexplore.ieee.org/document/10645901"
            }
          ]
        
      },
      {
        slug: "qr-contact",
        title: "QR Contact",
        subtitle: "Privacy-focused Contact System",
        description:
          "QR Contact is a web application that makes it easy to get in touch with me when a personal item is lost or an unexpected situation occurs. A QR code opens a contact form, allowing someone to send me a message without needing my phone number or email address.",
        role: "Concept, Design & Development",
        technologies: [
          "React",
          "Node.js",
          "Web Development"
        ],
        highlights:
          "Custom contact workflow, QR-code-based access, privacy-conscious communication and self-hosted deployment."
      },
      {
        slug: "coptaxi",
        title: "Coptaxi",
        subtitle: "Personal · Unity",
        description:
          "A space taxi game developed with Unity, including a custom level editor.",
        technologies: ["Unity", "Custom level editor"],
        image: "/images/projects/coptaxi.jpg",
      },
      {
        slug: "flash-games",
        title: "Flash Games",
        subtitle: "Indie · Flash",
        description:
          "A collection of indie games created with Flash, covering game design and development.",
        technologies: ["Flash", "Game design"],
        image: "/images/projects/flash-games.jpg",
      }

  ]
  