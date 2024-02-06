import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

export const metadata = {
  title: 'Blogs',
  description: 'All Blogs',
};

// fetch data with API
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blog', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  return res.json();
};

const Blog = async () => {
  // fetch data with API
  const posts = await getData();

  // fetch data WITHOUT API
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default Blog;
