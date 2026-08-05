/** @type {import('next').NextConfig} */

// Static export for GitHub Pages.
//
// If you publish at https://<user>.github.io/<repo>/ (a project page),
// set basePath to "/<repo>" by exporting BASE_PATH before building:
//   BASE_PATH=/landing-page npm run build
//
// If you publish at the root https://<user>.github.io/ (a user/org page,
// repo named <user>.github.io), leave BASE_PATH unset.
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
