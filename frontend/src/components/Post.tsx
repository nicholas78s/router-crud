import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../fetchData';
import { IPost } from '../models';
import useApi from '../hooks/useApi';
import { PostCard } from './PostCard';

export const Post = () => {
  const {id} = useParams();
  //const {posts} = useContext(PostsContext);
  const [data, setData, isLoading, error] = useApi(import.meta.env.VITE_API_URL+'/posts/'+id, []);
  const [isEdit, setEdit] = useState(false);
  //const [postNew, setPostNew] = useState(post);
  
  //const [post, setPost] = useState<IPost>(initialData);
  const navigate = useNavigate();

  const handlerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target;

    const p: IPost = {
      id: id? parseInt(id) : 0, 
      content: value
    };
    setData(p);
  }

  //useEffect(() => {
    //console.log('useEffect() id=', id);
    //const data = posts.filter((post) => post.id == (id ? parseInt(id) : 0));
    //console.log('post', JSON.stringify(post));
    /*let initialData: IPost;
    if (data.length > 0) {
      initialData = {
        id: data[0].id,
        content: data[0].content
      };
      //console.log('initialData', initialData);
      
      setPost(initialData);
    }*/
    //setPostNew(post);
  //}, [post]); //[id, posts]

  const handlerSaveClick = () => {
    const {id, content} = data;

    const jsonData = {
      id: id,
      content: content
    };
    
    fetchData('PUT', import.meta.env.VITE_API_URL+'/posts/'+id, jsonData, () => {
      navigate("/", {replace: true, state: { from: '/posts/'+id}});
    })
  }

  const handlerDeleteClick = () => {
    fetchData('DELETE', import.meta.env.VITE_API_URL+'/posts/'+id, data, () => {
      navigate("/", {replace: true, state: { from: '/posts/'+id}});
    })
  }

  const {content, created} = data;  

  return (
    <>
      {/* <div>id: {JSON.stringify(post)} params.id: {id}</div> */}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      {!isEdit && !isLoading &&
          <PostCard created={created} close={true}>
            <div className="content">{content}</div>
            <div className="buttons">
              <button type="button" className="post-button edit" onClick={() => setEdit(true)}>Изменить</button>
              <button type="button" className="post-button delete" onClick={handlerDeleteClick}>Удалить</button>
            </div>
          </PostCard>
      }
      {isEdit && !isLoading &&
        <PostCard close={true}>
          <div>
            <textarea value={content} onChange={(e) => handlerChange(e)}/>
          </div>
          <div className="buttons">
            <button type="button" className="post-button save" onClick={handlerSaveClick}>Сохранить</button>
          </div>
        </PostCard>
      }
    </>
  )
}