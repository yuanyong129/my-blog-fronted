import { FC, CSSProperties, ReactNode } from 'react'

const title_style: CSSProperties = {
  color: 'white',
  fontSize: '36px',
  margin: '15px 0',
  textAlign: 'center',
  width: '100%'
}

const content_style: CSSProperties = {
  borderRadius: '5px',
  margin: '0 20px',
  minHeight: '350px',
  background: 'white'
}

interface PropsType {
  title: string
  children: ReactNode
} 

export default (({
  title,
  children
}) => {
  return (
    <div className="common-page" data-component="commonpage">
      <div style={title_style}>{title}</div>
      <div style={content_style}>
        {children}
      </div>
    </div>
  )
}) as FC<PropsType>
