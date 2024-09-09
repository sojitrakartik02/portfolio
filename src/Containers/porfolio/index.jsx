import React, { useState } from 'react'
import PageHeaderContent from '../../Components/pageHeaderContant'
import { BsInfoCircleFill } from 'react-icons/bs'
import bookStore from '../../images/bookStrore.png'
import chat_app from '../../images/chat-app.png'
import Dice_game from '../../images/Dice_game.png'
import gemini from '../../images/gemini.png'
import Spotify_Clone from '../../images/Crypto.png'
import './styles.scss'
import Invoices from '../../images/Invoices.png'
import { useNavigate } from 'react-router-dom'


const portfolioData = [

    {
        id: 1,
        name: 'Sneaker E-commerce Store',
        // image: bookStore,
        // link: "https://book-store-puce-omega.vercel.app/",
    },
    {
        id: 2,
        name: 'Screen Time Analysis',
        // image: Dice_game,
        // link: "https://dice-game-pdeg.vercel.app/",
    },
    {
        id: 3,
        name: ' Hospital Management System ',
        // image: Spotify_Clone,
        // link: "https://crypto-gamma-khaki.vercel.app/",
    },
    {
        id: 4,
        name: ' Pulpit Infotech Website',
        // image: chat_app,
        // link: "https://github.com/sojitrakartik02/Chat-app",
    },

]

const filetrData = [
    {
        filetrId: 1,
        lable: "All"
    },
    {
        filetrId: 2,
        lable: "Developer"
    },
    {
        filetrId: 3,
        lable: "Design"
    },
]



const Porfolio = () => {
    const [filterValue, setFilterValue] = useState(1)
    const [hoverValue, setHoevrvalue] = useState(null)
    function handleFilter(currentId) {
        setFilterValue(currentId)
    }

    console.log("**************")
    console.log(filterValue)

    const navigate = useNavigate();
    const filteredItems = filterValue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filterValue)

    console.log(filteredItems)

    function handleHover(index) {
        setHoevrvalue(index)
    }

    function handleViste(link) {
        window.open(link, '_blank')
    }
    function handleView(projectId) {
        navigate(`/project/${projectId}`);
    }
    return (
        <section className='portfolio' id="Portfolio">
            <PageHeaderContent
                headerText="My Portfolio "
                icon={<BsInfoCircleFill size={40} />} />
            <div className='portfolio__content'>
                <ul className='portfolio__content__filter'>
                    {
                        filetrData.map((item) => (

                            <li className={item.filetrId === filterValue ? "active" : ''}
                                onClick={() => handleFilter(item.filetrId)}
                                key={item.filetrId}>{item.lable}</li>
                        ))
                    }
                </ul>
                <div className=' portfolio__content__cards'>
                    {
                        filteredItems.map((item, index) => (
                            <div
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                                key={`cardItem${item.name.trim()}`} className='portfolio__content__cards__item'>
                                <div className='portfolio__content__cards__item__img-wrapper'>
                                    {/* <a>
                                        <img src={item.image} />
                                    </a> */}
                                </div>
                                <div className='overlay'>
                                    {
                                        index === hoverValue && (
                                            <div>
                                                <p style={{ fontSize: "30px" }}>{item.name}</p>
                                                <button onClick={() => handleView(item.id)}>View</button>

                                                {/* <button onClick={() => handleViste(item.link)}>Visite</button> */}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Porfolio
