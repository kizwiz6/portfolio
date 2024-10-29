// src/data/experiences.js
// Exports an array of experience objects, and the imports for the gallery images are appropriately set up.
import { acticheckGalleryImages, igo4GalleryImages } from '../galleryImages';

export const experiences = [
  {
    company: "Acticheck",
    link: "https://acticheck.com/",
    period: "June 2024 - October 2024",
    role: "Software Engineer (Temporary)",
    location: "Fowlmere, Cambridge",
    description: [
      "Developed a secure .NET Core web app for user authentication, integrating .NET Core Identity, encrypted SQL Server credentials, and third-party services like Facebook login and SendGrid email. Implemented configurable logging and secure data transfer via DTOs for streamlined user management and robust security.",
      "Developed a .NET Web API for seamless payload transmission, logging decoded messages for analysis and ensuring smooth data handling. Tested the API using Postman. Created gRPC client-server prototypes for efficient data transmission, logging data into an SQL table using Entity Framework Core.",
      "Developed a .NET MAUI application showcasing cross-platform functionality and Bluetooth capabilities."
    ],
    technologies: [".NET Core", "C#", "Python", "SQL Server", "Entity Framework Core", "Identity", "OAuth", ".NET MAUI", "gRPC", "REST API", "Postman", "Visual Studio", "Git", "Github", "SendGrid"],
    images: acticheckGalleryImages,
  },
  {
    company: "iGO4 Insurance",
    link: "https://www.igo4.com/",
    period: "Jan 2018 - Dec 2023",
    role: "Software Developer",
    location: "Werrington, Peterborough",
    description: [
      "Collaborated with diverse Agile teams on critical projects to develop a sophisticated pricing optimisation tool that incorporates machine learning models in pricing strategies (Earnix).",
      "Worked extensively on Real-Time Pricing (RTP) API, which enhances the Strata quoting process. Improved proficiency in Drools (a business rules management system) and Java within Eclipse IDE.",
      "Gained proficiency in API testing applications, specifically SoapUI and Postman for REST APIs.",
      "Contributed to the creation of a new AWS data platform, centralising real-time data points and expanding knowledge in programming languages like C# and JSON.",
      "Handled Business-As-Usual (BAU) changes autonomously, frequently using Apache Velocity for dynamic email content delivery, involving HTML, CSS, and XML documentation.",
      "Managed policy document updates using Adobe InDesign and facilitated uploads on a server.",
      "Utilised various tools and platforms, including the Atlassian suite (Jira, Bitbucket, Confluence), GitLab, GitKraken, Azure DevOps, Visual Studio, and VS Code.",
      "Proficiently used communication and collaboration tools like Microsoft Teams, Slack, Skype, and command-line interfaces, as well as Node.js and other essential technologies.",
      "Mentored Junior Developers and conducted thorough code reviews.",
      "Worked on a significant data migration project called Kingfisher, migrating CDL's Strata application data from Oracle SQL to SQL Server. This project involved creating a reporting database and developing SSRS reports, Tableau dashboards, and Excel spreadsheets.",
      "Led requirements gathering, analysis, and direct stakeholder communication, facilitating the construction of robust objects and reports for the Kingfisher data migration project.",
      "Deepened proficiency in SQL Server, enabling advanced data querying across multiple datasets and the creation of complex stored procedures."
    ],
    technologies: ["Apache Velocity", "HTML", "CSS", "CDL's Strata", "Java", "AWS", "SQL", "Pentaho", "Drools", "VSTS", "Postman", "Adobe InDesign", "C#", "Python", "REST API", "Agile Methodology", "Git", "GitLab", "GitKraken", "Azure DevOps", "Visual Studio", "VS Code", "Node.js", "JSON", "Tableau", "Excel", "SSIS", "SSRS", "SQL Server", "Oracle SQL", "SoapUI", "Jira", "Confluence", "Microsoft Teams", "Slack", "Skype"],
    images: igo4GalleryImages,
  },
];
