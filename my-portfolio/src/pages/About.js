import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const About = () => {
    return (
        <Layout>
            <div className="about-page">
                <header className="page-heading">
                    <p className="eyebrow">About / 01</p>
                    <h2>Software that solves a useful problem.</h2>
                    <p className="page-lede">
                        I’m Kieran, a full-stack developer in Cambridgeshire. I enjoy taking a feature from an open question through implementation, testing, and release.
                    </p>
                </header>

                <div className="about-layout">
                    <div className="about-copy">
                        <section className="about-section">
                            <h3>My story</h3>
                            <p>
                                Since 2018, I’ve worked across insurance and automotive software, building APIs, data workflows, and customer-facing applications. I’m currently developing a multi-tenant automotive SaaS platform at Return on Investment Ltd.
                            </p>
                        </section>
                        <section className="about-section">
                            <h3>How I work</h3>
                            <p>
                                I like owning a problem end to end: understanding the requirements, working through the backend and frontend changes, and getting a tested, production-ready pull request over the line. I’m especially happy digging into performance and hard-to-reproduce bugs.
                            </p>
                        </section>
                        <section className="about-section">
                            <h3>Explore the portfolio</h3>
                            <p>
                                Browse <Link to="/projects">selected projects</Link>, follow my <Link to="/experience">career timeline</Link>, or see the <Link to="/education">study and coursework</Link> that started it all.
                            </p>
                        </section>
                        <div className="about-facts" aria-label="Profile highlights">
                            <div className="about-fact"><strong>2018—now</strong><span>Building software</span></div>
                            <div className="about-fact"><strong>C# + React</strong><span>Across the stack</span></div>
                            <div className="about-fact"><strong>Feature to prod</strong><span>End-to-end ownership</span></div>
                        </div>
                    </div>

                    <figure className="about-photo">
                        <img
                            className="about-portrait"
                            src={`${process.env.PUBLIC_URL}/profile.jpeg`}
                            alt="Kieran Emery outdoors"
                        />
                        <figcaption><span>Full-stack developer</span><strong>Cambridgeshire, UK</strong></figcaption>
                    </figure>
                </div>
            </div>
        </Layout>
    );
};

export default About;