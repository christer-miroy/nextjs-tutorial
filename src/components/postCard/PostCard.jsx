import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/1862402/pexels-photo-1862402.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1"
            alt="house"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt quae earum qui, eos voluptatum voluptas architecto laboriosam, obcaecati sunt, ea quaerat doloremque non officia laudantium error at tenetur beatae?</p>
        <Link href="/blog/post" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
}
export default PostCard