# template-vite-react-ts-tailwind-v4

- **template of:** rolldown-vite + react + typescript
- **tailwindcss:** v4.x

## Purpose

When writing React components, it's often really nice to spin up a clean project to make sure the compnent can stand on its own outside the development environment you might be working in. This creates an easy to use typescript template that will instantly give you TailwindCSS and the benefits of Rolldown-Vite HMR. Additional libraries to use are mentioned below.

## Usage

### Prerequisites

1. Install [`degit`](https://github.com/Rich-Harris/degit)

```bash
npm install -g degit
```

## Using this template

1. Run the clone command via degit

```bash
degit magicjaqk/ts-react-vite-template [PROJECT_NAME]
```

2. Change to the directory of the project
```bash
cd [PROJECT_NAME]
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## Recommended Libraries

- [Lenis](https://lenis.darkroom.engineering/)
- [Tanstack Router](https://tanstack.com/router/latest)
- [React Query](https://react-query.tanstack.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Motion](https://motion.dev/)
- [React useGesture](https://use-gesture.netlify.app/) (use when Motion's built in gestures aren't enough)

## Metaframeworks
- [NextJS](https://nextjs.org/)
- [Tanstack Start](https://tanstack.com/start/latest)

> [!CAUTION]
> I'm increasingly looking to Tanstack Start over NextJS because NextJS has some Vercel vendor lock in that's tough to deal with. It's not impossible to use on Cloudflare, for example. However, it certainly creates other problems to overcome if you're not within the Vercel ecosystem.

## Other paths to consider for better baseline performance
- [SvelteKit & Svelte](https://www.svelte.dev/)
- [SolidJS](https://www.solidjs.com/) & [SolidStart](https://start.solidjs.com/)

### Svelte

Svelte is great for using with teams that are unfamiliar with the React ecosystem. The *Svelte*-specific ecosystem is smaller; however, the layer between svelte templating and raw javascript is far thinner. That makes it possible to use almost any javascript library with very little effort.

With Svelte, you'll often be paving your own way forward in Svelte-land since the community is smaller, but the paradigm is much more simple for non-React-brained folks to understand easily.

### SolidJS

It's been a few years since I tried out SolidJS. It's very similar to Svelte in that it uses [signals](https://docs.solidjs.com/concepts/signals) for reactivity. While Svelte uses a compiler to create signals and maintain a developer experience of mutable variables, SolidJS aims to recreate the developer experience of React.

SolidJS is an even smaller community than Svelte, but it's more mature, follows patterns of React's JSX, and has a highly dedicated community that makes up for its size.
