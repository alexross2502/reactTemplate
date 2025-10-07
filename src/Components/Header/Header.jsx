import React, { useEffect } from 'react';
import styles from './Header.module.css';

const Header = ({ onOpenModal }) => {

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
          <div className={styles.cta} onClick={onOpenModal}>
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