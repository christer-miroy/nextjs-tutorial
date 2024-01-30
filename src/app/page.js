import Image from 'next/image';
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Home Sweet Home</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, consequatur enim aperiam minima cum autem provident rem veniam perspiciatis nemo. Enim rem accusantium corrupti laborum minus nam doloribus magnam delectus!
        </p>
        <div className={styles.buttons}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brands" fill className={styles.brandsImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt="hero"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
}
