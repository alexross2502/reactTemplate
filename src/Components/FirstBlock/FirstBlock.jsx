import React from 'react';
import styles from './FirstBlock.module.css';

const FirstBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content_left}>
                <div className={styles.main}>
                    <div className={styles.title}>
                        <div className={styles.subtitle1}>
                            <p>
                                Discover and Collect The Best NFTs <span>Digital Art.</span>
                            </p>
                        </div>
                        <div className={styles.subtitle2}>
                            Get started with the easiest and most secure platform
                            to buy and trade digital ART and NFT’s. Start exploring the world of digital art
                            and NFTs today and take control of your digital assets with confidence!
                        </div>
                    </div>
                    <div className={styles.cta}>
                        <div className={styles.button}>
                           <p>Explore Now</p>
                        </div>
                        <div className={styles.learn}>learn more about us</div>
                    </div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stats_card1}>
                        <p className={styles.number}><span>8.9</span>K</p>
                        <p className={styles.label}>Art work</p>
                    </div>
                    <div className={styles.stats_card2}>
                        <p className={styles.number}><span>65</span>K</p>
                        <p className={styles.label}>Artists</p>
                    </div>
                    <div className={styles.stats_card3}>
                        <p className={styles.number}><span>87</span>K</p>
                        <p className={styles.label}>Collections</p>
                    </div>
                </div>
            </div>
            <div className={styles.content_right}>

                  <div className={styles.image}></div>

            </div>
        </div>
    );
};

export default FirstBlock;