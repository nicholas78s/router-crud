import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Posts } from './components/Posts'
import { Menu } from './components/Menu'
import { PostNew } from './components/PostNew'
import { Post } from './components/Post'
import { PageNotFound } from './components/PageNotFound'

function App() {
  //const [posts, setPosts] = useState<IPost[]>([]);
  //const [posts, setPosts] = useApi(import.meta.env.VITE_API_URL+'/posts', []);

  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          {/* <PostsContext.Provider value={{posts, setPosts}}> */}
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/" element={<Posts />} />
              <Route path="/posts/new" element={<PostNew />} />
              <Route path="/posts/:id" element={<Post />} />
              {/* <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
          {/* </PostsContext.Provider> */}
        </div>
      </div>
    </Router>
  )
}

export default App
