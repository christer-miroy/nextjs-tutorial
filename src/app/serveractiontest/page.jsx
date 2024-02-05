import { addPost, deletePost } from '@/lib/actions';

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="desc" placeholder="desc" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="userId" placeholder="userId" />
        <button>create</button>
      </form>
      <form action={deletePost}>
        <input type="text" name="id" placeholder="postId" />
        <button>delete</button>
      </form>
    </div>
  );
};
export default ServerActionTestPage;
