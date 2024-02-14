Foodie App with Next.js

The project was developed using [Next.js](https://nextjs.org/) with the app router pattern, leveraging the file system for setting up routes, including special file names such as page, error, and etc. It also incorporated dynamic routes for loading individual meal pages.

The majority of components were rendered on the server side, except for those utilizing the `'use client'` directive. Server-side rendering (SSR) facilitated data fetching directly within server components. Server actions were employed and assigned directly to form `action` prop.

Notably, [Next.js](https://nextjs.org/) employs aggressive [caching](https://nextjs.org/docs/app/building-your-application/caching), prompting the use of the [revaalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath) function to ensure the latest data is displayed on the meals page in production mode.

Additionally, the project utilized [AWS S3](https://nextjs.org/docs/app/building-your-application/optimizing/images#remote-images) technology for storing images.
