import Image from 'next/image';
import { notFound } from 'next/navigation';

import styles from './page.module.css';
import { getMeal } from '@/lib/meals';
import { AWSS3PublicURL } from '@/lib/constants';

const MealDetailsPage = async ({ params }) => {
	const meal = await getMeal(params.mealSlug);

	if (!meal) {
		notFound();
	}
	meal.instructions = meal?.instructions.replace(/\n/g, '<br/>');

	return (
		<>
			<header className={styles.header}>
				<div className={styles.image}>
					<Image src={`${AWSS3PublicURL}${meal.image}`} alt={meal.title} fill />
				</div>
				<div className={styles.headerText}>
					<h1>{meal.title}</h1>
					<p className={styles.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={styles.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={styles.instructions}
					/*
					I am going use xss module to filter input from 
					users to prevent XSS attacks. But I know it is not 
					recommended to use.
					*/
					dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
			</main>
		</>
	);
};

export default MealDetailsPage;
