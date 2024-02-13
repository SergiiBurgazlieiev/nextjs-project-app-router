import sql from 'better-sqlite3';

const db = sql('meals.db');

// Get all meals from sql meals.db
export const getMeals = () => db.prepare('SELECT * FROM meals').all();
