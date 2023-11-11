import svgContent from './svg-content';
import './Icon.scss';

interface Icon {
	name: string;
	size?: string;
	weight?: string;
	title?: string;
}

export const Icon = ({ name, size = 'medium', weight = 'regular', title }: Icon) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				className={`icon ${size} ${weight} feather feather-${name}`}
			>
				{title && <title>{title}</title>}
				{svgContent(name)}
			</svg>
		</>
	);
};
