import React from 'react';
import './card.css'

interface CardProps {
    title: string;
    description: string;
    banner: string;
    link: string;
    date: string;
}

function Card(props: CardProps) {
    return (
            <li>
                <a href="" className="card">
                    <img src='https://i.imgur.com/oYiTqum.jpg' className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>

                            <div className="card__header-text">
                                <h3 className="card__title">{props.title}</h3>
                                <span className="card__status">{props.date}</span>
                            </div>
                        </div>
                        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                </a>
            </li>


    )
}

export default Card;