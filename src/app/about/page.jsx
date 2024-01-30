import Image from "next/image"
import styles from "./about.module.css"

const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/286744/pexels-photo-286744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Key"
          fill
        />
      </div>
    </div>
  );
}
export default About