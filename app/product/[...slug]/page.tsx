export default function Product({ params }: { params: { slug: string } }) {
	let { slug } = params;
	return (
		<main>
			<p>Product {slug} </p>
		</main>
	);
}
