import { Suspense } from 'react';
import Link from 'next/link';

import { getMeals } from '@/lib/meals';
import MealsGrid from '@/components/meals/meals-grid';
import styles from './page.module.css';

export const metadata = {
	title: 'All Meals',
	description: 'Browse the delicious meals shared by our vibrant community.'
};

const Meals = () => {
	// Get list of meals
	const meals = getMeals();
	return <MealsGrid meals={meals} />;
};

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
			<main className={styles.main}>
				<Suspense
					fallback={
						<p className={styles.loading}>Fetching list of meals...</p>
					}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
};

export default MealsPage;
