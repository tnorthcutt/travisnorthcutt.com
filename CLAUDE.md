# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `npm run build` - Builds the Astro site
- Dev: `npm run dev` - Starts local development server
- Preview: `npm run preview` - Previews built site locally

## Code Style Guidelines
- **TypeScript**: Use strict null checks. Type Props interfaces for components.
- **Astro Components**: Follow the pattern of frontmatter script followed by component template.
- **Imports**: Group imports by type (Astro/React components, utilities, types).
- **Styling**: Use both Tailwind CSS and component-scoped styles.
- **Formatting**: Use consistent indentation (2 spaces). Use meaningful variable names.
- **Component Props**: Define Props type at the top of Astro components.
- **Naming**: Use PascalCase for component filenames and camelCase for utilities.
- **Colors**: Use the color palette defined in tailwind.config.mjs.
- **Error Handling**: Use TypeScript's strictNullChecks to prevent null reference errors.
- **CSS Classes**: Use the class:list syntax for conditional classes in Astro components.