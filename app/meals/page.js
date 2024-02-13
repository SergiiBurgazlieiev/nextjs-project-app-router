import Link from 'next/link';

import styles from './page.module.css';

const MealsPage = () => {
	return (
		<>
			<header className={styles.header}>
				<h1>
					Delicious meals, created
					<span className={styles.highlight}>by you</span>
				</h1>
				<p>Choose your own recipe and cook it yourself.</p>
				<p className={styles.cta}>
					<Link href='/meals/share'>Share Your Favorite Recipe</Link>
				</p>
			</header>
			<main className={styles.main}></main>
		</>
	);
};

export default MealsPage;
