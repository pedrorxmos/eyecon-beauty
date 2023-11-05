import Image from 'next/image';

import { collection, doc, getDoc } from 'firebase/firestore';
import db from './firebase/db';
import { useCollection, useDoc } from './hooks/useFirestore';

export default async function Home() {
	const eyeshadow = await useDoc('products/matte');
	const col = await useCollection('categories/eyeshadows/subcategories');
	console.log(eyeshadow, col);
	// const product = await useDoc(eyeshadow.variants.path);
	// const products = await useDoc(product.products[2].path);
	// console.log('START OF EYESHADOW \n', products);
	return (
		<main>
			<div>
				<p>
					Get started by editing&nbsp;
					<code>app/page.tsx</code>
				</p>
				<div>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By
						<Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
					</a>
				</div>
			</div>

			<div>
				<Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
			</div>

			<div>
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Docs <span>-&gt;</span>
					</h2>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Learn <span>-&gt;</span>
					</h2>
					<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Templates <span>-&gt;</span>
					</h2>
					<p>Explore the Next.js 13 playground.</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Deploy <span>-&gt;</span>
					</h2>
					<p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
				</a>
			</div>
		</main>
	);
}
