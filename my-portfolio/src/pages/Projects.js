import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';

// Functional component for the Projects page
const Projects = () => {
    const [activeTab, setActiveTab] = useState('projects'); // Set the active tab to 'projects'
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu open/close

    const projectsIntroContent = (
        <div>
            <p className="text-gray-600 mb-4">
                Throughout my career, I have had the opportunity to work on a diverse range of projects that reflect my skills and passion for technology. This projects page showcases a selection of key projects from my professional experiences.
            </p>
            <p className="text-gray-600 mb-4">
                Here, you can find a selection of my key projects, showcasing the solutions implemented and the technologies used.
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
            period: "October 2024",
            tags: [".NET MAUI", "C#", "MVVM", "XAML", "SQLite", "British Sign Language"],
            status: "In Progress",
            videoSource: "SipNSignVideo.mp4",
        },
        {
            title: "My Portfolio Website",
            description: (
                <>
                    This portfolio website serves as a comprehensive showcase of my journey and accomplishments as a software developer. Built using React, the site highlights my diverse projects, technical skills, and professional experiences. With a strong emphasis on user experience, I implemented a responsive design that adapts seamlessly across various devices, ensuring accessibility for all users. The site incorporates smooth animations and transitions, enhancing visual appeal and engagement. Additionally, I focused on creating a user-friendly navigation system, allowing visitors to effortlessly explore my work and discover my passion for coding. Each project is presented with detailed descriptions, technologies used, and the challenges I overcame during development, providing insights into my problem-solving abilities. As I continue to refine and enhance the website, my goal is to not only display my skills but also to connect with potential collaborators and employers who share my enthusiasm for technology and innovation.
                </>
            ),
            category: "Personal Project",
            period: "October 2024",
            tags: ["React", "JavaScript", "Node.js", "CSS", "HTML", "Tailwind CSS", "Git", "GitHub", "npm", "Responsive Design"],
            thumbnail: "https://previews.dropbox.com/p/thumb/ACdPs3mTiSjA_5RcICipxKybz0xfTtEMXYMoCMMqgF55yAdDfCjSyI6e6iuim3TKIi4CbU5m3OiSgAKDfGye4RDD1k6oWh2xw03lK0rLGKWg4lA0_xh4PfPL8g1KUyYGgNLaxuhGZ4TsEhwedFRGW3VjPoe6ZDkTPQXGnJM7tCMmzGutlAVPv8Y0hoF0IT9hf-mMHzFSS65O0nF0PuRMGPXyrPNu2MSOiu9nGker7NlGhPFp56iS8iOj92Vr5ZizhoJ_1nqwGjF5LwcoWOgT6mswVW0W3acCC7c9Jzhbgt-xfW3RG76Ks5m2Q5fme6t-dhf5gszXkJWv2rZDk4aaV6dR/p.png",
            status: "In Progress",
            link: "https://github.com/kizwiz6/portfolio"
        },
        {
            title: "Acticheck User Authentication System",
            description: "Developed a .NET Core web application for secure user authentication and management, integrating various authentication methods, logging, and third-party services. Features include secure registration, login, password recovery, and Facebook authentication.",
            category: "Work at Acticheck",
            period: "June 2024 - July 2024",
            tags: [".NET Core", "SQL Server", "Identity", "Facebook Auth", "SendGrid"],
            thumbnail: "https://static.wixstatic.com/media/636887_467cd8ba15774cbaadea522ebac1dceb~mv2.png/v1/fill/w_1108,h_596,al_c,q_90,enc_auto/LOGIN-WELCOME-BACK-USER.png",
        },
        {
            title: "RESTful APIs and Band Payload Processing",
            description: "I developed a robust .NET Web API application designed to demonstrate seamless payload transmission between applications. This API effectively logs incoming decoded payload messages, ensuring that all relevant data is captured for future analysis. The integrated decoder processes these messages efficiently, enabling smooth communication and data handling between various components of the system. In addition, I created two gRPC applications—a server and a client—that facilitate efficient data transmission between distinct applications. These prototypes have proven successful in logging essential data into an SQL table, showcasing the system's capability to handle complex data interactions. Through this experience, I gained valuable insights into the advantages of gRPC over traditional RESTful approaches, including improved performance, reduced latency, and more efficient data serialisation.",
            category: "Work at Acticheck",
            period: "July 2024 - September 2024",
            tags: [".NET", "gRPC", "SQL", "REST API"],
            thumbnail: "https://static.wixstatic.com/media/636887_c5c5c3336c724fe796e1b99e6cf59b3d~mv2.png/v1/fill/w_696,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/TestExplorer-UnitTests.png",
        },
        {
            title: "Business As Usual (BAU)",
            description: `During my time at iGO4 from January 2018 to December 2023, I was responsible for various BAU (Business As Usual) tasks that supported the ongoing operations. These tasks maintained the efficiency and effectiveness of our systems and processes.`,
            category: "Work at iGO4",
            period: "January 2018 - December 2023",
            responsibilities: [
                {
                    title: "Email Content Management",
                    description: `Used Apache Velocity for dynamic email content delivery, frequently updating and maintaining email templates. Incorporated HTML and CSS to ensure emails were visually appealing and adhered to brand guidelines.`
                },
                {
                    title: "Policy Document Updates",
                    description: `Managed a wide range of policy document updates using Adobe InDesign. Uploaded updated documents (privacy notices, TOBAs, IPIDs) via remote desktop, ensuring compliance with regulations and product changes.`
                },
                {
                    title: "Project Management & Collaboration",
                    description: `Proficiently used the Atlassian suite (Jira, Bitbucket, Confluence) to manage project workflows, track issues, collaborate with team members, and maintain project documentation.`
                },
                {
                    title: "Communication & Collaboration",
                    description: `Utilised tools like Microsoft Teams, Slack, and Skype to coordinate with team members, schedule meetings, and share updates.`
                },
                {
                    title: "Software Configuration & Development",
                    description: `Worked on CDL's Strata software configuration and RTP development, maintaining and enhancing existing software systems, implementing new features, and ensuring software reliability.`
                }
            ],
            tags: ["HTML", "CSS", "Apache Velocity", "XML", "Adobe InDesign", "Strata", "Git", "Scrum", "Agile Methodology", "Jira", "Confluence"]
        },
        {
            title: "Real-Time Pricing (RTP)",
            description: `
        RTP, the Real-Time Pricing feature, stands as a pivotal enhancement to the Strata quoting process, opening up a realm of possibilities for insurance brokers. This dynamic tool empowers us to finely calibrate and customise quotes in real-time, enhancing our ability to tailor insurance offerings to the unique needs of our clients.

        RTP operates as an API, integrated into Strata, our trusted platform for insurance quoting. It processes discounts, loadings, declines, and policy modifications, making real-time adjustments to quotes. It also features fraud detection and NCB validation, ensuring accuracy and efficiency in the quoting process.

        Among its notable features, RTP can host Excel tables for reference, allowing fraud case tracking and policy rules to be managed seamlessly. Its flexibility enables quick adjustments that improve selling performance, turning RTP into a valuable commercial tool.`,
            category: "Work at iGO4",
            period: "Sep 2022 - Dec 2023",
            responsibilities: [
                {
                    title: "API Integration",
                    description: "Integrated RTP as an API into Strata, streamlining real-time quote adjustments, including discounts, loadings, and declines."
                },
                {
                    title: "Fraud Detection & NCB Validation",
                    description: "Implemented fraud detection and No Claims Bonus (NCB) validation within the system, improving data accuracy."
                },
                {
                    title: "Rule Management",
                    description: "Managed business rules using Drools, allowing quick adjustments to pricing and policy rules."
                }
            ],
            tags: ["Java", "Drools", "Scrum", "Eclipse", "Microsoft Excel", "SoapUI", "Excel", "Gitlab", "Agile Methodology", "Confluence", "Git", "Jira"],
        },
        {
            title: "Anteiku (AWS Suite Data Re-Alignment)",
            description: `During the Anteiku (AWS) project, I closely collaborated with senior developers who provided invaluable guidance and mentorship. With their support, I contributed to the project's success by implementing interconnected micro-components to improve data processing efficiency and flexibility.

      I worked on a lambda function that served as a primary data splitter and created individual queues for specific data areas with unique rulesets. I also independently contributed to the development of the Claims rules engine. The senior developers shared their expertise, guiding me on best practices for AWS services like Amazon Kinesis and Amazon SQS, ensuring an efficient and reliable implementation.

      A key aspect of my role involved updating YAML configuration files for our CI/CD pipelines. I modified these files to define build and deployment processes, ensuring that our applications could be consistently integrated and delivered in an automated manner. This experience enhanced my understanding of CI/CD practices and how they facilitate seamless software development and deployment.

      In addition to AWS services, the senior developers taught me how to work with REST APIs using Postman. They helped me understand API request components, debug APIs, and use advanced features like collections, environment variables, and automated tests. This experience enhanced my API development and testing skills.

      Throughout the project, I developed my skills in C#, SQL, JSON, Node.js, and the AWS SDK, thanks to constructive feedback and encouragement from the senior developers. This mentorship allowed me to successfully carry out my role in the project and gain valuable experience in designing and implementing cloud-based data processing solutions using AWS services and various programming languages.`,
            category: "Work at iGO4",
            period: "March 2022 - October 2022",
            tags: ["C#", "SQL", "JSON", "Node.js", "AWS", "Postman", "YAML", "Agile Methodology"],
        },
        {
            title: "CCM Project",
            description: "The CCM (Customer Communications Management) project was designed to improve and streamline customer communications by gaining better control over content, channel, and presentation of communication sequences, tailoring them to individual customer preferences. This targeted approach aimed to significantly enhance the overall customer experience through the strategic use of reminders and the implementation of multi-channel opportunities. In addition, the project sought to increase the automation of follow-up and response-chasing processes by incorporating automated business rules and an integrated workflow. This was intended to result in more efficient communication management and reduce the need for manual intervention. Lastly, the CCM project aimed to empower operational team members with a comprehensive view of all customer communications. This holistic perspective was expected to enable them to optimise average handling time, boost efficiency, and improve first contact resolution, ultimately leading to enhanced customer satisfaction and loyalty.",
            category: "Work at iGO4",
            period: "January 2019 - January 2020",
            tags: ["AWS", "C#", "Python", "SQL", "SQL Server", "JSON", "Node.js", "Agile Methodology"],
        },
        {
            title: "Earnix (Pricing Engine)",
            description: "Earnix is a dynamic pricing tool that was seamlessly integrated with the CDL Strata system at iGO4. This integration empowered the Pricing & Data Team to design and implement sophisticated algorithms, enhancing competitiveness in pricing strategies. The algorithms, crafted by the Pricing Team, could be easily managed and deployed, significantly reducing the time required for executing dynamic pricing adjustments. This adaptability allowed the team to respond rapidly to the ever-changing sales landscape. The primary objective of this project was to embed Earnix into the RTP (Real-Time Pricing) model without the need for a complete overhaul of the existing RTP model's development. This was achieved through a variety of tasks, including comprehensive REST API testing conducted via SoapUI software and core development work undertaken in both Java and XML. The successful integration of Earnix resulted in a more agile and responsive pricing system, enabling iGO4 to maintain a strong competitive edge in the market.",
            category: "Work at iGO4",
            period: "July 2019 - October 2019",
            tags: ["Java", "XML", "REST API", "SoapUI", "C#", "Git", "Agile Methodology"],
        },
        {
            title: "Kingfisher (Data Migration)",
            description: `The Kingfisher project at iGO4 aimed to optimise the FDU document management system for more efficient business report distribution and SMS production. This involved extensive work with SQL, SSIS, and SSRS, enhancing my skills in data migration, reporting, and integration.

      We utilised VSTS (now Azure DevOps) for source control, initially managing SQL report builds before transitioning to Stored Procedures for a phase 2 migration. All RDL file builds were tracked on this platform, improving version control and team collaboration.

      I tackled challenges related to automated report subscriptions that couldn't filter by date ranges. Collaborating with fellow developers, we implemented a solution using a new '@DATERANGE' parameter, allowing users to select their desired date range from a dropdown menu.

      Additionally, I enhanced Bordereau Insurer reports by adding subtotals, which improved the reporting suite and simplified validation for finance teams. I also addressed issues with merged and hidden cells in exported Excel reports, ensuring data could be copied and pasted seamlessly.

      These improvements optimised the reporting process, reduced manual tasks, and saved our team valuable time, reinforcing my expertise in data migration and reporting while enhancing user experience for clients and stakeholders.`,
            category: "Work at iGO4",
            period: "August 2018 - June 2019",
            thumbnail: "https://previews.dropbox.com/p/thumb/ACZ0bZDk3HMeZDjaSZfIn73wTqnsMB8Icec9Qgeffz5QeHK9Ap8GQv1SfhwXxlqoa9TS-LpvHQQDTLe2HR396FpOyW5hDlOwDOOkEHIiw0C8apskAiKH1V5XhQS8B6HKhTSetjoHnOVjWrn5-CnO8EQFld_Jhvsywq0mgxNaf3lzJoS9ckux4hzTOF1djAtW4oxlgK5VQik9-KMSMnGaOcMaB3YqVxLPK41w4P3lYudIeGFu7obDP_ZZMt3DLzwwCP58FFmJvjxtN0EmwTPIgSgVqRGaFJTrT1bE2h9k2RzUANySIW-RYB-YwYJ-AbTfLcghp3dqwHPIiDdE1OrMtScC/p.png",
            tags: ["Data Warehousing", "ETL", "SQL", "Big Data", "Microsoft SQL Server", "Pentaho", "SSIS", "SSRS", "Tableau", "Excel"],
        },
        {
            title: "Android Mobile Application Designed to Encourage Positive Climate Change Behaviour",
            description: `I developed a high-fidelity ecological mobile application prototype with a tailored design, driven by insights from user interests gathered through surveys, primary research, and a thorough review of pertinent literature. The application's primary aim was to promote energy sustainability and encourage positive behavioural traits in individuals to combat climate change. The application served as a comprehensive platform for all climate change-related topics, offering an array of features, including an updated live RSS newsfeed, visual displays of the direct environmental impact, a checklist for monitoring recent activities, daily tips, interactive games, an achievement system, a social community page, and more. The development of this application took place in Android Studio, predominantly utilising Java and XML. Java was instrumental in creating an SQLite database to securely manage user login credentials and provide a unique and personalized user experience. The project was efficiently micro-managed, employing the Agile methodology, and stands as a testament to my diligence. While the project's strengths were evident, certain limitations were acknowledged. These included the exclusion of in-depth behavior monitoring through observational ethnographic methods and the collection of data through diary logs. As a result, the project primarily addressed the research question, "Can a mobile application encourage positive behavioural traits for combatting climate change?" from a theoretical perspective due to the application's custom-tailored nature. The project received a commendable grade of 65%, and there are aspirations to potentially transition the application to the Google Play Store in the future. If interested, I can provide a copy of the thesis or a live demonstration of the application upon request.`,
            category: "Coventry University Project (Dissertation)",
            period: "December 2016 - April 2017",
            grade: "2:1",
            youtubeVideo: "https://www.youtube.com/watch?v=uP2W6iHUZ7s&ab_channel=KieranE",
            tags: ["Java", "Android Studio", "Agile Methodology", "Mobile Application Development", "Git", "Gantt Chart"],
        },
        {
            title: "Agile Development: Agile Assassins",
            university: "Coventry University",
            period: "May 2017",
            category: "Coventry University Project (Group)",
            description: (
                <span>
                    As I approached the conclusion of my university journey, I participated in a comprehensive group project within the Agile Development module. This immersive experience brought together a cohort of final-year students, challenging us to conceive and create a product that adhered to professional standards. Our mission was to develop a product that seamlessly integrated a diverse array of functionalities, guided by the Agile methodology to foster flexibility and excellence. To view the individual reflective report, please click&nbsp;
                    <a
                        href="https://docs.google.com/document/d/1RbDxK2VqDDDmC03jZ1c4tUqS0EkYGqRWXTj-CpuVGjc/edit?pli=1&tab=t.0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        here
                    </a>.
                </span>
            ),
            responsibilities: [
                {
                    title: "Front-End Developer",
                    description: "Took on the role of a front-end developer, focusing on crafting the user interface and user experience."
                },
                {
                    title: "Collaborative Developer",
                    description: "Worked within a divided team structure of front-end and back-end developers, facilitating test-driven development."
                },
                {
                    title: "Screencast Presentation",
                    description: "Created a screencast showcasing the functionalities of the application and summarising the Agile journey."
                },
                {
                    title: "Reflective Report",
                    description: "Prepared an individual reflective report covering advanced Git tools, Agile methodologies, team dynamics, and continuous integration."
                }
            ],
            grade: "2:1",
            tags: ["Agile", "XML", "Java", "SQLite", "Git"],
            youtubeVideo: "https://www.youtube.com/watch?v=kDiFy_dCVXc"
        },
        {
            title: "Interactive Pervasive Computing: Climate Change Hi-Fi Mobile Application Prototype",
            university: "Coventry University",
            period: "December 2016",
            category: "Coventry University Project (Group)",
            description: `This module focused on the study and development of pervasive systems and sensing technology, enabling students to apply their skills to interactive pervasive devices and applications. It examined usability, ethical aspects, ad-hoc networking, reliability, security, and mobility within pervasive technologies. The module was assessed through an exam (50%) and coursework, which included a portfolio (40% of coursework mark) and a group project (60% of coursework mark). For my individual portfolio, I worked with Arduino hardware and completed tasks written in C#. For the group project, my partner and I developed Heart-R8M8, a system designed to monitor user health metrics such as BPM and blood pressure. We aimed to create an effective solution by setting up RGB LEDs to indicate safe levels, using a potentiometer for blood pressure simulation, and implementing a heart pulse sensor to check BPM readings.`,
            thumbnail: "https://static.wixstatic.com/media/636887_2ebb1128a10c463aa1956a068a12ae7d~mv2.png/v1/fill/w_750,h_455,al_c,lg_1,q_85,enc_auto/636887_2ebb1128a10c463aa1956a068a12ae7d~mv2.png",
            tags: ["Arduino", "C#", "Python", "Processing", "Sensors", "UX"],
            grade: "1st",
        },
        {
            title: "Video Game API",
            period: "December 2016",
            description: "In my final year at university, I undertook an advanced module focused on JavaScript to develop full-stack cloud-based web applications. The primary assignment involved creating a robust API that integrated with third-party services. Instead of a traditional report, we showcased our work through an 8-minute screencast that highlighted our project's features and our expertise. To excel beyond basic requirements, we designed a user-friendly API that allowed item searches without registration, while also encouraging user sign-up with email validation. Registered users could curate a favorites list, enhancing their experience. Our API was architected to dynamically connect to external data sources. Utilising Node.js for server-side development and Jasmine for testing, I demonstrated the API's functionality via Postman, covering requests, responses, and data storage mechanisms. We also prioritised code quality through thorough testing and linting, ensuring a robust codebase.",
            grade: "2:1",
            category: "Coventry University Project",
            tags: ["HTML", "CSS", "JavaScript", "Node.js"],
            youtubeVideo: "https://www.youtube.com/watch?v=CvgZEx_qdYM",
        },
        {
            title: "Developing the Modern Web: Fitness King",
            description: `The web has evolved over the last two decades from a collection of pages containing simple static content to delivering a huge range of web applications with advanced interfaces and capabilities. These require developers with a complex range of skills and the ability to work to clearly defined web standards. This module helped lay the foundations of these skills and gave me the knowledge required to develop interactive, dynamic websites that perform useful functions. For the assignment, we were tasked with creating our own, unique dynamic website using Cloud 9 as the IDE. For my own website, I wanted to create a fitness guide to make use of the different JavaScript functionalities in order to incorporate multimedia interactivity, so that the website will not only be informative but also offer a unique experience for the user. Furthermore, I wanted to design the website for a pervasive interface. This meant creating a simple but controlled design that would have the suitable ergonomics for multiple displays. Other desired features included easy drop-down menu display, navigational buttons, interactive visual infographics, a database showcasing inspirational fitness 'legends', and finally feature an active comment form for the visitors to express their opinions on the website. The module then culminated with a reflective report.`,
            category: "Coventry University Project",
            period: "May 2016",
            grade: "2:1",
            tags: ["HTML", "CSS", "JavaScript", "SQL", "Python", "Flask"],
            youtubeVideo: "https://www.youtube.com/watch?v=9dXH2bPHuy0"
        },
        {
            title: "Real World Project: T3 (Team 3 - Group Project)",
            period: "May 2016",
            category: "Coventry University Project (Group)",
            description: (
                <span>
                    During my second year at university, I engaged in a module that simulated real-world project collaboration with IBM. Our objective was to develop a conference room booking website that seamlessly integrated a wayfinder application and a virtual reality system to showcase room layouts. This project required us to deliver live presentations, compile a comprehensive group report, and contribute individually to our shared goals.

                    As the project leader for Team 3 (T3), I took the lead on developing the wayfinder application while also assisting in the creation of the website. Additionally, I authored our group report, ensuring that our collective efforts were coherent and well-articulated.

                    I embraced the challenge of designing the wayfinder application using PopApp (now known as 'Marvel'), resulting in a high-fidelity paper prototype. Given that my application development skills were still evolving, this mock-up approach was particularly suitable for our needs. I worked closely with our design team to ensure that the visual elements complemented the application's functionality, thereby fostering effective communication and collaboration throughout the project.

                    The completed wayfinder application included accessible hyperlinks and a QR code, significantly enhancing the visitor experience by providing intuitive navigation of the conference room layout. You can read the report&nbsp;
                    <a
                        href="https://drive.google.com/file/d/0B1jRB1Zy3SZkakNvWk1aM2RNdVU/view?resourcekey=0-L8C4HaiJY4QWVhgkim6Ztw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        here
                    </a>.
                </span>
            ),
            grade: "2:1",
            tags: ["Agile", "Team Collaboration", "Web Development"],
            youtubeVideo: "https://www.youtube.com/watch?v=oOViQOndPhs"
        },
        {
            title: "Certified Adobe Photoshop (ACA): Visual Communication",
            university: "Coventry University",
            period: "November 2015",
            category: "Coventry University Project",
            description: `For my second-year Addvantage module, I chose to focus on Adobe Photoshop. Upon completing the exam, I was awarded an Adobe Certified Associate in Visual Communication Using Adobe Photoshop certificate for achieving a high grade (over a first) in the exam. To view verified proof of the award, please click here.`,
            tags: ["Adobe Photoshop"],
            grade: "1st",
            link: "https://www.youracclaim.com/badges/8c4b1b3b-2e3a-4b2d-9b8e-3b6b9b8e0c7b",
            thumbnail: "https://static.wixstatic.com/media/636887_56dfb5491c3e4e93b5f3dddf753c15a9~mv2.png/v1/fill/w_500,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/636887_56dfb5491c3e4e93b5f3dddf753c15a9~mv2.png"
        },
        {
            title: "Developing Computer Games: Tic-Tac-Toe",
            university: "Bedford College",
            period: "April 2014",
            category: "Bedford College Project",
            description: `In the 'Developing Computer Games' module, we explored the world of computer gaming, examining its psychological effects on individuals and society while creating our unique game powered by VB.NET. While the module offered classic games to recreate, I chose to venture off the beaten path by developing my own game, a tribute to the timeless classic Tic-Tac-Toe (Noughts and Crosses). This project involved comprehensive documentation, including a user manual and a meticulous test plan, highlighting how a game's structure and design facilitate maintenance and future extension.`,
            tags: ["VB.NET", "Game Development"],
            videoSource: "TicTacToe.mp4",
            grade: "Distinction",
        },
        {
            title: "Spreadsheet Design: Gym Membership",
            university: "Bedford College",
            period: "April 2014",
            category: "Bedford College Project",
            description: `The Spreadsheet Design module provided valuable insights into Excel's capabilities, equipping me with the skills to create high-quality spreadsheets for industry use. The challenge was to design a comprehensive membership spreadsheet tailored for a gym club, which included three distinct membership categories to manage varying subscription plans. Additionally, the club organized optional trips funded by members and held weekly gatherings in a community hall, which incurred expenses like rent, insurance, and electricity. The project included a video demonstration showcasing the spreadsheet's functionality and extensive documentation comparing automation methods, analysing data, and explaining how organisations can interpret data effectively.`,
            tags: ["Excel", "Spreadsheet Design"],
            videoSource: "SpreadsheetDesign.mp4",
            grade: "Distinction",
        }
    ];

    return (
        <div>
            <HeroSection />
            <Navigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
            />
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            {projectsIntroContent && <div className="mb-4">{projectsIntroContent}</div>}

            {/* Grid container for two-column layout on medium and larger screens */}
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;