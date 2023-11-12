import Link from 'next/link';
import React, { ReactNode } from 'react';
import './Button.scss'
import { strip } from '@/app/helpers';

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
	uppercase?: boolean;
	black?: boolean;
	float?: boolean;
}

export const Button = ({ children, link, action, args, href = '#', external, size = 'medium', type = 'main', style = 'fill', spaced, text, uppercase, black, float }: Button) => {
	const onClick = () => {
		action!(args);
	};
	const className = strip(`button ${size} ${type} ${style} ${text ? 'text-button' : ''} ${spaced ? 'spaced' : ''} ${uppercase ? 'uppercase' : ''} ${black ? 'black-text' : ''} ${float ? 'float' : ''}`)
	return link ? (
		<Link href={href} className={className} target={external ? '_blank' : '_self'}>
			{children}
		</Link>
	) : (
		<button className={className} onClick={onClick}>{children}</button>
	);
};
