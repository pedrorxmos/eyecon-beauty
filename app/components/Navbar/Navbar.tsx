import { fetchDoc } from '@/app/helpers/firebase';
import { Menu } from '@/app/interfaces';
import Link from 'next/link';
import React from 'react';
import { Icon } from '..';

import './Navbar.scss';
import { MenuToggle } from './MenuToggle';

export const Navbar = async () => {
	const menu: Menu = await fetchDoc<Menu>('navigation/main-menu');

	return (
		<>
			<header className="navbar open">
				<div className="navbar-inner max-width">
					<div className="navbar-toggle">
						<MenuToggle />
					</div>
					<div className="navbar-logo">
						<Link href="/">Eyecon Beauty</Link>
					</div>
					<nav className="navbar-menu">
						<ul className="menu unlist">
							{menu?.links.map((link, index) => (
								<li key={index} className="menu-item">
									<Link href={link.url}>{link.title['en']}</Link>
									{link.links && (
										<ul className="submenu unlist">
											{link.links.map((link_2, index_2) => {
												if (link.url !== link_2.url)
													return (
														<li key={index_2} className="submenu-item">
															<Link href={link_2.url}>{link_2.title['en']}</Link>
															{link_2.links && (
																<ul className="subsubmenu unlist">
																	{link_2.links.map((link_3, index_3) => {
																		if (link_2.url !== link_3.url)
																			return (
																				<li key={index_3} className="subsubmenu-item">
																					<Link href={link_3.url}>{link_3.title['en']}</Link>
																				</li>
																			);
																	})}
																</ul>
															)}
														</li>
													);
											})}
										</ul>
									)}
								</li>
							))}
						</ul>
					</nav>
					<div className="navbar-actions">
						<ul className="list unlist">
							<li className="list-item">
								<button className="no-style action-search">
									<Icon name="search" />
								</button>
							</li>
							<li className="list-item">
								<button className="no-style action-account">
									<Icon name="user" />
									<span>Log In</span>
								</button>
							</li>
							<li className="list-item">
								<button className="no-style action-favorites">
									<Icon name="heart" />
								</button>
							</li>
							<li className="list-item">
								<button className="no-style action-cart">
									<Icon name="shopping-bag" />
								</button>
							</li>
						</ul>
					</div>

					<nav className="navbar-menu-mobile">
						<ul className="menu unlist max-width">
							{menu?.links.map((link, index) => (
								<li key={index} className="menu-item">
									<Link href={link.url}>{link.title['en']}</Link>
									{link.links && (
										<ul className="submenu unlist">
											{link.links.map((link_2, index_2) => (
												<li key={index_2} className="submenu-item">
													<Link href={link_2.url}>{link_2.title['en']}</Link>
													{link_2.links && (
														<ul className="subsubmenu unlist">
															{link_2.links.map((link_3, index_3) => (
																<li key={index_3} className="subsubmenu-item">
																	<Link href={link_3.url}>{link_3.title['en']}</Link>
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
				</div>
			</header>
		</>
	);
};
