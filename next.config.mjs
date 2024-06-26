const isGithubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES;

module.exports = {
  output: "export",
  publicRuntimeConfig: {
    basePath: isGithubPages ? '/hasan-emir-caglar' : '',
  },
};
