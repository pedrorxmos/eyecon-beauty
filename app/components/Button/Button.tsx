import Link from 'next/link';
import React, { ReactNode } from 'react';
import './Button.scss'

interface Button {
	children?: ReactNode;

	// Actions
	link?: boolean;
	action?: (args?: any) => any;
	args?: any;
	href?: string;
	external?: boolean;

	// Styles
	size?: string;
	type?: string;
	style?: string;
	spaced?: boolean;
	text?: boolean;
}

export const Button = ({ children, link, action, args, href = '#', external, size = 'medium', type = 'main', style = 'fill', spaced, text }: Button) => {
	const onClick = () => {
		action!(args);
	};

	const className = `button ${size} ${type} ${style} ${text ? 'text-button' : ''} ${spaced ? 'spaced' : ''}`.trim().replaceAll(/\s+/g, ' ');
	return link ? (
		<Link href={href} className={className} target={external ? '_blank' : '_self'}>
			{children}
		</Link>
	) : (
		<button className={className} onClick={onClick}>{children}</button>
	);
};
