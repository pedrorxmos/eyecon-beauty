'use client'

import React, { useEffect, useState } from 'react'
import { Icon } from '..'

export const NavToggle = () => {
  const menuToggle = (e: any) => {
    const nav = document.querySelector('.header--nav')
    if(e.target.hasAttribute('open')) {
      e.target.removeAttribute('open');
      nav?.removeAttribute('open');
    }
    else {
      e.target.setAttribute('open', '');
      nav?.setAttribute('open', '');
    }  
	}

  useEffect(() => {
    const header = document.querySelector('.header');
    const setHeaderHeight = () => {
      document.querySelector('html')?.style.setProperty('--header-height', header?.clientHeight + 'px')

    }

    window.addEventListener('resize', setHeaderHeight)
  }, []);

  return (
    <button className="header--toggle-action header--icons-icon" onClick={menuToggle}>
      <Icon name="menu" className='no-events' />
    </button>
  )
}
