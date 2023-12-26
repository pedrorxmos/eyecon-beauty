// "use client"
import React, { useContext, useEffect, useState } from 'react'
import { Icon } from '..'
import Link from 'next/link'
import { Menu, Links } from '@/app/interfaces'
import { fetchDoc } from '@/app/helpers/firebase'


export const Navbar = async () => {
  const menu: Menu = await fetchDoc<Menu>('navigation/main-menu');

  return (
    <header className="navbar">
      <div className="navbar-toggle">
        <button className="no-style">
          <Icon name="menu"/>
        </button>
      </div>
      <div className="navbar-logo">
        <Link href="/">Eyecon Beauty</Link>
      </div>
      <nav className="navbar-menu">
        <ul className="menu unlist">
          {
            menu?.links.map((link, index) => (
              <li key={index} className='menu-item'>
                <Link href={link.url}>{link.title['en']}</Link>
                {
                  link.links && 
                  <ul className="submenu unlist">
                    {
                      link.links.map((link, index) => (
                        <li key={index} className='submenu-item'>
                          <Link href={link.url}>{link.title['en']}</Link>
                          {
                            link.links && 
                            <ul className="subsubmenu unlist">
                              {
                                link.links.map((link, index) => (
                                  <li key={index} className='subsubmenu-item'>
                                    <Link href={link.url}>{link.title['en']}</Link>
                                  </li>
                                ))
                              }
                            </ul>
                          }
                        </li>
                      ))
                    }
                  </ul>
                }
              </li>
            ))
          }
        </ul>
      </nav>
      <div className="navbar-actions">

      </div>
    </header>
  )
}
