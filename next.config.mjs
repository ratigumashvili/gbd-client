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
//     },
// }

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
                hostname: 'api.biodiversity.iliauni.edu.ge'
            },
            {
                protocol: 'http',
                hostname: 'test-api.biodiversity.iliauni.edu.ge'
            },
            {
                protocol: 'https',
                hostname: 'test-api.biodiversity.iliauni.edu.ge'
            }
        ],
    }
};

export default withNextIntl(nextConfig);
