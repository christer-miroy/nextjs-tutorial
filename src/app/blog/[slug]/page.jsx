import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1862402/pexels-photo-1862402.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1"
          alt="house"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/1862402/pexels-photo-1862402.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1"
            alt="house"
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Doe</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta vero facilis facere possimus at eaque illo quod tempore consequatur minus reprehenderit ab, impedit molestiae obcaecati rerum enim! Nulla, aperiam eos.
        </div>
      </div>
    </div>
  );
}
export default SinglePost