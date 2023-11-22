import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Shop',
};

export default function Shop({ params }: { params: { slug: string } }) {
	let { slug } = params;
	if (!slug) slug = 'Shop all';

	metadata.title = slug.toString();
	
	return (
		<main>
			<Link href="/">Goback</Link>
			<p>Current page {slug} </p>
		</main>
	);
}
