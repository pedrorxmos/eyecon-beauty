'use client';
import React, { useEffect } from 'react';
import { Links } from '../../interfaces/';
import { Icon } from '..';

interface MobileButtonProps {
	link: Links;
}

export const MobileButton = ({ link }: MobileButtonProps) => {
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		let target = e.target as HTMLButtonElement;
		if (target.nodeName != 'BUTTON') target = target.parentElement as HTMLButtonElement;
		target.parentElement?.classList.toggle('open');
	};

	useEffect(() => {
		const submenus = document.querySelectorAll('.submenu, .subsubmenu');
		submenus.forEach((m) => {
			const menu = m as HTMLElement;
			let scrollHeight = menu.scrollHeight;
			if (menu.querySelector('.subsubmenu')) {
				scrollHeight += menu.querySelector('.subsubmenu')!.scrollHeight;
			}

			menu.style.setProperty('--max-height', scrollHeight + 'px');
			menu.style.setProperty('--mhs', scrollHeight + '');
		});
	}, [link]);
	return (
		<button className="menu-link" onClick={onClick}>
			<span>{link.title['en']}</span>
			<Icon name="chevron-down" size="medium" />
		</button>
	);
};
