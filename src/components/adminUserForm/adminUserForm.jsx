'use client';
import { addUser } from '@/lib/actions';
import styles from './adminUserForm.module.css';
import { useFormState } from 'react-dom';

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <>
      <form action={formAction} className={styles.container}>
        <h1>New User</h1>
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <select name="isAdmin">
          <option value="select" disabled>
            Select role
          </option>
          <option value="false">User</option>
          <option value="true">Admin</option>
        </select>
        <button className={styles.addUserBtn}>Add User</button>
        {state && state.error}
      </form>
    </>
  );
};
export default AdminUserForm;
