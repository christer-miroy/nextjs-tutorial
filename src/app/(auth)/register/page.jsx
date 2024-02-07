import { register } from '@/lib/actions';
import styles from './register.module.css';

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
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
        </form>
      </div>
    </div>
  );
};
export default Register;
