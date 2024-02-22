import { IPost } from '../models';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { PostCard } from './PostCard';

export const Posts = () => {
  const [data, _setData, isLoading, error] = useApi(import.meta.env.VITE_API_URL+'/posts', []);
 
  return (
    <>
      <div className="post-card new">
        <Link className="post-button" to="/posts/new">Создать пост</Link>
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      {data
        .sort((a: IPost, b: IPost) => (b.created ? b.created : 0) - (a.created ? a.created : 0))
        .map((post: IPost) => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <PostCard created={post.created} close={false} >
              <div className="content">{post.content}</div>
            </PostCard>
          </Link>
        ))
      }
    </>
  )
}
