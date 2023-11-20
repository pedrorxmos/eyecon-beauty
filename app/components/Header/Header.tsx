import React from 'react';

import './Header.scss';
import Link from 'next/link';
import { useDoc } from '@/app/hooks';
import db from '@/app/firebase/db';
import { Menu } from '../../interfaces';

export const Header = async () => {
	const headerNav = await useDoc('navigation/main-menu');
	return (
		<header className="header">
			<div className="header-container">
				<div className="header--logo">EYECON BEAUTY</div>

				<nav className="header--nav">
					<ul className="header--nav-list">
            {
              headerNav.links.map((link: Menu) => (
              <li className="header--nav-item" aria-label={link.title['en']} key={link.url} >
                <Link href={link.url} className="header--nav-link">
                  {link.title['en']}
                </Link>
                {
                  link.links && (
                    <ul className="header--nav-sublist">
                      {
                        link.links.map((sublink: Menu) => (
                          <li className="header--nav-subitem" aria-label={sublink.title['en']} key={sublink.url}>
                            <Link href={sublink.url} className="header--nav-sublink">
                              {sublink.title['en']}
                            </Link>
                            { 
                              sublink.links && 
                              (
                                <ul className="header--nav-sublist">
                                  {
                                    sublink.links.map((subsublink: Menu) => (
                                      <li className="header--nav-subitem" aria-label={subsublink.title['en']} key={subsublink.url}>
                                        <Link href={subsublink.url} className="header--nav-sublink">
                                          {subsublink.title['en']} 
                                        </Link>
                                      </li>
                                    ))
                                  }
                                </ul>
                              )
                            }
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </li>
            ))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
