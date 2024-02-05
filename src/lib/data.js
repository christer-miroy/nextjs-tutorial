import { Post, User } from './models';
import { connectToDB } from './utils';
import { unstable_noStore as noStore } from 'next/cache'; //avoid cache

export const getPosts = async () => {
  noStore();
  try {
    connectToDB();
    const posts = await Post.find();
    console.log(posts);
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error('Error fetching posts');
  }
};

export const getPost = async (slug) => {
  noStore();
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch post!');
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching users');
  }
};

export const getUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching user');
  }
};
