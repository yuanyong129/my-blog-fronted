import { avatarDefaultImage } from '@/assets'
import { CSSProperties, FC } from 'react'

interface IProps {
  avatar?: string
}

const avatar_wrap_style: CSSProperties = {
  width: '100px',
  height: '100px',
  backgroundColor: 'white',
  borderRadius: '50%',
  verticalAlign: 'bottom',
  overflow: 'hidden',
  display: 'inline-block'
}

const avatar_style: CSSProperties = {
  width: '100%',
  height: '100%',
}

export default (({
  avatar
}) => {
  return (
    <div style={avatar_wrap_style}>
      <img style={avatar_style} src={avatar || avatarDefaultImage} alt="头像-拉碧丝·罗赞贝尔克" />
    </div>
  )
}) as FC<IProps>
