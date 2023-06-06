// Write your JS code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(eachObj => ({
      id: eachObj.id,
      title: eachObj.title,
      imgUrl: eachObj.image_url,
      avatarUrl: eachObj.avatar_url,
      author: eachObj.author,
      content: eachObj.content,
      topic: eachObj.topic,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="blogs-list">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogsData.map(eachObj => (
              <BlogItem key={eachObj.id} blogData={eachObj} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
