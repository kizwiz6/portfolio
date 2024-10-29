import React from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  // Spring animations for heading and profile picture
  const headingAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const profilePicAnimation = useSpring({ transform: 'scale(1)', from: { transform: 'scale(0.8)' }, delay: 300 });

  // Content sections for the trail animation
  const content = [
    {
      title: "My Story",
      text: "I'm Kieran, a dedicated Software Developer based in Cambridgeshire, UK. With nearly seven years of commercial experience at companies like Acticheck and iGO4 Insurance, I have honed my skills in software development."
    },
    {
      title: "Welcome to My Portfolio!",
      text: (
        <span>
          Welcome to my digital portfolio! On the{' '}
          <Link to="/projects" className='text-blue-600 hover:underline focus:outline-none'>
            Projects
          </Link>{' '}
          page, you'll find some of my most cherished projects, showcasing my approach to solving real-world challenges with innovative solutions. Although confidentiality restricts me from revealing specifics of my commercial projects, I'm excited to share the essence of my work and the skills I've developed. Additionally, my{' '}
          <Link to="/experience" className='text-blue-600 hover:underline focus:outline-none'>
            Experience
          </Link>{' '}
          page provides a detailed overview of my professional journey, including the roles I've held and the skills I've acquired along the way.
        </span>
      )
    },
    {
      title: "Let's Connect!",
      text: (
        <span>
          Thank you for visiting my portfolio! I look forward to connecting and sharing my passion for development. Feel free to reach out via email or through my contact form.
        </span>
      )
    }
  ];

  // Trail animation for content sections
  const trail = useTrail(content.length, {
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateX(-20px)' },
    delay: 400
  });

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Animated Heading */}
      <animated.h2 style={headingAnimation} className="text-4xl font-bold mb-6">
        About Me
      </animated.h2>

      {/* Animated Profile Picture */}
      <animated.div style={profilePicAnimation} className="mb-8 flex flex-col items-center">
        <img
          src="https://i.imgur.com/sN2gjsM.png"
          alt="Kieran Emery"
          className="w-100 h-100 object-cover mb-4 rounded-full shadow-lg"
        />
      </animated.div>

      {/* Animated Content Blocks */}
      {trail.map((style, index) => (
        <animated.div key={index} style={style} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            {content[index].title}
          </h2>
          <p className="text-lg text-gray-600">{content[index].text}</p>
        </animated.div>
      ))}
    </div>
  );
};

export default AboutMe;
