import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
      <header className={styles.navbar}>
          <div className={styles.menu}>
              <div className={styles.frame}>
                  <p className={styles.marketplace}>Marketplace</p>
              </div>
              <p className={styles.artists}>Artists</p>
              <p className={styles.community}>Community</p>
              <p className={styles.collections}>Collections</p>

          </div>
          <div className={styles.cta}>
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
          </div>
      </header>
  );
};

export default Header;