
import  { FC } from 'react'
import { marked } from 'marked'
import { useLocation } from 'react-router-dom'

export default (() => {

  const location: any = useLocation()

  return (
    <div data-component="post-details" className="fluent-card">
      <div style={{ textAlign: 'center',fontSize: '32px', padding: '15px' }}>
        {location.state.title}
      </div>
      <div style={{ padding: '15px' }} dangerouslySetInnerHTML={{__html: marked(location.state.content) as string }}></div>
    </div>
  )
}) as FC
