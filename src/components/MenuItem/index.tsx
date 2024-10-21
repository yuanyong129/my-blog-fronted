import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

interface IPropsType {
  to: string
  text: string
}

export default (({
  to, text
}) => {
  return (
    <div data-component="menu-item">
      <NavLink className="menu-body" to={ to }>
        { text }
        <div className="under-line"></div>
      </NavLink>
      <div className="triangle"></div>
    </div>
  )
}) as FC<IPropsType>
