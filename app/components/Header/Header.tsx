import React from 'react';

import './Header.scss';
import Link from 'next/link';
import { useDoc } from '@/app/hooks';
import db from '@/app/firebase/db';
import { Menu } from '../../interfaces';
import { Icon } from '..';

export const Header = async () => {
	const headerNav = await useDoc('navigation/main-menu');
	return (
		<header className="header">
			<div className="header-container">
				<div className="header--logo">
					<Link href="/" title="Eyecon Beauty">
						EYECON BEAUTY
					</Link>
				</div>

				<nav className="header--nav" role="navigation">
					<ul className="header--nav-list" role="menu">
						{headerNav.links.map((link: Menu) => (
							<li className="header--nav-item" aria-label={link.title['en']} key={link.url} role="menuitem">
								<Link href={link.url} className="header--nav-link">
									{link.title['en']}
								</Link>
								{link.links && (
									<ul className="header--nav-sublist" role="menu">
										{link.links.map((sublink: Menu) => (
											<li className="header--nav-subitem" aria-label={sublink.title['en']} key={sublink.url} role="menuitem">
												<Link href={sublink.url} className="header--nav-sublink">
													{sublink.title['en']}
												</Link>
												{sublink.links && (
													<ul className="header--nav-sublist" role="menu">
														{sublink.links.map((subsublink: Menu) => (
															<li className="header--nav-subitem" aria-label={subsublink.title['en']} key={subsublink.url} role="menuitem">
																<Link href={subsublink.url} className="header--nav-sublink">
																	{subsublink.title['en']}
																</Link>
															</li>
														))}
													</ul>
												)}
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</nav>

				<div className="header--icons">
					<ul className="header--icons-list" role="list">
						<li className="header--icons-item" role="listitem">
							<Link href="/account" className="header--nav-link">
								<Icon name="user" /> 
                <span>Log In</span>
							</Link>
						</li>
            <li className="header--icons-item" role="listitem">
							<button className="header--nav-link">
								<Icon name="search" /> 
							</button>
						</li>
            <li className="header--icons-item" role="listitem">
							<button className="header--nav-link">
								<Icon name="heart" /> 
							</button>
						</li>
            <li className="header--icons-item" role="listitem">
							<button className="header--nav-link">
								<Icon name="shopping-bag" /> 
							</button>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
