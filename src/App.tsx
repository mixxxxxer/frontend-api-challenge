import { useState } from 'react';
import { CreatePost } from './components/createPost';
import { CreateUser } from './components/createUser';
import { Modal } from './components/modal';
import {Post} from './components/post';
import { usePosts } from './hooks/posts';

function App() {
  const [auth, setAuth] = useState(false)


  const {posts, loading, error} = usePosts()
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className='text-center'>Loading...</p>}
      {error && <p className='text-center text-red-700'>{error}</p>}
      {auth && posts.map(item => <Post post = {item} key={item.id}/>)}
      <Modal title = 'Create user'>
        <CreateUser />
      </Modal>

      {auth && <Modal title = "Create new post">
        <CreatePost />
      </Modal>}
      </div>
  )
}

export default App;
