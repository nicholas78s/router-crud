import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div><p>Page Not Found!</p>
      <Link to="/">На главную</Link>
    </div>
  )
}
