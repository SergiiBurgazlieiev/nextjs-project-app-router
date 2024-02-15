## Foodie App with Next.js

Welcome to the Foodie App! This project was developed using Next.js, a powerful React framework, to provide a seamless browsing experience for food enthusiasts. Below you'll find an overview of the project structure, key features, and technologies used.

## Features

- **App Router Pattern**: Leveraging [Next.js](https://nextjs.org/), the project utilizes the file system for setting up routes, including dynamic routes for loading individual meal pages, etc.
- **Server-Side Rendering (SSR)**: The majority of components are rendered on the server side, enhancing performance and facilitating direct data fetching within server components, unless `'use client'` directive is used.

## Technologies Used

- [Next.js](https://nextjs.org/): The core framework for building the application.
- [AWC S3](https://aws.amazon.com/s3/): Integrated for efficient image storage and retrieval.
- [MongoDB Atlas](https://www.mongodb.com/atlas): Integrated to store meals data securely and efficiently.
