import { strip } from '@/app/helpers';
import React, { ChangeEvent } from 'react';
import './Toggle.scss';

interface ToggleProps {
	name: string;
	action: (args?: any) => any;
	type?: 'main' | 'primary' | 'secondary';
	size?: 'small' | 'medium' | 'large';
	checked?: boolean;
}

export const Toggle = ({ name, action, type = 'main', size = 'small', checked = false }: ToggleProps) => {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		action(e.target.checked);
	};

	const className = strip(`toggle ${type} ${size}`);
	return <input type="checkbox" className={className} name={`toggle-${name}`} id={`toggle-${name}`} onChange={(e: any) => onChange(e)} defaultChecked={checked} />;
};
