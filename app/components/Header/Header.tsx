import React from 'react'

import './Header.scss'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header--logo">
          EYECON BEAUTY
        </div>

        <nav className="header--nav">
          <ul className="header--nav-list">
            <li className="header--nav-item">
              <Link href="#" className="header--nav-link">Shop</Link>
              <ul className='header--nav-sublist'>
                <li className="header--nav-subitem">
                  <Link href="#" className="header--nav-sublink">Eyeshadows</Link>
                  <ul className="header--nav-sublist">
                  <li className="header--nav-subitem">
                    <Link href="#" className="header--nav-sublink">Matte Eyeshadows</Link>
                  </li>
                  <li className="header--nav-subitem">
                    <Link href="#" className="header--nav-sublink">Shimmer Eyeshadows</Link>
                  </li>
                  </ul>
                </li>
                <li className="header--nav-subitem">
                  <Link href="#" className="header--nav-sublink">Palettes</Link>
                </li>
                <li className="header--nav-subitem">
                  <Link href="#" className="header--nav-sublink">All Products</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
