import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'


const Home = () => {
    const navigate = useNavigate();
    const handlenavigateContactPage = () => {
        navigate('/contact')
    }
    return (
        <section id='home' className='home'>
            <div className='home__text-wrapper'>
                <h1 className='home__text-wrapper__hello'>Hello, I'm Man <br />Full Stack Developer</h1>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}
                end={{
                    transform: 'translateX(0px)'
                }}
            >
                <div className='home__contant-me'>
                    <button onClick={handlenavigateContactPage}>Hire Me</button>
                </div>
            </Animate>
        </section>
    )
}

export default Home
