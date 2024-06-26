const isGithubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES;

const nextConfig = {
  output: "export",
  publicRuntimeConfig: {
    basePath: isGithubPages ? '/hasan-emir-caglar' : '',
  },
};

export default nextConfig;
