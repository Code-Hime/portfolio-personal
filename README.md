# Lauren Doss — Personal Portfolio

Personal portfolio site built with [Nuxt 4](https://nuxt.com/).

## Tech Stack

- **[Nuxt 4](https://nuxt.com/)** — Vue meta-framework (SSR, file-based routing, auto-imports)
- **[Vue 3](https://vuejs.org/)** with `<script setup>` + TypeScript
- **[Pinia](https://pinia.vuejs.org/)** — state management
- **[VueUse](https://vueuse.org/)** — composition utilities
- **[@nuxt/image](https://image.nuxt.com/)** — image optimization
- **[@nuxtjs/google-fonts](https://google-fonts.nuxtjs.org/)** — font loading
- **[FontAwesome](https://fontawesome.com/)** — icons
- **[Vitest](https://vitest.dev/)** — testing

## Project Structure

Following Nuxt 4 conventions, source code lives under `app/`:

```
app/
├── app.vue              # Root component
├── error.vue            # Custom error page
├── pages/               # File-based routing
├── components/          # Auto-imported components
├── layouts/             # Page layouts
├── composables/         # Auto-imported composables
├── plugins/             # Nuxt plugins
├── assets/              # Processed assets (CSS, fonts)
└── types/               # TypeScript declarations
public/                  # Static assets served at /
nuxt.config.ts           # Nuxt configuration
```

## Development

Install dependencies:

```bash
npm install
```

Start the dev server at `http://localhost:3000`:

```bash
npm run dev
```

## Build

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Generate a static site:

```bash
npm run generate
```

## Testing

```bash
npm run test
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) with the [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension (formerly Volar).

## Further Reading

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt 4 Migration Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)
