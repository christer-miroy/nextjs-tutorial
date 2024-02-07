'use server';
import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDB } from './utils';
import { signIn, signOut } from './auth';
import bcryptjs from 'bcryptjs';

export const addPost = async (previousState, formData) => {
  //   const title = formData.get('title');
  //   const desc = formData.get('desc');
  //   const slug = formData.get('slug');
  //   const userId = formData.get('userId');

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log('Post saved to database');
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    return {
      error: 'Something went wrong',
    };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.findByIdAndDelete(id).exec();
    console.log('Post deleted from database');
    revalidatePath('/blog');
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    return {
      error: 'Something went wrong',
    };
  }
};

export const addUser = async (previousState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log('User saved to database');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    return {
      error: 'Something went wrong',
    };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id).exec();
    console.log('User deleted from database');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    return {
      error: 'Something went wrong',
    };
  }
};

export const handleGithubLogin = async () => {
  'use server';
  await signIn('github');
};

export const handleLogout = async () => {
  'use server';
  await signOut('github');
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, password_confirmation } =
    Object.fromEntries(formData);

  if (password !== password_confirmation) {
    // return 'Passwords do not match!';
    return {
      error: 'Passwords do not match!',
    };
  }

  try {
    connectToDB();

    const user = await User.findOne({ username });
    if (user) {
      return {
        error: 'User already exists',
      };
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log('Saved to database');

    return { success: true };
  } catch (error) {
    console.log(error);
    return {
      error: 'Something went wrong',
    };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (error) {
    console.log(error);

    if (error.message.includes('CredentialsSignin')) {
      return {
        error: 'Invalid username or password.',
      };
    }
    throw error;
  }
};
