// import React, { FC, useEffect, useState } from 'react';
// import Link from 'next/link';

// import { useDoc } from '@/app/hooks';
// import { Menu } from '../../interfaces';
// import { Icon } from '..';
// import './Header.scss';
// import { NavToggle } from './NavToggle';

// export const Header = async () => {
// 	const headerNav = await useDoc<Menu>('navigation/main-menu');

// 	return (
// 		<header className="header">
// 			<div className="header--inner max-width">
// 				<div className="header--toggle">
// 					<NavToggle />
// 				</div>
// 				<div className="header--logo">
// 					<Link href="/" title="Eyecon Beauty">
// 						EYECON BEAUTY
// 					</Link>
// 				</div>

// 				<nav className="header--nav" role="navigation" data-open>
// 					<ul className="header--nav-list" role="menu" data-level="1">
// 						{headerNav.links?.map((link: Menu) => (
// 							<li className="header--nav-list-item" aria-label={link.title['en']} key={link.url} role="menuitem">
// 								<Link href={link.url} className="header--nav-link">
// 									<span>{link.title['en']}</span>
// 									{
// 										link.links && 
// 										<Icon name="chevron-down"/>
// 									}
// 								</Link>
// 								{link.links && (
// 									<ul className="header--nav-sublist" role="menu" data-level="2">
// 										{link.links.map((sublink: Menu) => (
// 											<li className="header--nav-sublist-item" aria-label={sublink.title['en']} key={sublink.url} role="menuitem">
// 												<Link href={sublink.url} className="header--nav-link header--nav-sublist-item-link">
// 													<span>{sublink.title['en']}</span>
// 													{
// 														sublink.links && 
// 														<Icon name="chevron-down"/>
// 													}
// 												</Link>
// 												{sublink.links && (
// 													<ul className="header--nav-sublist" role="menu" data-level="3">
// 														{sublink.links.map((subsublink: Menu) => (
// 															<li className="header--nav-sublist-item" aria-label={subsublink.title['en']} key={subsublink.url} role="menuitem">
// 																<Link href={subsublink.url} className="header--nav-link">
// 																	<span>{subsublink.title['en']}</span>
// 																</Link>
// 															</li>
// 														))}
// 													</ul>
// 												)}
// 											</li>
// 										))}
// 									</ul>
// 								)}
// 							</li>
// 						))}
// 					</ul>
// 					<ul className='header--nav-mobile-actions' role="menu" >
// 						<li className="header--nav-mobile-actions-item" role="listitem">
// 							<Link href="/account" className="header--nav-mobile-actions-icon">
// 								<Icon name="user" />
// 								<span>Log In</span>
// 							</Link>
// 						</li>
// 						<li className="header--nav-mobile-actions-item" role="listitem">
// 							<button className="header--nav-mobile-actions-icon">
// 								<span>English</span>
// 								<Icon name="chevron-down" />
// 							</button>
// 						</li>
// 						<li className="header--nav-mobile-actions-item" role="listitem">
// 							<button className="header--nav-mobile-actions-icon">
// 								<span>$ USD</span>
// 								<Icon name="chevron-down" />
// 							</button>
// 						</li>
// 					</ul>
// 				</nav>

// 				<div className="header--icons">
// 					<ul className="header--icons-list" role="list">
// 						<li className="header--icons-item" role="listitem">
// 							<Link href="/account" className="header--icons-icon">
// 								<Icon name="user" />
// 								<span>Log In</span>
// 							</Link>
// 						</li>
// 						<li className="header--icons-item" role="listitem">
// 							<button className="header--icons-icon">
// 								<Icon name="search" />
// 							</button>
// 						</li>
// 						<li className="header--icons-item" role="listitem">
// 							<button className="header--icons-icon">
// 								<Icon name="heart" />
// 							</button>
// 						</li>
// 						<li className="header--icons-item" role="listitem">
// 							<button className="header--icons-icon">
// 								<Icon name="shopping-bag" />
// 							</button>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };
