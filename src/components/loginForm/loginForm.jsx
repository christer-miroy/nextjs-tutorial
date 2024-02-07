'use client';

import { login } from '@/lib/actions';
import styles from './loginForm.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push('/login');
  //   }, [state?.success, router]);

  return (
    <>
      <form action={formAction} className={styles.form}>
        {state?.error}
        <input type="text" name="username" id="" placeholder="Username" />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <button>Login</button>
        <p>
          Don't have an account?{' '}
          <Link href="/register">
            <u>Register</u>
          </Link>{' '}
          here
        </p>
      </form>
    </>
  );
};
export default LoginForm;
