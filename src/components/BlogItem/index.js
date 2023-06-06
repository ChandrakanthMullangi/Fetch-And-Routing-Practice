// Write your JS code here

import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {id, topic, title, imageUrl, avatarUrl, author} = blogData

  return (
    <li>
      <Link to={`/blogs/${id}`} className="blog-item">
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} className="image" />
          <div className="blog-item-info">
            <p className="topic"> {topic} </p>
            <h1 className="title"> {title} </h1>
            <div className="author">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
              <p className="author-name"> {author} </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
