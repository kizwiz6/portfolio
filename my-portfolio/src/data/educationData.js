import { longsandsGalleryImages, uniGalleryImages } from "../galleryImages";

// src/data/educationData.js
export const educationData = [
    {
      institution: "Coventry University",
      period: "2014 - 2017",
      degree: "Bachelor of Science (BSc), Computing",
      grade: "2:1",
      activities: "Boxing, Indoor Football, Gym, Tennis, Lacrosse, JJ's Nightclub Rep",
      galleryImages: uniGalleryImages,
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
      ]
    },
    {
      institution: "Bedford College",
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
      youtubeVideo: "https://www.youtube.com/watch?v=o4vEaArSs1A&ab_channel=BedfordCollege",
    },
    {
      institution: "Longsands Academy",
      period: "2010 - 2012",
      degree: "A-Levels",
      galleryImages: longsandsGalleryImages,
      coursework: [
        {
          year: "A2",
          subjects: [
            "Media Studies",
            "Film Studies",
            "OCR Nationals in ICT"
          ]
        },
        {
          year: "AS",
          subjects: [
            "OCR Nationals in ICT",
            "Media Studies",
            "Film Studies",
            "Geography",
            "Financial Studies"
          ]
        }
      ]
    }
  ];