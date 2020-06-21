import React, { useState } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

const Services = () => {
    const [services, setServices] = useState([{
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "This HTML file is a templateIf you open it directly in the browser, you will see an empty page."
    },
    {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "This HTML file is a templateIf you open it directly in the browser, you will see an empty page."
    },
    {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "This HTML file is a templateIf you open it directly in the browser, you will see an empty page."
    },
    {
        icon: <FaBeer />,
        title: "strongest beer",
        info: "This HTML file is a templateIf you open it directly in the browser, you will see an empty page."
    },
    ])
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((element, index) => {
                    return <article key={index} className="service">
                        <span>{element.icon}</span>
                        <h6>{element.title}</h6>
                        <p>{element.info}</p>
                    </article>
                })}
            </div>

        </section>
    )
}

export default Services;