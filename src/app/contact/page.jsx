import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="Contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Naam" />
          <input type="text" placeholder="E-mailadres" />
          <input type="text" placeholder="Telefoonnummer (optioneel)" />
          <textarea 
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Bericht"
          ></textarea>
          <button>Verzend</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
