import { createContext } from "react"
import { IPost } from "../models";

interface IContext {
  posts: IPost[], 
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}

const initialContext: IContext = {
  posts: [],
  setPosts: () => {}
}

const PostsContext = createContext<IContext>(initialContext);

export default PostsContext;