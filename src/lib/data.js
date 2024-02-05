/* TEMPORARY DATA */
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

const posts = [
  {
    id: 1,
    title: 'Post 1',
    userId: 1,
    body: 'Exercitationem vel eius repellat hic fugit similique optio explicabo. Eum velit obcaecati a. Unde reprehenderit libero vel quas veniam doloremque, velit blanditiis!',
  },
  {
    id: 2,
    title: 'Post 2',
    userId: 1,
    body: 'Odit veniam soluta numquam facilis illo aut explicabo distinctio ut laboriosam a hic vitae, dicta aliquam error nemo. Exercitationem animi maxime doloremque?',
  },
  {
    id: 2,
    title: 'Post 3',
    userId: 2,
    body: 'Non aliquam animi maxime omnis reprehenderit ipsa consectetur quis at temporibus perferendis, quos, recusandae esse culpa est blanditiis porro hic. Commodi, modi!',
  },
  {
    id: 2,
    title: 'Post 4',
    userId: 2,
    body: 'Reprehenderit alias minima vitae tempore sequi adipisci quos atque laudantium illo, minus quidem fugiat nam iure accusantium exercitationem, autem repudiandae nihil placeat.',
  },
];

export const getPosts = async () => {
    return posts;
}

export const getPost = async (id) => {
    const post = posts.find((post) => post.id === parseInt(id));
    return post;
}

export const getUser = async (id) => {
    return users.find((user) => user.id === parseInt(id));
}
