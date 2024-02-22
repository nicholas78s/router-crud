import { useState } from 'react'
import { fetchData } from '../fetchData';
import { useNavigate } from 'react-router-dom';
import { PostCard } from './PostCard';

export const PostNew = () => {
  const [post, setPost] = useState('');
  const navigate = useNavigate();

  const handlerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target;
    setPost(value);
  }

  const handlerClick = () => {
    const jsonData = {
      id: 0,
      content: post
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    };
    
    fetchData('POST', import.meta.env.VITE_API_URL+'/posts', jsonData, () => {
      navigate("/", {replace: true, state: { from: '/posts/new'}});
    })
  }

  return (
    <PostCard close={true}>
      <div>
        <textarea value={post} onChange={(e) => handlerChange(e)}/>
      </div>
      <div className="buttons">
        <button type="button" className="posts-button" onClick={handlerClick}>Опубликовать</button>
      </div>
    </PostCard>
  )
}
