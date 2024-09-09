import React from 'react';
import PageHeaderContent from '../../Components/pageHeaderContant';
import { BsInfoCircleFill } from 'react-icons/bs';
import { data } from './utils';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles.scss';
import { IoMdDownload } from "react-icons/io";
import { MdWork } from 'react-icons/md';

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = '/MAN_PRAJAPATI_Resume.pdf';
        link.download = 'Man_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    }
    return (
        <section className='resume' id='resume'>
            <PageHeaderContent headerText='My resume'
                icon={
                    <div className="download-icon-wrapper" onClick={handleDownload}>
                        <IoMdDownload className='icon' size={40} style={{ cursor: "pointer" }} />
                    </div>
                }
            />
            <div className='timeline'>
                <div className='timeline__experience'>
                    <h3 className='timeline__experience__header-text'>Experiences</h3>
                    <VerticalTimeline layout={'1-column'} lineColor='var(--yellow-theme-main-color)'>
                        {data.experience.map((item, i) => (
                            <VerticalTimelineElement
                                contentStyle={{
                                    background: "none",
                                    border: "1.5px solid var(--yellow-theme-main-color)",
                                    color: "var(--yellow-theme-sub-text-color)"
                                }}
                                iconStyle={{
                                    background: '#181818',
                                    color: "var(--yellow-theme-main-color)"
                                }}
                                icon={<MdWork />}
                                date='Dec. 2023 - Present'
                                key={i}
                                className='timeline__experience__vertical-timeline-element'
                            >
                                <div className='vertical-timeline-element-title-wrapper'>
                                    <h3 >{item.title}</h3>
                                    <h4 >{item.subTitle}</h4>
                                </div>
                                <p className='vertical-timeline-element-title-wrapper-des' >{item.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
                <div className='timeline__education'>
                    <h3 className='timeline__education__header-text'>Education</h3>
                    <VerticalTimeline layout={'1-column'} lineColor='var(--yellow-theme-main-color)'>
                        {data.education.map((item, i) => (
                            <VerticalTimelineElement
                                contentStyle={{
                                    background: "none",
                                    border: "1.5px solid var(--yellow-theme-main-color)",
                                    color: "var(--yellow-theme-sub-text-color)"
                                }}
                                iconStyle={{
                                    background: '#181818',
                                    color: "var(--yellow-theme-main-color)"
                                }}
                                icon={<MdWork />}

                                key={i}
                                className='timeline__education__vertical-timeline-element'
                            >
                                <div className='vertical-timeline-element-title-wrapper'>
                                    <h3 >{item.title}</h3>
                                    <h4 >{item.subTitle}</h4>
                                </div>
                                <p className='vertical-timeline-element-title-wrapper-des' >{item.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Resume;
