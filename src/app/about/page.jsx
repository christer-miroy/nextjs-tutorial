import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: 'About',
  description: 'About Page',
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>
          Offering the best properties in the market
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor
          dolorem tenetur ullam ducimus mollitia enim eligendi, inventore velit
          quis repellat laudantium pariatur, nobis ipsam! Tempore qui laboriosam
          natus dolorem?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <p>More than</p>
            <h1>10</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <p>With</p>
            <h1>15</h1>
            <p>Locations and counting</p>
          </div>
          <div className={styles.box}>
            <h1>High-Quality</h1>
            <p>RFO units</p>
          </div>
          <div className={styles.box}>
            <h1>Best deals</h1>
            <p>In pre-selling units</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/house_key.png" alt="key" fill className={styles.img} />
      </div>
    </div>
  );
};
export default About;
