import { FC } from 'react'
import './index.scss'

interface PropsType {
  title: string
  currentTag?: string
  ownTag?: string
  bgColor?: string
  openSelect?: boolean
  onClick?: () => void
}

export default (({
  title, currentTag, ownTag, bgColor, openSelect, onClick
}) => {
  return (
    <div
      data-component="tag"
      className={ openSelect ?  (currentTag === ownTag) ? 'active' : '' : ''}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {title}
    </div>
  )
}) as FC<PropsType>
