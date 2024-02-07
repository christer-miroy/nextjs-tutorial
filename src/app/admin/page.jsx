import { Suspense } from 'react';
import styles from './admin.module.css';
import AdminPosts from '@/components/adminPosts/adminPosts';
import AdminPostForm from '@/components/adminPostForm/adminPostForm';
import AdminUsers from '@/components/adminUsers/adminUsers';
import AdminUserForm from '@/components/adminUserForm/adminUserForm';
import { auth } from '@/lib/auth';

const Admin = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>} />
          <AdminPosts />
        </div>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>} />
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>} />
          <AdminUsers />
        </div>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>} />
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};
export default Admin;
