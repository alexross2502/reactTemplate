import React, { useEffect, useRef, useState } from 'react';
import styles from './FirstBlock.module.css';

const AnimatedNumber = ({ value, suffix = '', isVisible }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = useRef(0);
  const animationRef = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      targetValue.current = value;
      
      const duration = 4000;
      const startTime = Date.now();
      
      const animate = () => {
        const currentTime = Date.now();
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const easeOutQuad = t => t * (2 - t);
        const currentValue = Math.floor(easeOutQuad(progress) * targetValue.current);
        
        setDisplayValue(currentValue);
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, value]);
  
  return <span>{displayValue.toLocaleString()}{suffix}</span>;
};

const FirstBlock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);
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
                            <span>Explore</span>
                            <span>Explore</span>
                            <span>Explore</span>
                            <span>Explore</span>
                            <span>Explore</span>
                        </div>

                    </div>
                </div>
                <div 
                  ref={statsRef}
                  className={`${styles.stats} ${isVisible ? styles.visible : ''}`}
                >
                    <div className={styles.stats_card1}>
                        <p className={styles.number}>
                            <AnimatedNumber value={8.9} isVisible={isVisible} />K
                        </p>
                        <p className={styles.label}>Art work</p>
                    </div>
                    <div className={styles.stats_card2}>
                        <p className={styles.number}>
                            <AnimatedNumber value={65} isVisible={isVisible} />K
                        </p>
                        <p className={styles.label}>Artists</p>
                    </div>
                    <div className={styles.stats_card3}>
                        <p className={styles.number}>
                            <AnimatedNumber value={87} isVisible={isVisible} />K
                        </p>
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