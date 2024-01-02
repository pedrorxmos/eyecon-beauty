
import React, { ReactNode } from 'react';
import Link from 'next/link';

import { strip } from '@/app/helpers';
import './Button.scss';

interface ButtonProps {
	children?: ReactNode;

	// Actions
	link?: boolean;
	action?: (args?: any) => any;
	args?: any;
	href?: string;
	external?: boolean;

	// Styles
	size?: 'small' | 'medium' | 'large';
	type?: 'main' | 'primary' | 'secondary';
	style?: 'fill' | 'outline' | 'white';
	spaced?: boolean;
	text?: boolean;
	uppercase?: boolean;
	black?: boolean;
	float?: boolean;
	className?: string;
}

export const Button = ({ children, link, action, args, href = '#', external, size = 'medium', type = 'main', style = 'fill', spaced, text, uppercase, black, float, className }: ButtonProps) => {
	const onClick = () => {
		action!(args);
	};
	const stylesClass = strip(
		`button ${size} ${type} ${style} ${text ? 'text-button' : ''} ${spaced ? 'spaced' : ''} ${uppercase ? 'uppercase' : ''} ${black ? 'black-text' : ''} ${float ? 'float' : ''} ${className}`
	);
	return link ? (
		<Link href={href} className={stylesClass} target={external ? '_blank' : '_self'}>
			{children}
		</Link>
	) : (
		<button className={stylesClass} onClick={onClick}>
			{children}
		</button>
	);
};
