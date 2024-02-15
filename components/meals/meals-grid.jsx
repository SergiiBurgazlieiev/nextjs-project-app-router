import styles from './meals-grid.module.css';
import MealItem from './meal-item';

const MealsGrid = ({ meals }) => {
	return (
		<ul className={styles.grid}>
			{meals?.map(meal => (
				<li key={meal._id}>
					<MealItem
						title={meal.title}
						slug={meal.slug}
						image={meal.image}
						summary={meal.summary}
						creator={meal.creator}
					/>
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
