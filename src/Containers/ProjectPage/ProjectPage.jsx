import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss'





const projectDetails = {
    1: {
        name: 'Sneaker E-commerce Store',
        technologies: 'Node.js, Express, MongoDB, Mongoose, React, Context API',
        description: [
            ' Developed a dynamic and user-friendly ecommerce web application catering to sneaker enthusiasts using MERN.',
            ' Designed and implemented an engaging user interface using React, offering seamless  navigation and interactive product displays.',
            ' Utilized Express.js and Node.js to build robust backend, enabling efficient data handling, user authentication and cart management.',
            'Integrated MongoDB atlas to store and manage product information, user profiles order history securely.Implemented a responsive design approach, ensuring optimal user experience across various devices and screen sizes.'

        ],

    },
    2: {
        name: ' Screen Time Analysis',
        technologies: 'web-scraping, matplotlib in python',
        description: [
            '  Designed and implemented a Python-based tool to analyze screen time data by web scraping daily usage metrics from various online sources, enabling efficient tracking and visualization of digital consumption patterns.',
            ' Built and maintained a web scraping pipeline using Python libraries (BeautifulSoup,Scrapy) to automate the extraction of screen time data from multiple platforms,reducing manual effort and increasing data accuracy.'
        ],
    },
    3: {
        name: 'Hospital Management System',
        technologies: 'Java',
        description: [
            ' Created a Java-based application to manage key hospital operations, improving workflow efficiency.',

            ' Developed features for adding, updating, and tracking patient information, ensuring accurate and up - to - date records.',
            'Leveraged inheritance and other Java classes to create a modular and maintainable codebase, ensuring scalability and ease of updates'

        ],
    },
    4: {
        name: ' Pulpit Infotech Website',
        technologies: 'Node.js, Express, MongoDB, React',
        description: [
            " Created a fully functional, responsive website for Pulpit Infotech, showcasing the company's IT services and capabilities. which is now live and accessible on Google.",
            " Ensured the website is responsive across all devices and platforms, providing a seamless user experience on both desktop and mobile.",
            " Designed and implemented a user-friendly interface to effectively present the wide range of IT solutions offered by Pulpit Infotech."
        ],
    },

};



const ProjectPage = () => {
    const { projectId } = useParams();
    const project = projectDetails[projectId];

    if (!project) {
        return <div style={{ background: "red" }} >Project not found!</div>;
    }

    return (
        <div className='project-page' >
            <div className='Project_header1'>  <h1 className='Project_header'>Project Name: <span style={{ color: "white" }}> {project.name}</span></h1>
            </div>
            <p><strong>Technologies:</strong><span style={{ color: "white" }}> {project.technologies}</span></p>
            <div style={{ marginTop: "15px" }}>
                <strong>Roles & Responsibilities:</strong>
                <ul style={{ color: "white", marginTop: "8px" }}>
                    {project.description.map((role, index) => (
                        <li style={{ color: "white", marginTop: "8px" }} key={index}>{role}</li>
                    ))}
                </ul>
            </div>

        </div >
    );
}

export default ProjectPage;
