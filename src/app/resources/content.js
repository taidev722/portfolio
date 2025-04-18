import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Tai",
  lastName: "Nguyen",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Front End Developer",
  avatar: "/images/avatar.jpg",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Khmer"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <div className="space-y-8">
      <NewsletterCard
        title="The Future of Frontend: Trends to Watch in 2024"
        summary="Explore the biggest trends shaping frontend development this year."
        cta={[
          "1. Which trend excites you most? Reply to this email!",
          "2. Want to deep dive on one of these? Let me know!",
        ]}
        trends={[
          "React Server Components (RSC)",
          "WebAssembly (WASM) for high-performance apps",
          "AI-powered UI generation tools",
          "Edge computing & CDN-powered frontends",
          "State management evolution",
        ]}
      />
    </div>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/stackmaster92",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:taidev722@gmail.com.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Front End Developer</>,
  subline: (
    <>
      I'm Tai, a Results-driven Senior Front End Developer <br /> with proven
      track record of building high-performance websites
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/taidev722",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Tai is a California-based Senior Frontend Developer with a passion for
        transforming complex challenges into scalable, high-performance frontend
        solutions. His work spans digital design, interactive experiences, and
        the convergence of user interfaces and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "AcuityMD",
        timeframe: "7/2022 - 1/2025",
        role: "Senior Front End Developer",
        achievements: [
          <>
            Developed a furnishing and apartment design platform using React.
          </>,
          <>
            Implemented WCAG 2.1-compliant UI components that ensure a fully
            accessible design experience for users.
          </>,
          <>
            Led the update of websites to align with new marketing strategies
            and collaborated closely with designers to enhance styling details.
          </>,
          <>
            Scaled state management using Redux and optimized data flow to boost
            performance and maintainability.
          </>,
          <>
            Translated complex technical concepts into clear insights for
            non-technical stakeholders.
          </>,
          <>
            Containerized React apps with Docker and automated deployments via
            CI/CD, accelerating development workflows.
          </>,
          <>
            Wrote unit/integration tests (Cypress, Jest) to enhance UI
            reliability and platform stability.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Isovalent",
        timeframe: "2/2019 - 6/2022",
        role: "React Front End Developer",
        achievements: [
          <>
            Developed robust test suites for search, filtering and
            recommendation systems to increase reliability and test coverage.{" "}
          </>,
          <>
            Optimized a complex React component and reduced re-renders to
            improve app performance.
          </>,
          <>
            Collaborated with UX/UI designers to translate wireframes into
            functional prototypes to ensure brand consistency and accelerating
            iterative feedback cycles.
          </>,
          <>
            Engineered the Trail Advisor platform with Next.js and implemented
            asynchronous API handling and SSR to boost performance
          </>,
          <>
            Implemented WCAG-compliant accessibility standards across all UI
            components to create inclusive experiences for users with diverse
            abilities.
          </>,
          <>
            Delivered pixel-perfect UIs by meticulously translating Figma
            designs to code.
          </>,
          <>
            Optimized database performance by refactoring legacy SQL queries to
            reduce query execution time.
          </>,
          <>
            Boosted rendering performance via async techniques and streamlined
            page transitions.
          </>,
        ],
        images: [],
      },
      {
        company: "Eon",
        timeframe: "4/2017 - 1/2019",
        role: "Front End Developer",
        achievements: [
          <>
            Implemented a fluid grid system and flexible layouts using Grid,
            Flexbox and media queries to ensure responsiveness across various
            screen sizes and devices.
          </>,
          <>
            Developed and delivered MVP application for analyzing credit card
            points
          </>,
          <>
            Developed a complex, JSON-based form solution that took care of form
            generation for the client and validation on both back-end and client
            side
          </>,
          <>
            Developed Netflix-like media platform using React, Next.Js based on
            the Figma designs.
          </>,
          <>
            Refactored legacy components and optimized HTML structure to improve
            code readability and maintainability.
          </>,
          <>
            Performed rigorous cross-browser testing and resolved
            inconsistencies in HTML semantics, CSS styling and responsive
            breakpoints.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Hanoi Universiy of Science and Technology",
        description: <>Studied Computer Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

function NewsletterCard({ title, summary, cta, trends }) {
  return (
    <div
      style={{
        maxWidth: "42rem", // max-w-2xl
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1.5rem", // p-6
        borderRadius: "0.75rem", // rounded-xl
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // shadow-md
        transition: "box-shadow 0.3s ease", // transition-shadow
        cursor: "pointer",
        ":hover": {
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // hover:shadow-lg
        },
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem", // text-2xl
          fontWeight: "700", // font-bold
          marginBottom: "0.5rem", // mb-2
        }}
      >
        {title}
      </h2>

      <p
        style={{
          marginBottom: "1rem", // mb-4
        }}
      >
        {summary}
      </p>

      {trends && (
        <ul
          style={{
            marginBottom: "1rem", // mb-4
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            paddingLeft: "3rem",
          }}
        >
          {trends.map((trend, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start", // items-start
              }}
            >
              <span
                style={{
                  marginRight: "0.5rem", // mr-2
                }}
              >
                ✓
              </span>
              <span style={{}}>{trend}</span>
            </li>
          ))}
        </ul>
      )}

      {cta && (
        <ul
          style={{
            marginBottom: "1rem", // mb-4
            display: "flex",
            flexDirection: "column",
          }}
        >
          {cta.map((que, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start", // items-start
              }}
            >
              <span
                style={{
                  fontStyle: "italic",
                }}
              >
                {que}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { person, social, newsletter, home, about, blog, work, gallery };
