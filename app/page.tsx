'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Icon } from './components';
import { Toggle } from './components/Toggle/Toggle';

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
			<Button link href="https://google.es" external uppercase>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
			</Button>
			<Button link action={testAction} args="valueeee" style="outline" uppercase>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
			</Button>
			<Button action={testAction} args="valueeee" style="white" uppercase>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
			</Button>
			<br />
			<Button link href="https://google.es" type="primary" external uppercase>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
			</Button>
			<Button link action={testAction} args="valueeee" style="outline" type="primary" uppercase>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
			</Button>
			<Button action={testAction} args="valueeee" style="white" type="primary" uppercase>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
			</Button>
			<br />
			<Button link href="https://google.es" type="secondary" external uppercase>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
			</Button>
			<Button link action={testAction} args="valueeee" style="outline" type="secondary" uppercase>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
			</Button>
			<Button action={testAction} args="valueeee" style="white" type="secondary" uppercase>
				<span>Add to cart</span>
				<Icon name="plus" weight="thick" size="medium" />
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

			<br />
			<Button float type="main" style="fill">
				<Icon name="arrow-up" />
			</Button>
			<Button float type="main" style="outline">
				<Icon name="arrow-up" />
			</Button>
			<Button float type="main" style="white">
				<Icon name="arrow-up" />
			</Button>

			<Button float type="primary" style="fill">
				<Icon name="arrow-up" />
			</Button>
			<Button float type="primary" style="outline">
				<Icon name="arrow-up" />
			</Button>
			<Button float type="primary" style="white">
				<Icon name="arrow-up" />
			</Button>

			<Button float type="secondary" style="fill">
				<Icon name="arrow-up" />
			</Button>
			<Button float type="secondary" style="outline">
				<Icon name="arrow-up" />
			</Button>
			<Button float type="secondary" style="white">
				<Icon name="arrow-up" />
			</Button>

			<br />
			<Toggle name="test" action={(value) => console.log('1', value)} size='large' />
			<Toggle name="test" action={(value) => console.log('1', value)} size='medium' type='primary'/>
			<Toggle name="test" action={(value) => console.log('2', value)} checked type='secondary' />
		</main>
	);
}
