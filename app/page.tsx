import Image from 'next/image';
import Link from 'next/link';
import { Icon } from './components';

export default function Home() {
	return (
		<main>
			<Link href="/shop">Shop</Link>
			<Link href="/shop/eyeshadow">Eyeshadow</Link>
			<Link href="/shop/palettes">Palettes</Link>
			<Icon name="shopping-bag" size="large" weight="thick" />
		</main>
	);
}
