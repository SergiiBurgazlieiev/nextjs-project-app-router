'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

// Simple helper function to perform basic input validation
const isInvalidFormInput = input => !input || input.trim() === '';

export const shareMealAction = async (prevState, formData) => {
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email')
	};

	/*
	 	We need to validate form values before saving them to the database. 
		While I'll implement basic validation here, for a production-ready 
		application, we should incorporate more advanced form validation.
	*/
	if (
		isInvalidFormInput(meal.title) ||
		isInvalidFormInput(meal.summary) ||
		isInvalidFormInput(meal.creator) ||
		isInvalidFormInput(meal.creator_email) ||
		isInvalidFormInput(meal.instructions) ||
		!meal.creator_email.includes('@') ||
		!meal.image ||
		meal.image.size === 0
	) {
		return {
			message: 'Invalid input.'
		};
	}

	await saveMeal(meal);
	revalidatePath('/meals');
	redirect('/meals');
};
