import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Product',
};

export default function Product({ params }: { params: { slug: string } }) {
	let { slug } = params;
	metadata.title = slug.toString()
	return (
		<main>
			<p>Product {slug} </p>
		</main>
	);
}
