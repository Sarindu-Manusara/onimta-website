'use client'
import funFactData from '../data/FunFactData';
import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const FunFact = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <section className="funfact-two">
            <div className="container">
                <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                >
                    <ul className="list-unstyled funfact-two__list">
                        {
                            funFactData.map(({ id, icon, text, count }) => <li key={id} className="funfact-two__item count-box">
                                <div className="funfact-two__icon"><i className={icon}></i></div>
                                <div className="funfact-two__content">
                                    <h3 className="funfact-two__count">{counterOn && (
                                        <CountUp className='count-text' end={count} duration={1.5} />
                                    )} k+</h3>

                                    <p className="funfact-two__text">{text}</p>
                                </div>
                            </li>)
                        }

                    </ul>
                </ScrollTrigger>
            </div>
        </section>
    );
};

export default FunFact;