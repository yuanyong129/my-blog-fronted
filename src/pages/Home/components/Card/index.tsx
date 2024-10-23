import { FC } from 'react'
import './index.scss'

interface PropsType {
  title: string
  tags: any[]
  type: string
  createdAt: string
  onClick: () => void
}

export default (({
  title, tags, type, createdAt, onClick
}) => {
  return (
    <div className="card-wrap" data-component="card" onClick={onClick}>
      <div className="c-intro">
        <div className="c-title">{title}</div>
        <div className="c-hide">
          {tags ? tags.map(tag => <div key={tag._id} className="c-tag">{tag.title}</div>) : ''}
          <div>
            { type ? <div className="c-type">{type}</div> : '' }
            <div className="create-time">{createdAt }</div>
          </div>
        </div>
      </div>
    </div>
  )
}) as FC<PropsType>
