import Link from 'next/link';

export default function Shop({ params }: { params: { slug: string } }) {
	let { slug } = params;
	if (!slug) slug = 'all';
	return (
		<main>
			<Link href="/">Goback</Link>
			<p>Current page {slug} </p>
		</main>
	);
}
