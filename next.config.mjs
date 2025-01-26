// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'biodiversity.iliauni.edu.ge',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'api.biodiversity.iliauni.edu.ge'
//             },
//             {
//                 protocol: 'http',
//                 hostname: 'test-api.biodiversity.iliauni.edu.ge'
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'test-api.biodiversity.iliauni.edu.ge'
//             }
//         ],
//     }
// };

// export default withNextIntl(nextConfig);

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'biodiversity.iliauni.edu.ge',
      },
      {
        protocol: 'https',
        hostname: 'api.biodiversity.iliauni.edu.ge',
      },
      {
        protocol: 'http',
        hostname: 'test-api.biodiversity.iliauni.edu.ge',
      },
      {
        protocol: 'https',
        hostname: 'test-api.biodiversity.iliauni.edu.ge',
      },
    ],
  },
  webpack: (config) => {
    // Add a rule to handle font files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/, // Match font file extensions
      type: 'asset/resource', // Use Webpack's built-in asset module to serve font files
      generator: {
        filename: 'static/media/[hash][ext]', // Customize the output path and name
      },
    });
    return config;
  },
};

export default withNextIntl(nextConfig);
