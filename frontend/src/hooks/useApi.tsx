import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IPost } from "../models";

// type ReturnType = {
//   posts: any, //IPost[] | IPost, 
//   setPosts: () => {}, //Dispatch<SetStateAction<IPost[]>>, 
//   isLoading: boolean,
//   error: boolean
// };

//export default function useApi(url: string, initialData: IPost[]): [any, Dispatch<SetStateAction<null>>, boolean, boolean] {
export default function useApi(url: string, initialData: IPost[] | IPost): [any, Dispatch<SetStateAction<IPost[] | IPost>>, boolean, boolean] {
  //const [posts, setPosts] = useState<IPost[]>([]);
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      //.then((posts) => setPosts(posts));
      .then((data) => {
        //const newPosts = posts.map(({id, content}: IPost) => {return {id: id, content: content}});
        setData(data);
        console.log('useApi setPosts():', JSON.stringify(data));
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [data, setData, isLoading, error];
}
