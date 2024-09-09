import React from 'react';
import PageHeaderContent from '../../Components/pageHeaderContant';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'
import './styles.scss';

const personalDetails = [
    {
        label: "Name",
        value: "Man Prajapati",
    },

    {
        label: "Address",
        value: "Gandhinagar",
    },
    {
        label: "Email",
        value: "manprajapati189@GMAIL.COM",
    },
    {
        label: "Contact No",
        value: "+91 7096263536",
    },

    {
        label: "LinkedIn",
        value: "man",
        link: "https://www.linkedin.com/in/man-prajapati-05bb29295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
];

const jobSummry = "As a Full Stack Developer since December 2023, I've been driving the development of dynamic web applications, leveraging technologies like React, Node.js, Express, and MongoDB.My work spans frontend to backend, where I've implemented seamless integrations with APIs and third - party services, always with a focus on performance and user experience.I thrive in collaborative environments, contributing to projects that deliver robust and scalable solutions.My commitment to excellence is reflected in my active participation in Agile methodologies and my consistent use of Git for efficient code management."

const About = () => {
    return (
        <section className='about' id="about">
            <PageHeaderContent
                headerText="About"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='about__content'>
                <div className='about__content__personalwrapper'>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)',
                        }}
                        end={{
                            transform: 'translateX(0px)',
                        }}
                    >
                        <h3>Full Stack Developer</h3>
                        <p>{jobSummry}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)',
                        }}
                        end={{
                            transform: 'translateX(0px)',
                        }}
                    >
                        <h3 className='personalInformationHeader'>Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className='title'>{item.label}:</span>
                                    {item.label === 'Github' || item.label === 'LinkedIn' ? (
                                        <a style={{ textDecoration: "none" }}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='value'
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className='value'>{item.value}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className='about__content__serviceswrapper'>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)',
                        }}
                        end={{
                            transform: 'translateX(0px)',
                        }}
                    >
                        <div className='about__content__serviceswrapper__innerContent'>
                            <div>
                                <FaDev size={60} color='var(--yellow-theme-main-color)' />
                            </div>

                            <div>
                                <DiAndroid size={60} color='var(--yellow-theme-main-color)' />
                            </div>
                            <div>
                                <FaDatabase size={60} color='var(--yellow-theme-main-color)' />
                            </div>
                            <div>
                                <DiApple size={60} color='var(--yellow-theme-main-color)' />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};

export default About;
