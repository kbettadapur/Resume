export type ResumeData = {
  contact_info: {
    name: string;
    phone: string;
    email: string;
    linkedin: string;
  },
  sections: {
    summary: {
      content: string;
    },
    education: {
      title: string;
      institution: string;
      degree: string;
    },
    skills: string[][],
    experience: {
      title: string;
      companies: CompanyData[]
    },
    misc: {
      title: string;
      misc_items: string[];
    }
  }
};

export type CompanyData = {
  name: string;
  city: string;
  company_description: string;
  positions: string[];
  content: string[];
}

const data: ResumeData = {
  "contact_info": {
    "name": "KIRIN A. BETTADAPUR",
    "phone": "+1-678-620-8398 (Mobile)",
    "email": "kirinbetta97@gmail.com",
    "linkedin": "https://linkedin.com/in/kirin-bettadapur"
  },
  "sections": {
    "summary": {
      "content": "I'm a frontend developer with a strong background in building dynamic, user-friendly web applications using modern JavaScript frameworks like React and Next.js. I have extensive experience in crafting solutions that are scalable and performant. Additionally, I’m passionate about mentoring other engineers and fostering a collaborative team environment. I'm eager to expand my engineering scope and assume more ownership so I can play a key role in product direction."
    },
    "education": {
      "title": "EDUCATION",
      "institution": "GEORGIA INSTITUTE OF TECHNOLOGY - ATLANTA, GA",
      "degree": "BS Computer Science - December 2018"
    },
    "skills": [
      ["React", "Next.js", "Node"],
      ["Ember", "Svelte", "Typescript"],
      ["Webpack & Rollup", "Chrome dev tools", "Web performance"],
      ["Technical interviews"]
    ],
    "experience": {
      "title": "WORK EXPERIENCE",
      "companies": [
        {
          "name": "BLOCK (SQUARE)",
          "city": "Seattle, WA",
          "company_description": "(Providing small businesses with financial tools and services; NYSE: SQ)",
          "positions": [
            "Senior Software Engineer, Onboarding (August 2022 - Present)",
            "Software Engineer II, Onboarding (May 2021 - August 2022)",
            
          ],
          "content": [
            "Working on Square merchant onboarding (squareup.com/signup). Focused on reducing friction for merchants to take their first payment.",
            "Led a working team where I identified and drove fixes for performance bottlenecks. Lowered the legacy Ember app load time (LCP) from 18s to 7s.",
            "Contributed to the Ember → NextJS frontend migration, ensuring total feature parity and a smooth cutover from legacy to new. This effort further improved the LCP to < 4s.",
            "Owner of Block's third party integration with Woflow, our restaurant menu migrator. Led the frontend effort to allow our Woflow usage to expand to other verticals (retail and health & beauty). Diagnosed and drove flow improvements to reduce oncall noise.",
            "Led the engineering effort to route upmarket merchants (GPV > 250k) through a more tailored onboarding flow. Leveraged third party integrations Chili Piper and Drift.js, enabling merchants to schedule calls and text chat with ADRs in the browser.",
            "Conducted 100+ engineering interviews."
          ]
        },
        {
          "name": "DOCUSIGN",
          "city": "Seattle, WA",
          "company_description": "(Sending and managing electronic agreements; NASDAQ: DOCU)",
          "positions": [
            "Software Engineer II, Signing (August 2020 - May 2021)",
            "Software Engineer I, Signing (Feb 2019 - August 2020)"
          ],
          "content": [
            "Worked on the signing side of DocuSign's esignature suite developing full stack, user facing features.",
            "Modernized the Handlebars and Backbone front end stack to React and Typescript to make the experience more consistent through componentization.",
            "Implemented DocuSign for SMS, allowing signers to sign contracts through text. Involved modifying existing .NET workflows and creating stateful React interfaces to account for new SMS users.",
            "Investigated customer issues through the Azure Data Explorer with Kusto (KQL). Involved setting up logging and alerts for the deployment of new features.",
            "Acted as an intern tech-lead. Fielded technical questions and pair programmed to deliver a signature image editor by the end of the term."
          ]
        },
        {
          "name": "JPMORGAN CHASE",
          "city": "Jersey City, NJ",
          "company_description": "(Multinational investment bank & financial services; NYSE: JPM)",
          "positions": [
            "Software Engineering Intern (Summer 2018)",
          ],
          "content": [
            "Developed the Major Events of Production Calendar (MEPC) as part of the deploy team.",
            "Led two interns in the implementation of features like real-time socket updates, graphing of event statuses over time, and authentication for admin privileges. Completed with React and Springboot.",
            "Product allows application owners to track application status during a release event (updates, patches, deployment)."
          ]
        },
      ]
    },
    "misc": {
      "title": "MISC",
      "misc_items": [
        "Eagle Scout: BSA TROOP 1776 - MARIETTA, GA"
      ]
    }
  }
};

export default data;