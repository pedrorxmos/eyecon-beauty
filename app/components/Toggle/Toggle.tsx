import { strip } from '@/app/helpers';
import React, { ChangeEvent, ChangeEventHandler, useEffect, useRef } from 'react';
import { InputType } from 'zlib';

interface Toggle {
	name: string;
	action: (args?: any) => any;
	type?: string;
	size?: string;
	checked?: boolean;
}

export const Toggle = ({ name, action, type = 'main', size = 'medium', checked = false }: Toggle) => {
	const onChange = (e: any) => {
		action(e.target.checked);
	};

	const className = strip(`toggle ${type} ${size}`);
	return (
		<label htmlFor={`toggle-${name}`} className={className}>
			<input type="checkbox" name={`toggle-${name}`} id={`toggle-${name}`} onChange={(e: any) => onChange(e)} defaultChecked={checked} />
		</label>
	);
};
