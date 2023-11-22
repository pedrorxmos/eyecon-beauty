import { Header } from './components';
import './scss/global.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		default: 'Eyecon Beauty',
		template: '%s | Eyecon Beauty',
	},
	description: 'Eyecon Beauty is a makeup ecommerce specialized in reusable and customizable eyeshadow palettes.',
	themeColor: '#ffffff',
	manifest: '/manifest.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
