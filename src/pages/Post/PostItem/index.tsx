import { FC } from 'react'
import dayjs from 'dayjs'
import { getGlobalComponents } from '@/components'
import './index.scss'

const { Tag } = getGlobalComponents()
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
    <div data-component="post-item" className='fluent-card' onClick={onClick}>
      <div>{tags.map(tag => <Tag key={tag._id} title={tag.title} bgColor="#FF9613" />)}</div>
      <div className="p-title">
        {title}&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ fontSize: '14px', color: '#8CC456' }}>{type}</span>
      </div>
      <div style={{marginTop: '10px'}}>{ dayjs(createdAt).format('YYYY-MM-DD') } 发布</div>
    </div>
  )
}) as FC<PropsType>
