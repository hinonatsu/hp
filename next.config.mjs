const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true" && repositoryName !== "";
const isUserOrOrgPage = repositoryName.endsWith(".github.io");
const githubPagesBasePath = isGithubPagesBuild && !isUserOrOrgPage ? `/${repositoryName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath ? `${githubPagesBasePath}/` : undefined
};

export default nextConfig;
