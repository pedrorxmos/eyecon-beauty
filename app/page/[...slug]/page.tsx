import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Page',
};

export default function Shop({ params }: { params: { slug: string } }) {
	let { slug } = params;

	metadata.title = slug.toString();

	return (
		<main>
			<p>Static {slug} </p>
		</main>
	);
}
