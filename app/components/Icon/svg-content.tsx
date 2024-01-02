import { ReactElement } from 'react';

interface Content {
	[key: string]: ReactElement;
}

const svgContent = (value: string): ReactElement => {
	const content: Content = {
		'arrow-down': (
			<>
				<line x1="12" y1="5" x2="12" y2="19"></line>
				<polyline points="19 12 12 19 5 12"></polyline>
			</>
		),
		'arrow-left': (
			<>
				<line x1="19" y1="12" x2="5" y2="12"></line>
				<polyline points="12 19 5 12 12 5"></polyline>
			</>
		),
		'arrow-right': (
			<>
				<line x1="5" y1="12" x2="19" y2="12"></line>
				<polyline points="12 5 19 12 12 19"></polyline>
			</>
		),
		'arrow-up': (
			<>
				<line x1="12" y1="19" x2="12" y2="5"></line>
				<polyline points="5 12 12 5 19 12"></polyline>
			</>
		),
		'chevron-down': (
			<>
				<polyline points="6 9 12 15 18 9"></polyline>
			</>
		),
		'chevron-left': (
			<>
				<polyline points="15 18 9 12 15 6"></polyline>
			</>
		),
		'chevron-right': (
			<>
				<polyline points="9 18 15 12 9 6"></polyline>
			</>
		),
		'chevron-up': (
			<>
				<polyline points="18 15 12 9 6 15"></polyline>
			</>
		),
		user: (
			<>
				<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
				<circle cx="12" cy="7" r="4"></circle>
			</>
		),
		search: (
			<>
				<circle cx="11" cy="11" r="8"></circle>
				<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
			</>
		),
		heart: (
			<>
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
			</>
		),
		'shopping-bag': (
			<>
				<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
				<line x1="3" y1="6" x2="21" y2="6"></line>
				<path d="M16 10a4 4 0 0 1-8 0"></path>
			</>
		),
		instagram: (
			<>
				<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
				<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
				<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
			</>
		),
		facebook: (
			<>
				<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
			</>
		),
		twitter: (
			<>
				<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
			</>
		),
		youtube: (
			<>
				<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
				<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
			</>
		),
		linkedin: (
			<>
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
				<rect x="2" y="9" width="4" height="12"></rect>
				<circle cx="4" cy="4" r="2"></circle>
			</>
		),
		menu: (
			<>
				<polyline points="3,6 21,6"></polyline>
				<polyline points="3,12 21,12"></polyline>
				<polyline points="3,18 21,18"></polyline>
			</>
		),
		navmenu: (
			<>
				<polyline points="3,6 21,6">
					<animate id="menu-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.4s" begin="indefinite" fill="freeze" calcMode="linear" values=" 3 6, 21 6; 3 12, 21 12; 6 6, 18 18"></animate>
					<animate id="menu-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.4s" begin="indefinite" fill="freeze" calcMode="linear" values="6 6, 18 18 ; 3 12, 21 12; 3 6, 21 6"></animate>
				</polyline>
				<polyline points="3,12 21,12">
					<animate id="menu-center-open" attributeName="points" keyTimes="0;0.5;1" dur="0.4s" begin="indefinite" fill="freeze" calcMode="linear" values=" 3 12, 21 12; 12 12, 12 12; 12 12, 12 12"></animate>
					<animate id="menu-center-close" attributeName="points" keyTimes="0;0.5;1" dur="0.4s" begin="indefinite" fill="freeze" calcMode="linear" values="12 12, 12 12 ; 12 12, 12 12; 3 12, 21 12"></animate>
				</polyline>
				<polyline points="3,18 21,18">
					<animate id="navmenu-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.4s" begin="indefinite" fill="freeze" calcMode="linear" values=" 3 18, 21 18; 3 12, 21 12; 6 18, 18 6"></animate>
					<animate id="navmenu-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.4s" begin="indefinite" fill="freeze" calcMode="linear" values="6 18, 18 6 ; 3 12, 21 12; 3 18, 21 18"></animate>
				</polyline>
			</>
		),
		plus: (
			<>
				<line x1="12" y1="5" x2="12" y2="19"></line>
				<line x1="5" y1="12" x2="19" y2="12"></line>
			</>
		),
		minus: (
			<>
				<line x1="5" y1="12" x2="19" y2="12"></line>
			</>
		),
		eye: (
			<>
				<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
				<circle cx="12" cy="12" r="3"></circle>
			</>
		),
		check: (
			<>
				<polyline points="20 6 9 17 4 12"></polyline>
			</>
		),
		x: (
			<>
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</>
		),
	};

	return content[value];
};

export default svgContent;
