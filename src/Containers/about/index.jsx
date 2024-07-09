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
        value: "Kartik",
    },

    {
        label: "Address",
        value: "Ahmedabad",
    },
    {
        label: "Email",
        value: "kartiksojitra02@gmail.com",
    },
    {
        label: "Contact No",
        value: "+91 7043468230",
    },
    {
        label: "Github",
        value: "sojitrakartik02",
        link: "https://github.com/sojitrakartik02"
    },
    {
        label: "LinkedIn",
        value: "kartik02",
        link: "https://www.linkedin.com/in/sojitra-kartik-0898b5232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
];

const jobSummry = "As a Fullstack Developer, I thrive on crafting robust and scalable web applications that seamlessly integrate front - end and back - end functionalities.With a solid foundation in both client - side and server - side technologies, I specialize in creating responsive user interfaces using modern frameworks like React and Angular, coupled with backend services built on Node.js .Proficient in database management systems such  MongoDB, I ensure data integrity and efficiency.My expertise extends to RESTful API development."

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
                        <h3>Frontend Developer</h3>
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
