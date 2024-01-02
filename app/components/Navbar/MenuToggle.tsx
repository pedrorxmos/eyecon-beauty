'use client';
import React, { MouseEventHandler, useEffect } from 'react';
import { Icon } from '..';
import { usePathname } from 'next/navigation';

export const MenuToggle = () => {
	const pathname = usePathname();
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const body = document.querySelector('body');
		const navbarMenuMobile = document.querySelector('.navbar-menu-mobile');
		const target = e.target as HTMLButtonElement;
		const animations = target.querySelectorAll('polyline animate') as NodeListOf<SVGAnimateElement>;
		navbarMenuMobile?.classList.toggle('open');
		target.classList.toggle('open');

		animations.forEach((animation: SVGAnimateElement) => {
			if (target.classList.contains('open')) {
				if (animation.id.includes('open')) {
					animation.beginElement();
				}
			} else {
				if (animation.id.includes('close')) {
					animation.beginElement();
				}
			}
		});

		body?.classList.toggle('overflow-hidden');
	};

	useEffect(() => {
		const body = document.querySelector('body');
		const navbar = document.querySelector('.navbar');
		if (navbar) {
			const assignNavbarHeight = () => {
				body?.style.setProperty('--navbar-height', navbar?.clientHeight + 'px');
			};
			assignNavbarHeight();

			window.addEventListener('resize', assignNavbarHeight);
		}
	}, []);

	useEffect(() => {
		const navbarMenuMobile = document.querySelector('.navbar-menu-mobile');
		const toggle = document.querySelector('.navbar-toggle button');
		const animations = toggle?.querySelectorAll('polyline animate') as NodeListOf<SVGAnimateElement>;
		const body = document.querySelector('body');
		if(navbarMenuMobile?.classList.contains('open')) {
			navbarMenuMobile?.classList.remove('open');
			toggle?.classList.remove('open');
			body?.classList.remove('overflow-hidden');
			animations.forEach((animation: SVGAnimateElement) => {
				if (animation.id.includes('close')) {
					animation.beginElement();
				}
			});
		}
		
	}, [pathname]);

	return (
		<button className="no-style navbar-main-item" onClick={onClick}>
			<Icon name="navmenu" className="no-events" size="medium" weight="regular" />
		</button>
	);
};
