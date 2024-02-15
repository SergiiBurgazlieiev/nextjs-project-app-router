import slugify from 'slugify';
import xss from 'xss';
import { S3 } from '@aws-sdk/client-s3';
import { MongoClient, ServerApiVersion } from 'mongodb';

// Create an instance of the S3 client
const s3 = new S3({
	region: process.env.REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
	}
});

// Access MongoDB Atlas
const client = new MongoClient(process.env.MONGO_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
});

// Get all meals from mongoDB meals collection
export const getMeals = async () => {
	const db = client.db();
	const meals = await db.collection('meals').find().toArray();
	return meals;
};

// Get one meal from mongoDB meals collection
export const getMeal = async slug => {
	const db = client.db();
	const oneMealDetails = await db.collection('meals').findOne({ slug });
	return oneMealDetails;
};

export const saveMeal = async meal => {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split('.').pop();
	const fileName = `${meal.slug}.${extension}`;

	const bufferedImage = await meal.image.arrayBuffer();

	// Upload image to AWS S3
	const params = {
		Bucket: 'sergii-nextjs-foodie-project',
		Key: fileName,
		Body: Buffer.from(bufferedImage),
		ContentType: meal.image.type
	};
	s3.putObject(params);

	meal.image = fileName;

	// Save meal to mongoDB
	const db = client.db();
	await db.collection('meals').insertOne(meal);
	client.close();
};
