import React from 'react'
import PageHeaderContent from '../../Components/pageHeaderContant'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './styles.scss'
const Contact = () => {
    return (
        <section className='contact' id="conatct">
            <PageHeaderContent headerText="My conatct " icon={<BsInfoCircleFill size={40} />} />
            <div className='contact__content'>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"

                    }}
                    end={{
                        transform: "translateX(0px)"

                    }}
                >
                    <h1 className='contact__content__header-text'>Let's Talk</h1>

                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"

                    }}
                    end={{
                        transform: "translateX(0px)"

                    }}
                >
                    <div className='contact__content__form'>
                        <div className='contact__content__form__controlswrapper'>
                            <div >
                                <input required type={"text"} name='name' className='inputName' />
                                <label htmlFor="name" className='nameLabel'>Name</label>
                            </div>
                            <div >
                                <input required type={"email"} name='email' className='inputEmail' />
                                <label htmlFor="email" className='emailLabel'>Email</label>
                            </div>

                            <div >
                                <textarea required type={"text"} name='description' className='inputDescription' rows={5} />
                                <label htmlFor="Description" className='descriptionLabel'>Description</label>
                            </div>

                        </div>
                        <button>Submit</button>
                    </div>
                </Animate>
            </div>
        </section>
    )
}

export default Contact
