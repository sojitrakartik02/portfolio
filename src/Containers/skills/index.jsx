import React from 'react'
import PageHeaderContent from '../../Components/pageHeaderContant'
import { BsInfoCircleFill } from 'react-icons/bs'
import { skillsData } from './utils.js'
import { Line } from 'rc-progress'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import './styles.scss'
const skills = () => {
    return (
        <section className='skills' id="skills">
            <PageHeaderContent headerText="My Skills " icon={<BsInfoCircleFill size={40} />} />
            <div className='skills__contennt-wrapper'>
                {
                    skillsData.map((item, i) => (
                        <div key={i} className='skills__contennt-wrapper__iner-content'>
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: "translateX(-200px)"

                                }}
                                end={{
                                    transform: "translateX(0px)"

                                }}

                            >
                                <h3 className='skills__contennt-wrapper__iner-content__categoty-text'>{item.lable}</h3>
                                <div className='skills__contennt-wrapper__iner-content__progressbar'>
                                    {item.data.map((skillsItem, j) => (
                                        <AnimateKeyframes
                                            play
                                            duration={1}
                                            delay={0.3}
                                            keyframes={["opacity:1", "opacity:0"]}
                                            iterationCount="1"
                                        >
                                            <div className='progressbar-wrapper' key={j}>
                                                <p>{skillsItem.skillName}</p>
                                                <Line
                                                    percent={skillsItem.percentage}
                                                    strokeColor="var(--yellow-theme-main-color)"
                                                    strokeWidth='2'
                                                    trailWidth={"2"}

                                                    strokeLinecap='square'

                                                />
                                            </div>

                                        </AnimateKeyframes>
                                    ))}
                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default skills
