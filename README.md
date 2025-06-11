# React Starter

Quickly get started with a minimal React starter template!

*This template is strongly opinionated*

## Features

- Bare React application based on Vite
- Release management
- Updates using [Dependabot](https://github.com/dependabot)
- CI workflows using [Github Actions](https://github.com/features/actions)
    - Lint Pull Request titles following the [Conventional Commits specification](https://www.conventionalcommits.org/)
    - Run QA for Pull Requests ( analyze, Tests, build )
    - Release on push on `main` branch ( Tagging, Publish builds )

## Getting started

[Create a new repository from this template on GitHub](https://github.com/matthiashermsen/react-starter/generate).

### Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the `name` and `version` in [package.json](./package.json).
- [ ] Delete the [package-lock.json](./package-lock.json) and generate a new one via `npm install`.
- [ ] Change the `<title>` in [index.html](./index.html).
- [ ] Change the `assignees` in [dependabot.yml](./.github/dependabot.yml).
- [ ] Change the author name in [LICENSE](./LICENSE).
- [ ] Clean up the [README](./README.md).