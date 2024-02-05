import Image from 'next/image';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact',
  description: 'Contact Page',
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/message.png" alt="message" fill className={styles.image} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="tel" placeholder="Phone Number(Optional)" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
