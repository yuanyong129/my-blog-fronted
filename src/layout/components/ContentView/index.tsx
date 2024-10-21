import { Component, Suspense, lazy, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useGlobalComponents } from '@/components'
import Home from '@/pages/Home'
import Post from '@/pages/Post'
import Novel from '@/pages/Novel'
import About from '@/pages/About'
import PostDetails from '@/pages/Post/PostDetails'
// const Post = lazy(() => import('@/pages/Post'))

const { Loading } = useGlobalComponents()

export default class ContentView extends Component {
  render() {
    return (
      
      // <div className="text-primary" style={{ textAlign: 'center' }}>正在加载中...</div>
      <Fragment>
        <Routes>
          
            <Route path="/" element={
            <Suspense fallback={ <Loading /> }>
              { <Home /> }
            </Suspense>}></Route>
            <Route path="blog" element={<Post />}></Route>
            <Route path="blogdetails" element={<PostDetails />}></Route>
            <Route path="novel" element={<Novel />}></Route>
            <Route path="about" element={<About />}></Route>
        </Routes>
      </Fragment>
    )
  }
}
