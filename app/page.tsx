'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Icon } from './components';

export default function Home() {
	const testAction = (value: string) => {
		alert(`Test: ${value}`);
	};

	return (
		<main>
			<Link href="/shop">Shop</Link>
			<Link href="/shop/eyeshadow">Eyeshadow</Link>
			<Link href="/shop/palettes">Palettes</Link>
			<Icon name="shopping-bag" size="large" weight="thick" />
			<br />
			<br />
			<Button link href="https://google.es" external>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
			</Button>
			<Button link action={testAction} args="valueeee" style="outline" uppercase>
				Test Action
			</Button>
			<Button action={testAction} args="valueeee" style="white" uppercase>
				Test Action
			</Button>
			<br />
			<Button link href="https://google.es" type="primary" external>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
			</Button>
			<Button link action={testAction} args="valueeee" style="outline" type="primary" uppercase>
				Test Action
			</Button>
			<Button action={testAction} args="valueeee" style="white" type="primary" uppercase>
				Test Action
			</Button>
			<br />
			<Button link href="https://google.es" type="secondary" external>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
			</Button>
			<Button link action={testAction} args="valueeee" style="outline" type="secondary" uppercase>
				Test Action
			</Button>
			<Button action={testAction} args="valueeee" style="white" type="secondary" uppercase>
				Test Action
			</Button>

			<br />
			<Button link href="#" text>
				Text-button
			</Button>
			<Button link href="#" text black>
				Text-button
			</Button>
			<Button link href="#" type="primary" text>
				Text-button
			</Button>
			<Button link href="#" type="primary" text black>
				Text-button
			</Button>
			<Button link href="#" type="secondary" text>
				Text-button
			</Button>
			<Button link href="#" type="secondary" text black>
				Text-button
			</Button>
		</main>
	);
}
