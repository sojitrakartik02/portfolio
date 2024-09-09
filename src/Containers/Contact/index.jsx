import React, { useState } from 'react'
import PageHeaderContent from '../../Components/pageHeaderContant'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import emailjs from 'emailjs-com'
import { FaSpinner } from "react-icons/fa6";


import './styles.scss'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send('service_l0gycum', 'template_b279os4', formData, '0e8hA7mj8Gs1svsh1')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', description: '' });
                setLoading(false); // Stop the spinner
                alert('Mail sent successfully!'); // Display success alert
            }, (err) => {
                console.error('FAILED...', err);
                setStatus('Message failed to send.');
                setLoading(false); // Stop the spinner
            });
    };
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
                    <form className='contact__content__form' onSubmit={handleSubmit}>
                        <div className='contact__content__form__controlswrapper'>
                            <div >
                                <input value={formData.name}
                                    onChange={handleChange} required type={"text"} name='name' className='inputName' />
                                <label htmlFor="name" className='nameLabel'>Name</label>
                            </div>
                            <div >
                                <input required value={formData.email}
                                    onChange={handleChange}
                                    type={"email"} name='email' className='inputEmail' />
                                <label htmlFor="email" className='emailLabel'>Email</label>
                            </div>

                            <div >
                                <textarea
                                    value={formData.description}
                                    onChange={handleChange} required type={"text"} name='description' className='inputDescription' rows={5} />
                                <label htmlFor="Description" className='descriptionLabel'>Description</label>
                            </div>

                        </div>
                        <button type="submit" disabled={loading}>{loading && <FaSpinner className='spinner' />
                        } Submit</button>
                        {status && <p className='statusMessage'>{status}</p>}

                    </form>
                </Animate>
            </div>
        </section>
    )
}

export default Contact
