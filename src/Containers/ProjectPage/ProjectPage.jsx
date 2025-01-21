import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss'




const portfolioData = [
    { id: 1, name: 'Book Store', link: "https://book-store-puce-omega.vercel.app/" },
    { id: 2, name: 'Dice Game', link: "https://dice-game-pdeg.vercel.app/" },
    { id: 3, name: 'Crypto Dashboard', link: "https://crypto-gamma-khaki.vercel.app/" },
    { id: 4, name: 'Chat-app', link: "https://github.com/sojitrakartik02/Chat-app" },
    { id: 5, name: 'Gemini-Clone', link: "https://gemini-clone-ruddy.vercel.app/" },
    { id: 6, name: 'Invoice App', link: "https://invoices-topaz.vercel.app/" }
];

const projectDetails = {
    1: {
        name: 'Book Store',
        description: 'Developed a full-stack web application to manage a bookstore\'s inventory and user authentication. The application provides secure data exchange and persistent user sessions for a seamless user experience.',
        technologies: 'Node.js, Express, MongoDB, Mongoose, React, Context API',
        rolesResponsibilities: [
            'Designed and developed RESTful API endpoints for book management and user authentication.',
            'Integrated middleware like CORS for secure data exchange.',
            'Implemented frontend authentication using React\'s Context API and localStorage for persistent user sessions.',
            'Managed the bookstore\'s inventory and user authentication processes.'
        ]
    },
    2: {
        name: 'Dice Game',
        description: 'Developed a Dice Game using ReactJS, incorporating features such as dice rolling, number selection, and score tracking. The game allows users to roll a dice, select numbers, and track their score, all within a visually appealing interface styled using Styled Components.',
        technologies: 'React, Styled Components',
        rolesResponsibilities: [
            'Developed a responsive and interactive game interface using ReactJS.',
            "Implemented dice rolling functionality and number selection features.",
            "Utilized Styled Components for designing and styling UI elements.",
            "Managed game state and user interactions effectively.",
            "Ensured a seamless user experience through intuitive design and smooth animations."
        ]
    },
    3: {
        name: 'Crypto Dashboard',
        description: 'The Forex Portfolio Website is a responsive web application built using React and Chakra UI. It provides users with real-time data visualization of forex market trends, utilizing Framer Motion for smooth animations and transitions.',
        technologies: 'React, React Router DOM, Chakra UI',
        rolesResponsibilities: [
            'Developed responsive frontend components using React and Chakra UI.',
            'Implemented various frontend features including the dashboard, transaction management, and support pages using React.',
            'Integrated React Router DOM to manage navigation between different sections of the application.',
            'Utilized Chakra UI and Emotion for designing and styling components, ensuring a consistent and appealing user interface.'
        ]
    },
    4: {
        name: 'Chat-app',
        description: 'Developed a full-stack application named \'Chat-app\' that enables real-time messaging and user authentication. The application supports seamless communication between users with a responsive and interactive user interface.',
        technologies: 'Node.js, Express, MongoDB, React, Vite, Socket.IO, JWT, Tailwind CSS, DaisyUI',
        rolesResponsibilities: [
            'Designed and developed backend RESTful APIs using Node.js and Express.',
            'Implemented real-time messaging functionality using Socket.IO.',
            'Developed and integrated user authentication and authorization with JWT.',
            'Created responsive and interactive UI components using React, Tailwind CSS, and DaisyUI.',
            'Managed project dependencies and scripts for efficient development and deployment processes.'
        ]
    },
    5: {
        name: 'Gemini-Clone',
        description: 'Developed a cutting-edge AI-driven chat interface that mimics Gemini capabilities, incorporating real- time speech recognition, dynamic prompt processing, and seamless dark mode functionality.',
        technologies: 'React, Vite, @mui/material, react-speech-recognition, use-dark-mode, Node.js, Express.js, @google/generative-ai,dotenv, eslint.',
        rolesResponsibilities: [
            'Implemented responsive UI using React and @mui/material.',
            'Integrated real-time speech recognition with react-speech-recognition.',
            'Developed dark mode functionality using use-dark-mode.',
            'Set up Node.js and Express.js server.',
            "Integrated Google's Generative AI API for prompt response generation.",
            "Managed state with React's Context API.",
            "Configured and deployed the application on Vercel using Vite and Node.js.",
            "Conducted thorough testing and debugging to ensure reliability.",
            "Documented the development process and created user guides."
        ]
    },
    6: {
        name: 'Invoice App',
        description: 'The Invoice App is a web application developed to manage and generate invoices efficiently. It provides functionalities for creating, viewing, and deleting invoices, with an intuitive interface for adding products and calculating totals.',
        technologies: 'React, Firebase, Firestore, Chart.js, HTML2Canvas, jsPDF, React Router DOM',
        rolesResponsibilities: [
            'Developed and implemented responsive frontend components using React and React Router DOM.',
            'Designed and styled user interfaces with custom CSS to ensure a seamless user experience.',
            'Integrated Firebase for user authentication and Firestore for managing invoice data.',
            'Utilized Chart.js for visualizing invoice data trends and HTML2Canvas/jsPDF for generating downloadable PDF invoices.',
            'Implemented functionality for creating, viewing, and deleting invoices, including product management and total calculation.',
            'Ensured application stability and performance by handling asynchronous operations and user interactions.'
        ]
    }
};



const ProjectPage = () => {
    const { projectId } = useParams();
    const project = projectDetails[projectId];

    if (!project) {
        return <div style={{ background: "red" }} >Project not found!</div>;
    }
    const projectLink = portfolioData.find(item => item.id === parseInt(projectId))?.link;
    const handleVisit = () => {
        if (projectLink) {
            window.open(projectLink, '_blank')
        } else {
            alert("Link Not Avlible")
        }
    }
    return (
        <div className='project-page' >
            <div className='Project_header1'>  <h1 className='Project_header'>Project Name: <span style={{ color: "white" }}> {project.name}</span></h1>
            </div><p><strong>Description:</strong> <span style={{ color: "white" }}> {project.description}</span></p>
            <p><strong>Technologies:</strong><span style={{ color: "white" }}> {project.technologies}</span></p>
            <div style={{ marginTop: "15px" }}>
                <strong>Roles & Responsibilities:</strong>
                <ul style={{ color: "white", marginTop: "8px" }}>
                    {project.rolesResponsibilities.map((role, index) => (
                        <li style={{ color: "white", marginTop: "8px" }} key={index}>{role}</li>
                    ))}
                </ul>
            </div>
            <button onClick={handleVisit}>Visite</button>
        </div >
    );
}

export default ProjectPage;
