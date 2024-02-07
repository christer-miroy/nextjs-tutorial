'use client';

import { register } from '@/lib/actions';
import styles from './registerForm.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);

  return (
    <>
      <form action={formAction} className={styles.form}>
        {state?.error}
        <input type="text" name="username" id="" placeholder="Username" />
        <input type="email" name="email" email id="" placeholder="Email" />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="password_confirmation"
          id=""
          placeholder="Password Confirmation"
          required
        />
        <button>Register</button>
        <p>
          Already have an account?{' '}
          <Link href="/login">
            <u>Login</u>
          </Link>{' '}
          here
        </p>
      </form>
    </>
  );
};
export default RegisterForm;
