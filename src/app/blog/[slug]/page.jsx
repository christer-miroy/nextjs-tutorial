import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

// fetch data with API
// const getData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`
//   );

//   if (!res.ok) {
//     throw new Error('Something went wrong!');
//   }

//   return res.json();
// };

const SinglePost = async ({params}) => {
  const {slug} = params;
  // fetch data with API
  // const post = await getData(slug);

  // fetch data WITHOUT API
  const post = await getPost(slug);

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
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/1862402/pexels-photo-1862402.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1"
            alt="house"
            className={styles.avatar}
            width={50}
            height={50}
          />
          {
            post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
                </Suspense>
            )
          }
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
}
export default SinglePost