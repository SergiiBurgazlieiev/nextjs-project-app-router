import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { S3 } from '@aws-sdk/client-s3';

// Init AWS S3
const s3 = new S3({
	region: process.env.REGION,
	credentials: {
		accessKeyId: process.env.ACCESS_KEY,
		secretAccessKey: process.env.SECRET_ACCESS_KEY
	}
});

const db = sql('meals.db');

// Get all meals from sql meals.db
export const getMeals = () => db.prepare('SELECT * FROM meals').all();

export const getMeal = slug =>
	db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);

export const saveMeal = async meal => {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split('.').pop();
	const fileName = `${meal.slug}.${extension}`;

	const bufferedImage = await meal.image.arrayBuffer();

	// Upload imafe to AWS S3
	s3.putObject({
		Bucket: 'sergii-nextjs-foodie-project',
		Key: fileName,
		Body: Buffer.from(bufferedImage),
		ContentType: meal.image.type
	});

	meal.image = fileName;

	db.prepare(
		`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
	).run(meal);
};
