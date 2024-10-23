import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "British Sign Language App",
      description: "A work-in-progress application being developed in .NET MAUI to support British Sign Language learning.",
      category: "Personal Project",
      tags: [".NET MAUI"],
      status: "In Progress"
    },
    {
      title: "Acticheck User Authentication System",
      description: "Developed a .NET Core web application for secure user authentication and management, integrating various authentication methods, logging, and third-party services. Features include secure registration, login, password recovery, and Facebook authentication.",
      category: "Work",
      period: "June 2024 - October 2024",
      tags: [".NET Core", "SQL Server", "Identity", "Facebook Auth", "SendGrid"],
      link: "#"
    },
    {
      title: "RESTful APIs and Band Payload Processing",
      description: "Developed a .NET Web API for payload transmission between applications, including gRPC applications for efficient data handling and logging into SQL databases.",
      category: "Work",
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
      company: "iGO4 Insurance",
      period: "Jan 2018 - Dec 2023",
      role: "Software Developer",
      description: "Worked on multiple significant projects including Real-Time Pricing (RTP), CCM, Earnix integration, and Kingfisher document management.",
      technologies: ["Java", "C#", "Python", "AWS", "SQL", "REST API"]
    },
    {
      company: "Acticheck",
      period: "June 2024 - October 2024",
      role: "Software Developer",
      description: "Developed authentication and user management systems using .NET Core.",
      technologies: [".NET Core", "SQL Server", "Identity", "OAuth"]
    }
  ];

  const education = [
    {
      institution: "Coventry University",
      period: "2014 - 2017",
      degree: "Computer Science",
      projects: [
        "Climate Change Mobile Application (Dissertation)",
        "Agile Development Team Project",
        "Interactive Pervasive Computing Project"
      ]
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
      <a href="#" className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition duration-300">
        View Resume
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
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
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
                  <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
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
                  <h4 className="font-medium mb-2">Key Projects:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {edu.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="text-gray-600">{project}</li>
                    ))}
                  </ul>
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
