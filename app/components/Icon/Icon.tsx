import svgContent from './svg-content';
import './Icon.scss';

interface Icon {
	name: string;
	size?: string;
	weight?: string;
	title?: string;
	className?: string;
}

export const Icon = ({ name, size = 'medium', weight = 'regular', title, className }: Icon) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className={`icon ${size} ${weight} feather feather-${name} ${className}`}
			>
				{title && <title>{title}</title>}
				{svgContent(name)}
			</svg>
		</>
	);
};
