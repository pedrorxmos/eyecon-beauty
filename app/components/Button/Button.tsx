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
}

export const Button = ({ children, link, action, args, href = '#', external, size = 'medium', type = 'main', style = 'fill', spaced, text, uppercase, black, float }: ButtonProps) => {
	const onClick = () => {
		action!(args);
	};
	const className = strip(
		`button ${size} ${type} ${style} ${text ? 'text-button' : ''} ${spaced ? 'spaced' : ''} ${uppercase ? 'uppercase' : ''} ${black ? 'black-text' : ''} ${float ? 'float' : ''}`
	);
	return link ? (
		<Link href={href} className={className} target={external ? '_blank' : '_self'}>
			{children}
		</Link>
	) : (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};
