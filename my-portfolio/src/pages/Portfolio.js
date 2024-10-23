import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');

  const aboutMeContent = (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-600 mb-4">
        I'm Kieran, a dedicated Software Developer based in Cambridgeshire, UK. As a Developer, I have nearly seven years of commercial experience in software development previously working at companies like Acticheck and iGO4 Insurance, where I've had the opportunity to refine my skills and expertise in the field. My educational background includes a Bachelor's degree in Computing from Coventry University and a BTEC Level 3 Extended Diploma in IT from Bedford College, providing a solid foundation to complement my practical experience.
      </p>
      <p className="text-gray-600 mb-4">
        I am deeply passionate about leveraging technology to tackle complex real-world problems and drive innovation. I believe software development holds immense power to create positive change in the world. For instance, my Coventry University dissertation involved developing a tailor-made mobile application aimed at encouraging individual behavioural changes to combat climate change. By integrating user feedback into the design process, I ensured the app's effectiveness and relevance. This project epitomises my commitment to using technology to make a meaningful difference in the world.
      </p>
      <p className="text-gray-600 mb-4">
        Welcome to my digital portfolio, a showcase of some of my most cherished projects from my career journey. Although confidentiality restricts me from revealing iGO4 project specifics or displaying their code, I'm excited to share the essence of my work and the skills I've developed. This website offers an initial look at my capabilities, but for a more in-depth understanding, please feel free to arrange a personal meeting where I can walk you through detailed demonstrations and discussions.
      </p>
      <p className="text-gray-600 mb-4">
        Thank you for visiting, and I look forward to connecting and sharing my passion for development with you.
      </p>
    </div>
  );

    /**
     * Project details.
     * @type {Object}
     * @property {string} title - The title of the project.
     * @property {string} description - The description of the project.
     * @property {string} category - The category of the project.
     * @property {Array<string>} tags - The tags associated with the project.
     * @property {string} link - The link to the project.
    */
  const projects = [
    {
      title: "Sip N Sign (British Sign Language App)",
      description: "Developed a mobile application for learning sign language using C# and .NET MAUI. Designed a user-friendly interface featuring multimedia resources, including videos and images, to enhance immersion. Employed the MVVM architecture to maintain clean code, improving the application's maintainability and scalability.",
      category: "Personal Project",
      tags: [".NET MAUI"],
      status: "In Progress"
    },
    {
      title: "Acticheck User Authentication System",
      description: "Developed a .NET Core web application for secure user authentication and management, integrating various authentication methods, logging, and third-party services. Features include secure registration, login, password recovery, and Facebook authentication.",
      category: "Work at Acticheck",
      period: "June 2024 - October 2024",
      tags: [".NET Core", "SQL Server", "Identity", "Facebook Auth", "SendGrid"],
      link: "#"
    },
    {
      title: "RESTful APIs and Band Payload Processing",
      description: "Developed a .NET Web API for payload transmission between applications, including gRPC applications for efficient data handling and logging into SQL databases.",
      category: "Work at Acticheck",
      tags: [".NET", "gRPC", "SQL", "REST API"],
      link: "#"
    },
    {
      title: "CCM Project",
      description: "Enhanced customer communications control with AWS services, implementing targeted reminders and multi-channel communication opportunities.",
      category: "Work at iGO4",
      tags: ["AWS Lambda", "C#", "Python", "SQL", "JSON"],
      link: "#"
    },
    {
      title: "Earnix Integration",
      description: "Integrated Earnix pricing tool with CDL Strata system, enabling sophisticated pricing strategies and real-time pricing calculations.",
      category: "Work at iGO4",
      tags: ["Java", "XML", "REST API", "SoapUI"],
      link: "#"
    }
  ];

  const experiences = [
    {
        company: "Acticheck",
        link: "https://acticheck.com/",
        period: "June 2024 - October 2024",
        role: "Software Developer",
        description: "• Developed a secure .NET Core web app for user authentication, integrating .NET Core Identity, encrypted SQL Server credentials, and third-party services like Facebook login and SendGrid email. Implemented configurable logging and secure data transfer via DTOs for streamlined user management and robust security. • Developed a .NET Web API for seamless payload transmission, logging decoded messages for analysis and ensuring smooth data handling. Tested the API using Postman. Created gRPC client-server prototypes for efficient data transmission, logging data into an SQL table using Entity Framework Core. • Developed a .NET MAUI application showcasing cross-platform functionality and Bluetooth capabilities.",
        technologies: [".NET Core", "SQL Server", "Identity", "OAuth"]
    },
    {
      company: "iGO4 Insurance",
      link: "https://www.igo4.com/",
      period: "Jan 2018 - Dec 2023",
      role: "Software Developer",
      description: "Collaborated with diverse Agile teams on critical projects to develop different projects, including a sophisticated pricing optimisation tool that incorporates machine learning models in pricing strategies (Earnix).•Worked extensively on Real-Time Pricing (RTP) API, which enhances the Strata quoting process. Improved proficiency in Drools (a business rules management system) and Java within Eclipse IDE.•Gained proficiency in API testing applications, specifically SoapUI, and Postman for REST API's.•Contributed to the creation of a new AWS data platform, centralising real-time data points and expanding knowledge in programming languages like C# and JSON.•Handled Business-As-Usual (BAU) changes autonomously, frequently using Apache Velocity for dynamic email content delivery, involving HTML, CSS, and XML documentation.•Managed policy document updates using Adobe InDesign and facilitated uploads on a server.•Utilised various tools and platforms, including the Atlassian suite (Jira, Bitbucket, Confluence), GitLab, GitKraken, Azure DevOps, Visual Studio, and VS Code.•Proficiently used communication and collaboration tools like Microsoft Teams, Slack, Skype, and command-line interfaces, as well as Node.js and other essential technologies.•Mentored Junior Developers and conducted thorough code reviews.•Used communication and collaboration tools like Microsoft Teams, Slack, Skype, and command-line interfaces, as well as Node.js and other essential technologies.•Worked on a significant data migration project called Kingfisher, migrating CDL's Strata application data from Oracle SQL to SQL Server. This project involved creating a reporting database and developing SSRS reports, Tableau dashboards, and Excel spreadsheets. •Led requirements gathering, analysis, and direct stakeholder communication, facilitating the construction of robust objects and reports for the Kingfisher data migration project.•Deepened proficiency in SQL Server, enabling advanced data querying across multiple datasets and the creation of complex stored procedures.",
      technologies: ["Java", "C#", "Python", "AWS", "SQL", "REST API"]
    }
  ];

  const education = [
    {
      institution: "Coventry University",
      period: "2014 - 2017",
      degree: "Bachelor of Science (BSc), Computing",
      grade: "2:1",
      activities: [
        "Boxing",
        "Indoor Football",
        "Gym",
        "Tennis",
        "Lacrosse",
        "Club Rep"
      ],
      coursework: [
        {
          year: "3rd Year",
          subjects: [
            "Academic Writing 3: Writing Skills for Dissertation",
            "Agile Development",
            "Android Applications Development [Java, XML, BitBucket]",
            "Individual Project [Dissertation]",
            "Interactive Pervasive Computing [C++]",
            "Web API Development [JavaScript, NodeJS, Git]"
          ]
        },
        {
          year: "2nd Year",
          subjects: [
            "Certified Adobe Photoshop (ACA): Visual Communication",
            "Data and Information Retrieval [SQL]",
            "Designing for Usability 2",
            "Developing the Modern Web [JavaScript, HTML, CSS, Git]",
            "Programming, Algorithms and Data Structures [Python, C++]",
            "Real World Project",
            "Technology and its Social, Legal and Ethical Context"
          ]
        },
        {
          year: "1st Year",
          subjects: [
            "Adobe InDesign: Introduction to digital publishing",
            "Computer Architecture and Networks",
            "Computing",
            "Designing for Usability 1",
            "Enterprise Information Systems [UML, SQL]",
            "Introduction to Programming [Python, C#]",
            "Logic and Sets",
            "Professional Skills"
          ]
        }
      ],
      projects: [
        "Climate Change Mobile Application (Dissertation)",
        "Agile Development Team Project",
        "Interactive Pervasive Computing Project"
      ]
    },
    {
      institution: "The Bedford College Group",
      period: "2012 - 2014",
      degree: "BTEC Level 3 Extended Diploma in Information Systems",
      grade: "DMM",
      coursework: [
        {
          year: "2nd Year",
          subjects: [
            "Client Side Customisation of Web Pages",
            "Computer Animation",
            "Developing Computer Games",
            "Object-Oriented Programming",
            "Software Design and Development",
            "Spreadsheet Modelling",
            "Systems Analysis And Design",
            "Web Server Scripting"
          ]
        },
        {
          year: "1st Year",
          subjects: [
            "CCNA 1",
            "CCNA 2",
            "Communication and Employability Skills",
            "Computer Systems",
            "Controlling Systems Using IT",
            "Event Driven Programming",
            "Functional Skills",
            "Organisational Systems Security",
            "Website Production"
          ]
        }
      ],
      projects: []
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
{/* Hero Section */}
<div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
  <div className="max-w-6xl mx-auto px-4 py-16">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
      Software Developer
    </h1>
    <p className="text-xl md:text-2xl text-blue-100 mb-8">
      Building innovative solutions with modern technologies
    </p>
    <div className="flex space-x-4">
      <a href="#" className="bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-blue-50 transition duration-300">
        Contact Me
      </a>
      <a
        href="https://www.dropbox.com/scl/fi/q5qbl6jdan5kex1x1g4w8/KieranEmery_CV_2024.pdf?rlkey=gj1q8x6ul64kmlphtthszgd5b&st=6v4ghmlz&dl=0"
        className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        >
        View CV
        </a>
    </div>
  </div>
</div>
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Portfolio</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                <button 
                    onClick={() => setActiveTab('about')}
                    className={`${activeTab === 'about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                >
                    About Me
                </button>
              <button 
                onClick={() => setActiveTab('projects')}
                className={`${activeTab === 'projects' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveTab('experience')}
                className={`${activeTab === 'experience' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
              >
                Experience
              </button>
              <button 
                onClick={() => setActiveTab('education')}
                className={`${activeTab === 'education' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
              >
                Education
              </button>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex space-x-4">
              <a href="https://github.com/kizwiz6" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kizwiz/" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kizwiz@hotmail.co.uk" className="text-gray-600 hover:text-gray-900">
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['projects', 'experience', 'education'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">

        {activeTab === 'about' && aboutMeContent}

        {activeTab === 'projects' && (
          <div>
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    {project.status && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {project.status}
                      </span>
                    )}
                  </div>
                  {project.period && (
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <Calendar size={16} className="mr-2" />
                      {project.period}
                    </div>
                  )}
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mb-3">
                    {project.category}
                  </span>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
        <div>
            <h1 className="text-3xl font-bold mb-8">Work Experience</h1>
            <div className="space-y-6">
            {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {exp.company}
                    </a>
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                        {tech}
                    </span>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
        )}

        {activeTab === 'education' && (
        <div>
            <h1 className="text-3xl font-bold mb-8">Education</h1>
            <div className="space-y-6">
            {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                </div>
                <p className="font-medium mb-4">{edu.degree}</p>
                {edu.grade && <p className="font-medium mb-4">Grade: {edu.grade}</p>}
                
                {/* Activities Section */}
                {edu.activities && edu.activities.length > 0 && (
                    <>
                    <h4 className="font-medium mb-2">Activities:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        {edu.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="text-gray-600">{activity}</li>
                        ))}
                    </ul>
                    </>
                )}

                {/* Coursework Section */}
                {edu.coursework && edu.coursework.length > 0 && (
                    <>
                    <h4 className="font-medium mb-2">Coursework:</h4>
                    {edu.coursework.map((course, courseIndex) => (
                        <div key={courseIndex} className="mb-4">
                        <h5 className="font-medium">{course.year}</h5>
                        <ul className="list-disc list-inside space-y-2">
                            {course.subjects?.map((subject, subjectIndex) => (
                            <li key={subjectIndex} className="text-gray-600">{subject}</li>
                            ))}
                        </ul>
                        </div>
                    ))}
                    </>
                )}

                {/* Projects Section */}
                {edu.projects && edu.projects.length > 0 && (
                    <>
                    <h4 className="font-medium mb-2">Key Projects:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        {edu.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="text-gray-600">{project}</li>
                        ))}
                    </ul>
                    </>
                )}
                </div>
            ))}
            </div>
        </div>
        )}

      </main>
    </div>
  );
};

export default Portfolio;
