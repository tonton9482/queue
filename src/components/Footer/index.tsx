// footer.tsx
import React from 'react';
import icons from '../../assets/svg';
import styles from './footer.module.css';

type FooterProps = {
};


export const Footer: React.FC<FooterProps> = ({
}) => {
    return (
        <footer className={styles.logo}>
              <icons.logo className={styles.person__icon__svg} />
        </footer>
    );
};

export default Footer;