import React, { useState } from 'react';
import { Github, Linkedin, Facebook, Instagram, Mail, Menu, X, Calendar } from 'lucide-react';
import ModalImage from 'react-modal-image';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');

  const aboutMeContent = (
    <div className="max-w-6xl mx-auto px-4 ">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

    {/* Profile Picture */}
    <div className="mb-8 flex flex-col items-center">
    <img
      src="https://previews.dropbox.com/p/thumb/ACZrt0rfSzoz1DEAIQ2gKMbFMSrsOpK-qVuizQH_b_uFK8HfAw2bKiTKUoTKuZpgA_ZWMNCLp4K93kCsP7Xsh1f3ssV4MVqPB5DOt_e_ZrEuk39hA-nNK7xaOnnxSmPsloJDg3MDnRAWrNoNcVjqxMIKTMqQn_hFKVaSh92cdXNSHEpdP9Orv0BF6SkCkHUmsVmyg73EpW41yojk5Uv9klEc6JMvoLwQee7yOossMPCbE2WBy7O2EJC3l18Qtg2yC3XQJBjhe0cVrHTEEHpFoFT3Ewz4eLrVXTzgCg2vLwBPZ--4Y-Orezi9qnL5oMb6SYiCg8bCQAl1lO5DWlLqADcE/p.png?is_prewarmed=true"
      alt="Kieran Emery"
      className="w-100 h-100 object-cover mb-4"
    />

      <p className="text-lg text-gray-600">
        I'm Kieran, a dedicated Software Developer based in Cambridgeshire, UK. With nearly seven years of commercial experience at companies like Acticheck and iGO4 Insurance, I have honed my skills in software development. My educational background includes a Bachelor's degree in Computing from Coventry University and a BTEC Level 3 Extended Diploma in IT from Bedford College, which provides a solid foundation to complement my practical experience.
      </p>
    </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold">My Passion</h2>
        <p className="text-lg text-gray-600 mb-4">
          I am deeply passionate about leveraging technology to tackle complex real-world problems and drive innovation. I believe software development has the power to create positive change. My journey includes developing a tailor-made mobile application for my dissertation that encourages individual behavioural changes to combat climate change. Additionally, I took the initiative to learn .NET MAUI in my spare time, which led to the creation of a British Sign Language app aimed at improving communication accessibility for the deaf and hard-of-hearing community. By integrating user feedback into the design process, I ensure that my projects remain effective and relevant. These initiatives epitomise my commitment to using technology to make a meaningful difference in people's lives.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold">My Journey</h2>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to my digital portfolio, showcasing some of my most cherished projects. Although confidentiality restricts me from revealing specifics of my iGO4 projects, I'm excited to share the essence of my work and the skills I've developed. This website offers an initial look at my capabilities; for a more in-depth understanding, I invite you to arrange a personal meeting where I can walk you through detailed demonstrations and discussions.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Let's Connect!</h2>
        <p className="text-lg text-gray-600 mb-4">
          Thank you for visiting my portfolio! I look forward to connecting and sharing my passion for development. Feel free to reach out via <a href="mailto:kizwiz@hotmail.co.uk" className="text-blue-600 underline">email</a> or through my contact form.
        </p>
      </div>
    </div>
  );

  const uniGalleryImages = [
    "https://media.licdn.com/dms/image/v2/D4E2DAQEa32e-0PH3Nw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1666372817964?e=1730462400&v=beta&t=WPXynECopM520cQWCGO5bnEg7nwyutigQQSI-P0hp5k",
    "https://media.licdn.com/dms/image/v2/D4E2DAQFX0RSUjw0Kww/profile-treasury-image-shrink_8192_8192/profile-treasury-image-shrink_8192_8192/0/1666372742159?e=1730462400&v=beta&t=xCnln51a8I9AbDzVQd3y9e-DdFKyIwxRH--G7ppmX5M",
    "https://media.licdn.com/dms/image/v2/D4E2DAQGfLnK2krzJag/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1666372784420?e=1730462400&v=beta&t=p5AYiIE-ERNZe14kUYDuvOMrO1Gvu5NpN5KRll6TsXk",
    "https://media.licdn.com/dms/image/v2/C4E2DAQFJGnWJSZ-Hbw/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1610469916776?e=1730462400&v=beta&t=-FcjCK2bYTCyJ4-GL2l4aEZBio1aqtjEu5M2xLi8v2g",
    "https://media.licdn.com/dms/image/v2/C4E2DAQFxEfOzCVuYSw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1610469784869?e=1730462400&v=beta&t=XuiFkxW3Co1fHmByu9dRY9J0_4PA7li8BXQCvUgmLz0",
    "https://media.licdn.com/dms/image/v2/C4E2DAQF1emOqEQHRzA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1610469754297?e=1730462400&v=beta&t=ju6y8lWQ6x-BMf8BhUNel63XHw3eIDZXZrpQN0eMd4A",
    "https://media.licdn.com/dms/image/v2/C4D2DAQGA4zTdFypuhg/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1597905705071?e=1730462400&v=beta&t=4FhV6X3qBt0f9KY6oF_t_uSpC6Rw_-slmYiuSad-M4s",
    "https://media.licdn.com/dms/image/v2/C4E2DAQGBmZIuX3RmJQ/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1602223042627?e=1730462400&v=beta&t=GfMlVikhCx1L-gSkB4PwaSQMtGQRzI_31ua2Yr-neOc",
    "https://media.licdn.com/dms/image/v2/C4E2DAQGpUtEBzCFzRQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1597457175631?e=1730491200&v=beta&t=_Yj_WX5GLiA6e99vVqNIkYZVOfkaTLVFE-gK_3t8088"
  ];

  const igo4GalleryImages = [
    "https://media.licdn.com/dms/image/v2/C4D2DAQGdxbGsMdrIaA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1601349657830?e=1730491200&v=beta&t=94GCY5zYijd5XRypgz_LsKuDL8RgvMIyy4EGbKCnxBQ",
    "https://media.licdn.com/dms/image/v2/C4D2DAQHqDtJs3ohx7Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1602152821588?e=1730491200&v=beta&t=IB8pnkVXwHSnK7pNv1iZAN9RC4DK9BwuPbfe41vhc0w",
    "https://media.licdn.com/dms/image/v2/C4D2DAQHs5KV3GrgdRQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1601685874648?e=1730491200&v=beta&t=ASWM-6bwFM1GWOf--AXc7KRN-tvmOXxoFheUvskFt2U",
    "https://media.licdn.com/dms/image/v2/C4D2DAQFQcV2pnLCSMQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1601361048512?e=1730491200&v=beta&t=CAi-TeCi5QO2vcXwGtLHT8ziYKKnTXyMQhVXqLJ-mjk",
    "https://media.licdn.com/dms/image/v2/C4D2DAQGeAWCch8fpyQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1602180833032?e=1730491200&v=beta&t=1F8BvZh51co5VNhqIi5sPIF5JL9Vc9eItYRbxRWjRjk",
    "https://media.licdn.com/dms/image/v2/C4D2DAQFu6VscLboS1w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1596819195655?e=1730491200&v=beta&t=drBbL28YFttMZnP9Ix0TIc_RdGkSKXSRoVLBAI0GUbo",
    "https://media.licdn.com/dms/image/v2/D4E2DAQHcY_uF8sGM9w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729883650498?e=1730491200&v=beta&t=mp9GpuyOzPWDVKrSF85lw0tw3KF3b47T-JeDba412To",
    "https://media.licdn.com/dms/image/v2/D4E2DAQFJzcs-UbvU-A/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1729883664668?e=1730491200&v=beta&t=BSnUzLEL8PnIin2f3vMUtj3EXs3zRAVGUOdhnUyU5fE"
  ];

  const ImageGallery = ({ images, title }) => {
    const [lightbox, setLightbox] = useState(null);

    return (
      <div>
        {/* Gallery Title */}
        <h4 className="font-medium mb-2">{title} Gallery:</h4>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="cursor-pointer">
              <img
                src={image}
                alt={`${title} photo ${index + 1}`}
                className="rounded-lg shadow-md w-full h-full object-cover"
                onClick={() => setLightbox(image)}
              />
            </div>
          ))}
        </div>
  
        {/* Lightbox Modal */}
        {lightbox && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              &times;
            </button>
            <img src={lightbox} alt="Enlarged view" className="rounded-lg shadow-lg max-w-full max-h-full" />
          </div>
        )}
      </div>
    );
  };

  // Define the projectsIntroContent
  const projectsIntroContent = (
    <div>
      <p className="text-gray-600 mb-4">
        Throughout my career, I have had the opportunity to work on a diverse range of projects that reflect my skills and passion for technology. This projects page showcases a selection of key projects from my professional experiences at Acticheck and iGO4, as well as significant academic projects from my time at Coventry University and Bedford College.
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
        description: "Built a personal portfolio website using React. The site showcases my projects, skills, and experience as a software developer. It features a responsive design, smooth animations, and a user-friendly navigation system. I hope you'll agree!",
        category: "Personal Project",
        period: "October 2024",
        tags: ["React", "JavaScript", "Node.js", "CSS", "HTML", "Responsive Design"],
        status: "In Progress"
    },
    {
      title: "Acticheck User Authentication System",
      description: "Developed a .NET Core web application for secure user authentication and management, integrating various authentication methods, logging, and third-party services. Features include secure registration, login, password recovery, and Facebook authentication.",
      category: "Work at Acticheck",
      period: "June 2024 - July 2024",
      tags: [".NET Core", "SQL Server", "Identity", "Facebook Auth", "SendGrid"],
      thumbnail: "https://static.wixstatic.com/media/636887_467cd8ba15774cbaadea522ebac1dceb~mv2.png/v1/fill/w_1108,h_596,al_c,q_90,enc_auto/LOGIN-WELCOME-BACK-USER.png",
      link: "#"
    },
    {
      title: "RESTful APIs and Band Payload Processing",
      description: "I developed a robust .NET Web API application designed to demonstrate seamless payload transmission between applications. This API effectively logs incoming decoded payload messages, ensuring that all relevant data is captured for future analysis. The integrated decoder processes these messages efficiently, enabling smooth communication and data handling between various components of the system. In addition, I created two gRPC applications—a server and a client—that facilitate efficient data transmission between distinct applications. These prototypes have proven successful in logging essential data into an SQL table, showcasing the system's capability to handle complex data interactions. Through this experience, I gained valuable insights into the advantages of gRPC over traditional RESTful approaches, including improved performance, reduced latency, and more efficient data serialisation/",
      category: "Work at Acticheck",
      period: "July 2024 - September 2024",
      tags: [".NET", "gRPC", "SQL", "REST API"],
      thumbnail: "https://static.wixstatic.com/media/636887_c5c5c3336c724fe796e1b99e6cf59b3d~mv2.png/v1/fill/w_696,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/TestExplorer-UnitTests.png",
      link: "#"
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
      link: "#"
    },
    {
      title: "Anteiku (AWS Suite Data Re-Alignment)",
      description: `During the Anteiku (AWS) project, I closely collaborated with senior developers who provided invaluable guidance and mentorship. With their support, I contributed to the project's success by implementing interconnected micro-components to improve data processing efficiency and flexibility.

      I worked on a lambda function that served as a primary data splitter and created individual queues for specific data areas with unique rulesets. I also independently contributed to the development of the Claims rules engine. The senior developers shared their expertise, guiding me on best practices for AWS services like Amazon Kinesis and Amazon SQS, ensuring an efficient and reliable implementation.

      In addition to AWS services, the senior developers taught me how to work with REST APIs using Postman. They helped me understand API request components, debug APIs, and use advanced features like collections, environment variables, and automated tests. This experience enhanced my API development and testing skills.

      Throughout the project, I developed my skills in C#, SQL, JSON, Node.js, and the AWS SDK, thanks to constructive feedback and encouragement from the senior developers. This mentorship allowed me to successfully carry out my role in the project and gain valuable experience in designing and implementing cloud-based data processing solutions using AWS services and various programming languages.`,
      category: "Work at iGO4",
      period: "March 2022 - October 2022",
      tags: ["C#", "SQL", "JSON", "Node.js", "AWS", "Postman"],
    },
    {
      title: "CCM Project",
      description: "The CCM (Customer Communications Management) project was designed to improve and streamline customer communications by gaining better control over content, channel, and presentation of communication sequences, tailoring them to individual customer preferences. This targeted approach aimed to significantly enhance the overall customer experience through the strategic use of reminders and the implementation of multi-channel opportunities. In addition, the project sought to increase the automation of follow-up and response-chasing processes by incorporating automated business rules and an integrated workflow. This was intended to result in more efficient communication management and reduce the need for manual intervention. Lastly, the CCM project aimed to empower operational team members with a comprehensive view of all customer communications. This holistic perspective was expected to enable them to optimise average handling time, boost efficiency, and improve first contact resolution, ultimately leading to enhanced customer satisfaction and loyalty.",
      category: "Work at iGO4",
      period: "January 2019 - January 2020",
      tags: ["AWS", "C#", "Python", "SQL", "SQL Server", "JSON", "Node.js", "Agile Methodology"],
      link: "#"
    },
    {
      title: "Earnix (Pricing Engine)",
      description: "Earnix is a dynamic pricing tool that was seamlessly integrated with the CDL Strata system at iGO4. This integration empowered the Pricing & Data Team to design and implement sophisticated algorithms, enhancing competitiveness in pricing strategies. The algorithms, crafted by the Pricing Team, could be easily managed and deployed, significantly reducing the time required for executing dynamic pricing adjustments. This adaptability allowed the team to respond rapidly to the ever-changing sales landscape. The primary objective of this project was to embed Earnix into the RTP (Real-Time Pricing) model without the need for a complete overhaul of the existing RTP model's development. This was achieved through a variety of tasks, including comprehensive REST API testing conducted via SoapUI software and core development work undertaken in both Java and XML. The successful integration of Earnix resulted in a more agile and responsive pricing system, enabling iGO4 to maintain a strong competitive edge in the market.",
      category: "Work at iGO4",
      period: "July 2019 - October 2019",
      tags: ["Java", "XML", "REST API", "SoapUI", "C#", "Git", "Agile Methodology"],
      link: "#"
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
      link: "https://www.youtube.com/watch?v=kDiFy_dCVXc",
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
      link: "https://www.youtube.com/watch?v=CvgZEx_qdYM",
      youtubeVideo: "https://www.youtube.com/watch?v=CvgZEx_qdYM",
    },
    {
      title: "Developing the Modern Web: Fitness King",
      description: `The web has evolved over the last two decades from a collection of pages containing simple static content to delivering a huge range of web applications with advanced interfaces and capabilities. These require developers with a complex range of skills and the ability to work to clearly defined web standards. This module helped lay the foundations of these skills and gave me the knowledge required to develop interactive, dynamic websites that perform useful functions. For the assignment, we were tasked with creating our own, unique dynamic website using Cloud 9 as the IDE. For my own website, I wanted to create a fitness guide to make use of the different JavaScript functionalities in order to incorporate multimedia interactivity, so that the website will not only be informative but also offer a unique experience for the user. Furthermore, I wanted to design the website for a pervasive interface. This meant creating a simple but controlled design that would have the suitable ergonomics for multiple displays. Other desired features included easy drop-down menu display, navigational buttons, interactive visual infographics, a database showcasing inspirational fitness ‘legends’, and finally feature an active comment form for the visitors to express their opinions on the website. The module then culminated with a reflective report.`,
      category: "Coventry University Project",
      period: "May 2016",
      grade: "2:1",
      tags: ["HTML", "CSS", "JavaScript", "SQL", "Python", "Flask"],
      link: "https://www.youtube.com/watch?v=9dXH2bPHuy0&ab_channel=KieranE",
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
      link: "https://www.youtube.com/watch?v=oOViQOndPhs",
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
      grade: "Distinction",
    },
    {
      title: "Spreadsheet Design: Gym Membership",
      university: "Bedford College",
      period: "April 2014",
      category: "Bedford College Project",
      description: `The Spreadsheet Design module provided valuable insights into Excel's capabilities, equipping me with the skills to create high-quality spreadsheets for industry use. The challenge was to design a comprehensive membership spreadsheet tailored for a gym club, which included three distinct membership categories to manage varying subscription plans. Additionally, the club organized optional trips funded by members and held weekly gatherings in a community hall, which incurred expenses like rent, insurance, and electricity. The project included a video demonstration showcasing the spreadsheet's functionality and extensive documentation comparing automation methods, analysing data, and explaining how organisations can interpret data effectively.`,
      tags: ["Excel", "Spreadsheet Design"],
      grade: "Distinction",
    }
  ];

  const experiences = [
    {
        company: "Acticheck",
        link: "https://acticheck.com/",
        period: "June 2024 - October 2024",
        role: "Software Developer",
        location: "Fowlmere, Cambridge",
        description: [
          "Developed a secure .NET Core web app for user authentication, integrating .NET Core Identity, encrypted SQL Server credentials, and third-party services like Facebook login and SendGrid email. Implemented configurable logging and secure data transfer via DTOs for streamlined user management and robust security.",
          "Developed a .NET Web API for seamless payload transmission, logging decoded messages for analysis and ensuring smooth data handling. Tested the API using Postman. Created gRPC client-server prototypes for efficient data transmission, logging data into an SQL table using Entity Framework Core.",
          "Developed a .NET MAUI application showcasing cross-platform functionality and Bluetooth capabilities."
        ],
        technologies: [".NET Core", "SQL Server", "Identity", "OAuth"]
    },
    {
      company: "iGO4 Insurance",
      link: "https://www.igo4.com/",
      period: "Jan 2018 - Dec 2023",
      role: "Software Developer",
      location: "Werrington, Peterborough",
      description:  ["Collaborated with diverse Agile teams on critical projects to develop a sophisticated pricing optimisation tool that incorporates machine learning models in pricing strategies (Earnix).",
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
      technologies: ["Java", "C#", "Python", "AWS", "SQL", "REST API"],
      images: igo4GalleryImages,
    }
  ];

  const education = [
    {
      institution: "Coventry University",
      period: "2014 - 2017",
      degree: "Bachelor of Science (BSc), Computing",
      grade: "2:1",
      activities: "Boxing, Indoor Football, Gym, Tennis, Lacrosse, JJ's Nightclub Rep",
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
      ]
    },
    {
      institution: "Longsands Academy",
      period: "2010 - 2012",
      degree: "A-Levels",
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

  return (
    <div className="min-h-screen bg-gray-50">
{/* Hero Section */}
{/* Hero Section */}
<div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
  <div className="max-w-6xl mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
      Kieran Emery
    </h1>
    <p className="text-xl md:text-2xl text-blue-100 mb-8">
      British software developer building innovative solutions with modern technologies
    </p>
    {/* Centering the buttons */}
    <div className="flex justify-center space-x-4">
      <a href="mailto:kizwiz@hotmail.co.uk" className="bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-blue-50 transition duration-300">
        Contact Me
      </a>
      <a
        href="https://www.dropbox.com/scl/fi/lhobteip40zlhp6r25fpe/KieranEmery_CV_2024.pdf?rlkey=t18j3jpmfsco2py96wn32nyp8&st=3nhxivnx&dl=0"
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
            <a href="https://www.facebook.com/kizwiz6" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/kizwiz6" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
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
              {['about', 'projects', 'experience', 'education'].map((tab) => (
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
            {projectsIntroContent}
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

                  {/* Thumbnail Image */}
                  {project.thumbnail && (
                    <img 
                      src={project.thumbnail} 
                      alt={`${project.title} thumbnail`} 
                      className="mb-4 rounded" // Add any styling you want here
                    />
                  )}

                  {/* Video Section */}
                  {project.videoSource && ( // Check for videoSource here
                    <div className="video-container mb-4">
                      <video controls className="w-full">
                        <source src={`${process.env.PUBLIC_URL}/${project.videoSource}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}

                  {/* Optional: YouTube Video Embed */}
                  {project.youtubeVideo && (
                    <iframe 
                      width="100%" 
                      height="315" 
                      src={project.youtubeVideo.replace("watch?v=", "embed/")} 
                      title={`${project.title} video`} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                      className="mb-4"
                    ></iframe>
                  )}

                  {/* Conditionally render description if it exists */}
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mb-3">
                    {project.category}
                  </span>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Conditionally render responsibilities if they exist */}
                  {project.responsibilities && (
                    <>
                      <h4 className="font-medium mt-4">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {project.responsibilities?.map((task, taskIndex) => (
                          <li key={taskIndex}>
                            <strong>{task.title}:</strong> {task.description}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Conditionally render the grade if it exists */}
                  {project.grade && (
                    <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded mb-3">
                      Grade: {project.grade}
                    </span>
                  )}

                  {/* Safely check if 'tags' exist before mapping and render them after responsibilities */}
                  {project.tags && project.tags.length > 0 && (
                    <>
                      <h4 className="font-medium mt-4">Technologies & Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      {activeTab === 'experience' && (
        <div>
          <h1 className="text-3xl font-bold mb-8">Work Experience</h1>
          <p className="text-gray-600 mb-4">
            Below is a summary of the work I've completed at various companies, showcasing my contributions to significant projects, technologies utilised, and the skills I've developed throughout my career.
          </p>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {exp.company}
                  </a>
                </h3>
                {/* Displaying Location */}
                <p className="text-md text-gray-500 mb-1">{exp.location}</p>

                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>

                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Image Gallery Section */}
                {exp.images && exp.images.length > 0 && (
                  <>
                    <ImageGallery images={exp.images} />
                  </>
                )}
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


                {/* Date, Institution, and Grade on Same Line */}
                <div className="flex items-center mb-2">
                  <span className="text-gray-600 flex-shrink-0">
                    <Calendar size={16} className="mr-2" />
                    {edu.period}
                  </span>

                  {/* Wrap the institution in a div with flex-grow */}
                  <h3 className="text-xl font-semibold flex-grow text-center">{edu.institution}</h3>

                  {/* Adding "Grade: " before the grade */}
                  <span className="font-medium text-gray-600 flex-shrink-0 ml-4">
                    Grade: {edu.grade}
                  </span>
                </div>

            {/* Description for each education entry */}
            <p className="text-gray-600 mb-4">
              {edu.institution === 'Coventry University' && 
                "At Coventry University, I honed my skills in software development and project management through hands-on projects and collaborative teamwork. I specialised in agile methodologies and developed a strong foundation in both front-end and back-end technologies."}

              {edu.institution === 'Bedford College' && 
                "During my time at Bedford College, I focused on developing my understanding of web technologies and design principles. The curriculum emphasised practical skills and provided opportunities to work on real-world projects, preparing me for my future studies."}

              {edu.institution === 'Longsands Academy' &&
                "At Longsands Academy, I completed my GCSEs with a focus on subjects that laid the groundwork for my interest in computing and technology. The supportive learning environment helped cultivate my passion for problem-solving and critical thinking."}
            </p>



                  <p className="font-medium mb-4">{edu.degree}</p>

                  {/* Activities Section */}
                  {edu.activities && (
                    <>
                      <h4 className="font-medium mb-2">Extracurricular activities:</h4>
                      <p className="text-gray-600">
                        {edu.activities.split(',').map((activity, index) => (
                          <span key={index}>
                            {activity.trim()}
                            {index < edu.activities.split(',').length - 1 && ', '}
                          </span>
                        ))}
                      </p>
                    </>
                  )}

                  {/* Coursework Table */}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <>
                      <h4 className="font-medium mb-4">Courses:</h4>
                      <table className="w-full table-auto border-collapse text-left">
                        <thead>
                          <tr>
                            <th className="border-b-2 py-2 text-gray-700">Year</th>
                            <th className="border-b-2 py-2 text-gray-700">Subjects</th>
                          </tr>
                        </thead>
                        <tbody>
                          {edu.coursework.map((course, courseIndex) => (
                            <tr key={courseIndex} className="border-b">
                              <td className="py-2 font-medium text-gray-700">{course.year}</td>
                              <td className="py-2">
                                <ul className="list-disc list-inside">
                                  {course.subjects.map((subject, subjectIndex) => (
                                    <li key={subjectIndex} className="text-gray-600">{subject}</li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}

                  {/* Image Gallery Section for Coventry University only */}
                  {edu.institution === "Coventry University" && uniGalleryImages && uniGalleryImages.length > 0 && (
                    <ImageGallery images={uniGalleryImages} title="Coventry University" />
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
