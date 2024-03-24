import styles from './footer.module.css';

const Footer = () => { 
    return (
      <div className={styles.container}>
        <div className={styles.logo}>Made by Lars & Johan Cowé</div>
        <div className={styles.text}>
          © 2024 Lotto Volleybal League, Inc. All rights reserved.
        </div>
      </div>
    );
}

export default Footer;
