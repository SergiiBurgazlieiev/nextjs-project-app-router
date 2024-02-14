/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'sergii-nextjs-foodie-project.s3.us-east-2.amazonaws.com',
				port: '',
				pathname: '/**'
			}
		]
	}
};

module.exports = nextConfig;
