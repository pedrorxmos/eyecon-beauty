'use client'

import React, { useEffect, useState } from 'react'
import { Icon } from '..'

export const NavToggle = () => {
  const menuToggle = (e: any) => {
    const nav = document.querySelector('.header--nav')
    const main = document.querySelector('body')
    if(e.target.hasAttribute('data-open')) {
      e.target.removeAttribute('data-open');
      nav?.removeAttribute('data-open');
      main?.classList.remove('overflow-hidden');
    }
    else {
      e.target.setAttribute('data-open', '');
      nav?.setAttribute('data-open', '');
      main?.classList.add('overflow-hidden');
    }  
	}

  useEffect(() => {
    const header = document.querySelector('.header');
    const setHeaderHeight = () => {
      document.querySelector('body')?.style.setProperty('--header-height', header?.clientHeight + 'px')

    }
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight)
  }, []);

  return (
    <button className="header--toggle-action header--icons-icon" onClick={menuToggle} data-open>
      <Icon name="menu" className='no-events' />
    </button>
  )
}
