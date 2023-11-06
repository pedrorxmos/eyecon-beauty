import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<Link href="/shop">Shop</Link>
			<Link href="/shop/eyeshadow">Eyeshadow</Link>
			<Link href="/shop/palettes">Palettes</Link>
		</main>
	);
}
