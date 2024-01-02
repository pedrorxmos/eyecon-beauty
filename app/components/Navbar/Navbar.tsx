import { fetchDoc } from '@/app/helpers/firebase';
import { Menu } from '@/app/interfaces';
import Link from 'next/link';
import React from 'react';
import { Icon } from '..';

import './Navbar.scss';
import { MenuToggle } from './MenuToggle';
import { MobileButton } from './mobileButton';

export const Navbar = async () => {
	const menu: Menu = await fetchDoc<Menu>('navigation/main-menu');
	const favorites = [
		{
			product: 'x'
		}
	]
	const cart = [
		{
			product: 'x'
		},
		{
			product: 'y'
		},
		{
			product: 'z'
		}
	]

	return (
		<>
			<header className="navbar">
				<div className="navbar-inner max-width">
					<div className="navbar-toggle hide-large hide-huge">
						<MenuToggle />
					</div>
					<div className="navbar-logo">
						<Link href="/" className="navbar-main-item">
							Eyecon Beauty
						</Link>
					</div>
					<nav className="navbar-menu hide-small hide-medium">
						<ul className="menu unlist">
							{menu?.links.map((link, index) => (
								<li key={index} className="menu-item navbar-main-item">
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
							<li className="list-item action-search">
								<button className="no-style navbar-main-item">
									<Icon name="search" size="medium" weight="regular" />
								</button>
							</li>
							<li className="list-item action-account hide-small hide-medium">
								<button className="no-style navbar-main-item">
									<Icon name="user" size="medium" weight="regular" />
									<span>Log In</span>
								</button>
							</li>
							<li className="list-item action-favorites">
								<button className={`no-style navbar-main-item ${favorites.length > 0 ? 'count' : ''}`} >
									<Icon name="heart" size="medium" weight="regular" />
								</button>
							</li>
							<li className="list-item action-cart">
								<button className={`no-style navbar-main-item ${favorites.length > 0 ? 'count' : ''}`}>
									<Icon name="shopping-bag" size="medium" weight="regular" />
								</button>
							</li>
						</ul>
					</div>

					<nav className="navbar-menu-mobile hide-large hide-huge">
						<ul className="menu unlist max-width">
							{menu?.links.map((link, index) => (
								<li key={index} className="menu-item" data-level="1">
									{link.links == null && (
										<Link href={link.url} className="menu-link">
											{link.title['en']}
										</Link>
									)}
									{link.links && (
										<>
											<MobileButton link={link} />
											<ul className="submenu unlist">
												{link.links.map((link_2, index_2) => (
													<li key={index_2} className="submenu-item" data-level="2">
														{link_2.links == null && (
															<Link href={link_2.url} className="menu-link">
																<span>{link_2.title['en']}</span>
															</Link>
														)}
														{link_2.links && (
															<>
																<MobileButton link={link_2} />
																<ul className="subsubmenu unlist">
																	{link_2.links.map((link_3, index_3) => (
																		<li key={index_3} className="subsubmenu-item" data-level="3">
																			<Link href={link_3.url} className="menu-link">
																				{link_3.title['en']}
																			</Link>
																		</li>
																	))}
																</ul>
															</>
														)}
													</li>
												))}
											</ul>
										</>
									)}
								</li>
							))}
						</ul>
						<ul className="actions unlist max-width">
							<li className="actions-item action-account">
								<Link href="/account" className="no-style">
									<Icon name="user" size="medium" weight="regular" />
									<span>Log In</span>
								</Link>
							</li>
							<li className="actions-item action-locale">
								<button className="no-style">
									<span>Spain</span>
									<span>|</span>
									<span>EUR</span>
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};
