import { FC } from 'react'
import { useGlobalComponents } from '@/components'
import NavBar from './components/NavBar'
import MeunDrawer from './components/MenuDrawer'
import ContentView from './components/ContentView'
import './index.scss'

const { Background } = useGlobalComponents()

export default (() => {
  return (
    <>
      <Background />
      <div className="layout">
        <div className="header box-shadow" style={{ padding: 0 }}>
          <NavBar />
        </div>
        <div className="content no-scrollbar" style={{ minHeight: 280 }}>
          <ContentView />
        </div>
        <MeunDrawer />
      </div>
    </>
  )
}) as FC





