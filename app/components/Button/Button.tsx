import React, { ReactNode } from 'react';

interface Button {
	children?: ReactNode;
	link?: boolean;
	action?: any;
	href?: string;
}

export const Button = ({ children, link, action, href }: Button) => {
	return link ? <a href={href}>{children}</a> : <button onClick={() => action()}>{children}</button>;
};
