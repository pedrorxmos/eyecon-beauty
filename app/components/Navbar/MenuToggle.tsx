"use client"
import React, { MouseEventHandler, useEffect } from 'react'
import { Icon } from '..'

export const MenuToggle = () => {
 

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = document.querySelector('body')
    const navbarMenuMobile = document.querySelector('.navbar-menu-mobile')
    const target = e.target as HTMLButtonElement
    navbarMenuMobile?.classList.toggle('open')
    target.classList.toggle('open')
    body?.classList.toggle('overflow-hidden')
  }
 
  useEffect(() => {
    const body = document.querySelector('body')
    const navbar = document.querySelector('.navbar')
    if(navbar) {
      const assignNavbarHeight = () => {
        body?.style.setProperty('--navbar-height', navbar?.clientHeight + 'px')
      }
      assignNavbarHeight();
    
      window.addEventListener('resize', assignNavbarHeight)

    }
  }, [])

  return (
    <button className="no-style" onClick={onClick}>
      <Icon name="menu" className='no-events'/>
    </button>
  )
}
