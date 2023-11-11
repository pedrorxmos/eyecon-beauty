import Image from 'next/image';
import Link from 'next/link';
import { Button, Icon } from './components';

export default function Home() {
	return (
		<main>
			<Link href="/shop">Shop</Link>
			<Link href="/shop/eyeshadow">Eyeshadow</Link>
			<Link href="/shop/palettes">Palettes</Link>
			<Icon name="shopping-bag" size="large" weight="thick" />
			<Button link href="https://google.es" external>
				<span>Add to cart</span>
				<Icon name="plus" />
			</Button>
		</main>
	);
}
