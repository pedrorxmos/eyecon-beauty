import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Button {
	children?: ReactNode;
	link?: boolean;
	action?: (args?: any) => any;
	args?: any;
	href?: string;
	external?: boolean;
}

export const Button = ({ children, link, action, args, href = '#', external }: Button) => {
	const onClick = () => {
		action!(args);
	};
	return link ? (
		<Link href={href} target={external ? '_blank' : '_self'}>
			{children}
		</Link>
	) : (
		<button onClick={onClick}>{children}</button>
	);
};
