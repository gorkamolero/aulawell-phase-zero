# Project Notes

## Package Manager
This project uses **pnpm** as the package manager. Use `pnpm` instead of `npm` for all package operations:
- `pnpm install` - Install dependencies
- `pnpm add <package>` - Add a new package
- `pnpm run <script>` - Run scripts
- `pnpm dev` - Run development server

## Testing Commands
- Run lint: `pnpm run lint`
- Run build: `pnpm run build` (this also does type checking)

## Tech Stack
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components

## IMPORTANT RULES
- NEVER run `pnpm dev` or any development server commands
- Only run build, lint, and test commands when needed
- I am an AI assistant, not a human - I cannot view running applications