import { FC, CSSProperties, ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useSvg } from '@/assets'
import { useGlobalComponents } from '@/components'
import { useOptions } from '@/common'
import './index.scss'

const { Trigger } = useGlobalComponents()
const { navOptions } = useOptions()

export default (() => {
  return (
    <div data-component="navbar">
      <div className='web-nav'>
        <Logo />
        { navOptions.map(item => <Link key={item.href} to={item.href} children={item.children} />) }
      </div>
      <div className="phone-nav flex-row">
        <Trigger margin="0 10px" />
        <Logo />
      </div>
    </div>
  )
}) as FC


// logo组件
const Logo: FC = () => {
  
  const logo_style: CSSProperties = {
    lineHeight: 'var(--navbar-height)',
    height: 'var(--navbar-height)',
    padding: '0 10px',
    fontSize: '20px',
    fontWeight: 700,
    fontFamily: 'Arial',
    color: 'white',
    boxSizing: 'border-box'
  }
  
  return (
    <RouterLink className='logo' style={logo_style} to="/">
      SORASUMI
    </RouterLink>
  )
}

// Link组件
interface ILinkProps {
  to: string
  children: ReactNode
}

const Link: FC<ILinkProps> =  ({
  to,
  children
}) => {
  const { LinkCircleSvg } = useSvg()
  return (
    <RouterLink style={{ display: 'block', height: '100%' }} to={to}>
      <div className='my-link'>
        <div className='link-after rotate' style={{backgroundImage: `url(${LinkCircleSvg})`}}></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="hoge" width="40" height="25" viewBox="0 0 40 25">
          <path d="M-16181.348-19533.328l19.219-25h20.781" transform="translate(16181.744 19558.828)" fill="none" stroke="var(--main-hover-color)" strokeWidth="1"></path>
        </svg>
        {children}
      </div>
    </RouterLink>
  )
}