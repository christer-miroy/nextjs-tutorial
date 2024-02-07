import { handleGithubLogin, login } from '@/lib/actions';
import styles from './login.module.css';

const Login = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with GitHub</button>
      </form>
      <form action={login}>
        <input type="text" name="username" id="" placeholder="Username" />
        <input type="password" name="password" id="" placeholder="Password" />
        <button>Login with credentials</button>
      </form>
    </div>
  );
};
export default Login;
