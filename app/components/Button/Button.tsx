import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Button {
	children?: ReactNode;
	link?: boolean;
	action?: any;
	href?: string;
	external?: boolean;
}

export const Button = ({ children, link, action, href = '#', external }: Button) => {
	return link ? (
		<Link href={href} target={external ? '_blank' : '_self'}>
			{children}
		</Link>
	) : (
		<button onClick={() => action()}>{children}</button>
	);
};
