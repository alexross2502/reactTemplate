import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
      <header className={styles.header}>
          <div className={styles.background}></div>
          <div className={styles.container}>
              <div className={styles.image}></div>
              <div className={styles.menu}>
                  <div className={styles.buyCrypAppy_container}>
                      <div className={styles.buyCrypAppy_rectangle}>
                          <p className={styles.buyCrypAppy}>BuyCrypAppy</p>
                      </div>
                  </div>
                  <p className={styles.features}>Features</p>
                  <p className={styles.pricing}>Pricing</p>
                  <p className={styles.reviews}>Reviews</p>
                  <p className={styles.contact}>Contact</p>
                  <p className={styles.benefits}>Benefits</p>
              </div>
          </div>
      </header>
  );
};

export default Header;