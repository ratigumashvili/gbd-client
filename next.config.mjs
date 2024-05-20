import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["biodiversity.iliauni.edu.ge"]
    }
}

// module.exports = nextConfig

export default withNextIntl(nextConfig);
