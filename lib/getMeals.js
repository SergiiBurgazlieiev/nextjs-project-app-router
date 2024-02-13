import sql from 'better-sqlite3';

const db = sql('meals.db');

// Get all meals from sql meals.db
export const getMeals = async () => {
	await new Promise(resolve => setTimeout(() => resolve(), 5000));

	// Simulates error to see how we render error page
	//throw new Error('Something went wrong!');

	return db.prepare('SELECT * FROM meals').all();
};
