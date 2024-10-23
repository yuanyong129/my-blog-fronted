import { FC } from 'react'
import { getGlobalComponents } from '@/components'
import NavBar from './components/NavBar'
import MeunDrawer from './components/MenuDrawer'
import './index.scss'
import { Outlet, useNavigate } from 'react-router-dom'

export default (() => {
  const { Background } = getGlobalComponents()
  const navigate = useNavigate();
  console.log(navigate.name)
  return (
    <>
      <Background />
      <div className="layout">
        <div className="header box-shadow" style={{ padding: 0 }}>
          <NavBar />
        </div>
        <div className="content no-scrollbar" style={{ minHeight: 280 }}>
          <Outlet />
        </div>
        <MeunDrawer />
      </div>
    </>
  )
}) as FC





