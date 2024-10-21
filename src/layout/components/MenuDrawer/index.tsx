import { FC, useState, useEffect, CSSProperties } from 'react'
import { NavLink } from 'react-router-dom'
import PubSub from 'pubsub-js'
import { useOptions } from '@/common'
import { PUBSUB } from '@/utils'
import './index.scss'

const { navOptions }  = useOptions()

let pubsubToken: string

export default (() => {

  const [ drawerStyle, setDrawerStyle ] = useState<CSSProperties>({
    right: '-110%'
  })

  const showDrawer = (collapsed: boolean) => {
    if (!collapsed) {
      setDrawerStyle({
        right: '-10%'
      })
    } else {
      setDrawerStyle({
        right: '-110%'
      })
    }
  }
  
  const clickMenu = () => {
    PubSub.publish(PUBSUB.CLOSEDRAWER)
  }

  useEffect(() => {
    pubsubToken = PubSub.subscribe(PUBSUB.OPENDRAWER, (msg, data) => {
      showDrawer(data)
    })
    return () => {
      PubSub.unsubscribe(pubsubToken)
    }
  }, [])

  return (
    <div data-component="menu-drawer" style={drawerStyle}>
      {
        navOptions?.map(item => (
          <NavLink className="my-link" to={item.href} onClick={clickMenu}>
            <div>{item.children}</div>
            <div className="en">{item.en}</div>
          </NavLink>
        ))
      }
    </div>
  )
 
}) as FC

