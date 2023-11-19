import { strip } from '@/app/helpers';
import React, { LegacyRef, useRef } from 'react';
import './Toggle.scss';

interface Toggle {
	name: string;
	action: (args?: any) => any;
	type?: string;
	size?: string;
	checked?: boolean;
}

export const Toggle = ({ name, action, type = 'main', size = 'small', checked = false }: Toggle) => {
	const onChange = (e: any) => {
		action(e.target.checked);
	};

	const className = strip(`toggle ${type} ${size}`);
	return <input type="checkbox" className={className} name={`toggle-${name}`} id={`toggle-${name}`} onChange={(e: any) => onChange(e)} defaultChecked={checked} />;
};
