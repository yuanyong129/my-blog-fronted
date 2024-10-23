import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Tag } from 'antd'
// import {
//   EditFilled,
//   BookFilled,
//   RightCircleFilled,
// } from '@ant-design/icons'
import Card from './components/Card'
import dayjs from 'dayjs'
import Avatar from '@/components/Avatar'
import { getPostsApi } from '@/api'
import './index.scss'

export default (() => {
  
  const [posts, setPosts] = useState<any[]>([])

  const navigate = useNavigate()

  const init = async() => {
    try {
      const { data: { list } } = await getPostsApi({ page: 1, size: 4 })
      setPosts(list)
    } catch (error) {
      console.log('初始化首页失败', error)
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div data-component="home" style={{ boxSizing: 'border-box' }}>
      <div className="up">
        <Avatar />
        <div className="my-intro">
          <div className="name">空澄</div>
          <div className="intro">一名普通的前端攻城狮，falcom忠实粉丝一枚，空澄乃是七月的别称~</div>
        </div>
      </div>
      <div className="new-blog">
        <div className="title flex-row">
          <div className="t-text">
            &nbsp;&nbsp;最新博客
          </div>
          {/* <RightCircleFilled onClick={() => this.props.history.push('/blog')} /> */}
        </div>
        <div className="content">
          {
            posts.map(post => (
              <Card
                key={post._id}
                title={post.title}
                tags={post.tags}
                type={post.type? post.type.title: null}
                createdAt={dayjs(post.createdAt).format('YYYY-MM-DD')}
                onClick={() => navigate('/blogdetails', { state: post })}
              />
            ))
          }
        </div>
      </div>
      <div className="new-novel">
        <div className="title flex-row">
          <div>
            &nbsp;&nbsp;最新小说
          </div>
          {/* <RightCircleFilled onClick={() => this.props.history.push('/novel')} /> */}
        </div>
        <div className="content">
          
        </div>
      </div>
    </div>
  )
}) as FC