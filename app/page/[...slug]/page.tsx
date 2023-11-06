export default function Shop({ params }: { params: { slug: string } }) {
	let { slug } = params;
	return (
		<main>
			<p>Static {slug} </p>
		</main>
	);
}
