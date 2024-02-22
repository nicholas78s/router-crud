import { Dispatch, SetStateAction, createContext } from "react"
import { IPost } from "../models";

interface IContext {
  posts: IPost[], // | Dispatch<SetStateAction<IPost[]>>,
  //setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
  //setPosts: Dispatch<SetStateAction<IPost[]>>
  //setPosts: () => void
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}

const initialContext: IContext = {
  posts: [],
  setPosts: () => {}
}

const PostsContext = createContext<IContext>(initialContext);

export default PostsContext;