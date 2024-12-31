export type ResumeData = {
  contact_info: {
    name: string;
    phone: string;
    email: string;
    linkedin: string;
  },
  sections: {
    education: {
      title: string;
      institution: string;
      degree: string;
    },
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
    "education": {
      "title": "EDUCATION",
      "institution": "GEORGIA INSTITUTE OF TECHNOLOGY - ATLANTA, GA",
      "degree": "BS Computer Science - December 2018"
    },
    "experience": {
      "title": "WORK EXPERIENCE",
      "companies": [
        {
          "name": "BLOCK",
          "city": "Seattle, WA",
          "company_description": "(Sending and managing electronic agreements; NASDAQ: DOCU)",
          "positions": [
            "Software Developer II, Signing (August 2020 - Present)",
            "Software Developer I, Signing (Feb 2019 - August 2020)"
          ],
          "content": [
            "Working on the signing side of DocuSign's esignature suite developing full stack, user facing features.",
            "Modernized the Handlebars and Backbone front end stack to React and Typescript to make the experience more consistent through componentization.",
            "Implemented DocuSign for SMS, allowing signers to sign contracts through text. Involves modifying existing .NET workflows and creating stateful React interfaces to account for new SMS users.",
            "Investigating customer issues through the Azure Data Explorer with Kusto (KQL). Involves setting up logging and alerts for the deployment of new features.",
            "Acted as an intern tech-lead. Fielded technical and implementation questions as well as pair programmed to deliver a signature image editor by the end of the term."
          ]
        },
        {
          "name": "DOCUSIGN",
          "city": "Seattle, WA",
          "company_description": "(Sending and managing electronic agreements; NASDAQ: DOCU)",
          "positions": [
            "Software Developer II, Signing (August 2020 - Present)",
            "Software Developer I, Signing (Feb 2019 - August 2020)"
          ],
          "content": [
            "Working on the signing side of DocuSign's esignature suite developing full stack, user facing features.",
            "Modernized the Handlebars and Backbone front end stack to React and Typescript to make the experience more consistent through componentization.",
            "Implemented DocuSign for SMS, allowing signers to sign contracts through text. Involves modifying existing .NET workflows and creating stateful React interfaces to account for new SMS users.",
            "Investigating customer issues through the Azure Data Explorer with Kusto (KQL). Involves setting up logging and alerts for the deployment of new features.",
            "Acted as an intern tech-lead. Fielded technical and implementation questions as well as pair programmed to deliver a signature image editor by the end of the term."
          ]
        },
        {
          "name": "JPMORGAN CHASE",
          "city": "Jersey City, NJ",
          "company_description": "(Multinational investment bank & financial services; NYSE: JPM)",
          "positions": [
            "Software Development Intern (Summer 2018)",
          ],
          "content": [
            "Developed the Major Events of Production Calendar (MEPC) as part of the deploy team.",
            "Led two interns in the implementation of features like real-time socket updates, graphing of event statuses over time, and authentication for admin privileges. Completed with React and Springboot.",
            "Product allows application owners to track application status during a release eavent (updates, patches, deployment)."
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