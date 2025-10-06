import React, { useState, useEffect } from 'react';
import styles from './ThirdBlock.module.css';

const ThirdBlock = () => {
    const [time, setTime] = useState([]);

    const generateRandomSeconds = () => {
        return Math.floor(Math.random() * (15000 - 3600 + 1)) + 3600;
    }
    
    const generateRandomTime = () => {
        return [
            generateRandomSeconds(),
            generateRandomSeconds(),
            generateRandomSeconds(),
            generateRandomSeconds(),
            generateRandomSeconds(),
            generateRandomSeconds()
        ];
    }

    const formatTime = (seconds) => {
        if (seconds === undefined || seconds === null) return '--:--:--';
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            secs.toString().padStart(2, '0')
        ].join(':');
    }

    useEffect(() => {
        const initialTimes = generateRandomTime();
        setTime(initialTimes);

        const timer = setInterval(() => {
            setTime(prevTime => {
                if (!prevTime || !Array.isArray(prevTime) || prevTime.length === 0) {
                    return [];
                }

                return prevTime.map(seconds => seconds > 0 ? seconds - 1 : 0);
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <span><p>Amazing</p> and Super Unique Art of This <p>Week</p></span>
                </div>
                <div className={styles.cta}>
                    <span>Explore</span>
                    <span>Explore</span>
                    <span>Explore</span>
                    <span>Explore</span>
                    <span>Explore</span>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.card1}>
                    <div className={styles.image1}></div>
                    <div className={styles.description}>
                        <div className={styles.top}>
                            <div className={styles.top_left}>
                                Cyberpunk
                            </div>
                            <div className={styles.top_right}>
                                <div className={styles.coin}></div>
                                <div className={styles.price}>630ETH</div>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.end}>
                                <div className={styles.in_top}>Ending In</div>
                                <div className={styles.in_bottom}>
                                    <div className={styles.clock}></div>
                                    <div className={styles.time}>{formatTime(time[0])}</div>
                                </div>
                            </div>
                            <div className={styles.end_button}>
                                <p>Place a bid</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card2}>
                    <div className={styles.image2}></div>
                    <div className={styles.description}>
                        <div className={styles.top}>
                            <div className={styles.top_left}>
                                Charge, Qi tiao yu
                            </div>
                            <div className={styles.top_right}>
                                <div className={styles.coin}></div>
                                <div className={styles.price}>590ETH</div>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.end}>
                                <div className={styles.in_top}>Ending In</div>
                                <div className={styles.in_bottom}>
                                    <div className={styles.clock}></div>
                                    <div className={styles.time}>{formatTime(time[1])}</div>
                                </div>
                            </div>
                            <div className={styles.end_button}>
                                <p>Place a bid</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card3}>
                    <div className={styles.image3}></div>
                    <div className={styles.description}>
                        <div className={styles.top}>
                            <div className={styles.top_left}>
                                Surgeon, Josh Rife
                            </div>
                            <div className={styles.top_right}>
                                <div className={styles.coin}></div>
                                <div className={styles.price}>312ETH</div>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.end}>
                                <div className={styles.in_top}>Ending In</div>
                                <div className={styles.in_bottom}>
                                    <div className={styles.clock}></div>
                                    <div className={styles.time}>{formatTime(time[2])}</div>
                                </div>
                            </div>
                            <div className={styles.end_button}>
                                <p>Place a bid</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.card1}>
                    <div className={styles.image4}></div>
                    <div className={styles.description}>
                        <div className={styles.top}>
                            <div className={styles.top_left}>
                                Forest Story
                            </div>
                            <div className={styles.top_right}>
                                <div className={styles.coin}></div>
                                <div className={styles.price}>570ETH</div>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.end}>
                                <div className={styles.in_top}>Ending In</div>
                                <div className={styles.in_bottom}>
                                    <div className={styles.clock}></div>
                                    <div className={styles.time}>{formatTime(time[3])}</div>
                                </div>
                            </div>
                            <div className={styles.end_button}>
                                <p>Place a bid</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card2}>
                    <div className={styles.image5}></div>
                    <div className={styles.description}>
                        <div className={styles.top}>
                            <div className={styles.top_left}>
                                Let's Play
                            </div>
                            <div className={styles.top_right}>
                                <div className={styles.coin}></div>
                                <div className={styles.price}>490ETH</div>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.end}>
                                <div className={styles.in_top}>Ending In</div>
                                <div className={styles.in_bottom}>
                                    <div className={styles.clock}></div>
                                    <div className={styles.time}>{formatTime(time[4])}</div>
                                </div>
                            </div>
                            <div className={styles.end_button}>
                                <p>Place a bid</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card3}>
                    <div className={styles.image6}></div>
                    <div className={styles.description}>
                        <div className={styles.top}>
                            <div className={styles.top_left}>
                                Nice Face
                            </div>
                            <div className={styles.top_right}>
                                <div className={styles.coin}></div>
                                <div className={styles.price}>490ETH</div>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.end}>
                                <div className={styles.in_top}>Ending In</div>
                                <div className={styles.in_bottom}>
                                    <div className={styles.clock}></div>
                                    <div className={styles.time}>{formatTime(time[5])}</div>
                                </div>
                            </div>
                            <div className={styles.end_button}>
                                <p>Place a bid</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdBlock;