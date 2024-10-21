import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '@/components/Avatar'
import Tag from '@/components/Tag'
import PostItem from './PostItem'
import { getPostsApi, getParamsApi } from '@/api'
import { IPost, IParam } from '@/types'
import { PARAM_OPTIONS } from '@/utils'
import './index.scss'

const searchParams = {
  type: '',
  tag: '',
  page: 1,
  size: 10
}

export default (() => {

  const [posts, setPosts] = useState<IPost[]>([])
  const [tags, setTags] = useState<any[]>([])
  const [types, setTypes] = useState<any[]>([])
  const [postTotal, setPostTotal] = useState<number>(0)
  const [postCount, setPostCount] = useState<number>(0)
  const [tagsTotal, setTagsTotal] = useState<number>(0)

  const navigate = useNavigate()

  const init = async() => {
    getPosts()
    getParams()
  }
  // 搜索
  const search: (_ :{ type: string,tag: string }) => void 
    = async ({ type, tag }) => {
    searchParams.type = type ?? searchParams.type
    searchParams.tag = tag ?? searchParams.tag
    searchParams.page = 1
    getPosts()
  } 
  // 获取所有帖子
  const getPosts = async() => {
    try {
      const { data } = await getPostsApi(searchParams)
      setPosts(data.list)
      setPostCount(data.total)
      setPostTotal(data.totalAll)
    } catch (error) {
     console.log('获取所有帖子失败') 
    }
  }
  // 获取所有标签
  const getParams = async() => {
    try {
      const { data: { list, total } } = await getParamsApi({ typeId: PARAM_OPTIONS.TAG_ID, page: 1, size: 10 })
      const { data: { list: types } } = await getParamsApi({ typeId: PARAM_OPTIONS.CATEGORY_ID, page: 1, size: 10 })
      setTags(list)
      setTagsTotal(total)
      setTypes(types)
    } catch (err) {
      console.log('获取所有标签失败')
    }
  } 

  const pagingChange = (page: number) => {
    searchParams.page = page
    getPosts()
  }

  useEffect(() => {
    init()
  }, [])
  
  return (
    <div data-component="post">
      <div className="infos">
        <div className="info fluent-card">
          <div style={{ textAlign: 'center' }}>
            <Avatar />
          </div>
          <div className="info-name">
            空澄
          </div>
          <div className="info-number flex-row">
            <div>
              <div>文章</div>
              <div>{postCount}</div>
            </div>
            <div className="divider"></div>
            <div>
              <div>标签</div>
              <div>{tagsTotal}</div>
            </div>
          </div>
        </div>
        <div className="classify fluent-card">
          <div className="title">&nbsp;&nbsp;&nbsp;&nbsp;分类</div>
          <div style={{ marginTop: '10px' }}>
            <div className={`classify-item ${searchParams.type ? '' : 'active'}`} onClick={() => search({type:'', tag: ''})}>全部</div>
            {types.map(type =>
              <div
                key={type._id}
                className={`classify-item ${searchParams.type === type._id ? 'active' : ''}`}
                onClick={() => search({ type: type._id, tag: '' })}
              >
                {type.title}
              </div>)}
          </div>
        </div>
        <div className="tags fluent-card">
          <div className="title">&nbsp;&nbsp;&nbsp;&nbsp;标签</div>
          <div style={{ marginTop: '10px' }}>
            <Tag title='全部' bgColor="#acb9f2" openSelect={true} currentTag={searchParams.tag} ownTag='' onClick={() => search({type: '', tag: ''})} />
            {
              tags.map(tag =>
                <Tag
                  bgColor="#acb9f2"
                  openSelect={true}
                  currentTag={searchParams.tag}
                  ownTag={tag._id}
                  key={tag._id}
                  title={tag.title}
                  onClick={() => search({ type: '', tag: tag._id })}
                />
              )
            }
          </div>
        </div>
      </div>
      {
        posts.length > 0 ?
        <div className="posts">
          {
            posts.map(post =>
              <PostItem
                type={post.type.title}
                createdAt={post.createdAt}
                key={post._id}
                tags={post.tags}
                title={post.title}
                onClick={() => navigate('/blogdetails', { state: post })}
              />)
          }
          <div style={{textAlign: 'center'}}>
            {/* <Pagination
              defaultCurrent={this.searchParams.page}
              simple
              size="small"
              total={this.state.postTotal}
              onChange={this.pagiChange} /> */}
          </div>
        </div> :
        <div className="no-posts fluent-card">暂无数据···</div>
      }
      
    </div>
  )
}) as FC
