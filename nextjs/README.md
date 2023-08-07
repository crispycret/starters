# Starter Next.js Application

This starter next.js application is a remedy towards painful setting up a new next.js application. Here we handle the pain of setting up a standarized project strucutre and handle the configurations of important tools for any next.js project such as storybook.

Installing storybook into a new next.js project creates all sorts of problems now that next.js uses the rust based compilier SWC instead of babel, which is used by storybook and many other tools. To remedy this we needed to include changes to the `next.config.js` file as well as some other changes (don't know if they were necessary) that has proved to be a working fix so far.

Other features include global interegration to the React library, and my custom npm toolset that include common hooks and utilities not covered by the default `react` and `next` libraries. Examples of these hooks include mobile detection, countdown timers, scrolling detection and triggers, etc, that can be found in the `@crispy/tools` library (named eternite for now).


# Default Next.js README.md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
