import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        - Phone: +358 417054500 <br />
        - Location: Tampere, Finland <br />
        - Email: samuc2918@gmail.com / sam.chan@tuni.fi <br />
      </p>
    </section>
  );
}

export default Footer;
