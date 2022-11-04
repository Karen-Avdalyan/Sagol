# Sagol website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install required packages to run the program (make sure you have [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) in your machine:
```bash
yarn
```


Then run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure
All existing pages are located under `pages` directory

In `components` folder you can find `feature` and `shared` sub-folders
Under `feature` directory stored components that are related to pages and used once and under `shared` components that are common and was used in pages or in other components

For components that are created in `shared` folder stories have been created. So in project we have a storybook where you can find all shared components and see their UI.
You need to create a new story for each components that you are going to create in `shared` folder

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
