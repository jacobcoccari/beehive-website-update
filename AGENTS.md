# Agent Guide for Next.js Application

## Project Overview
This is a Next.js application that uses pnpm as the package manager. Our prefered UI component library is Shadcn and use Tailwind CSS for styling.

Make sure to install all corresponding npm node and pnpm dependencies as detailed below.

## Important Directories and Files
- `/app` - Contains the Next.js application routes and components
- `/public` - Static assets that are served directly
- `/.next` - Built application files (don't modify directly)
- `/next.config.mjs` - Next.js configuration
- `/package.json` - Project dependencies and scripts
- `/Dockerfile` - Contains multi-stage build process for production deployment

## Comprehensive Environment Setup

### Development Environment
1. **Node.js Setup**:
   - Use Node.js version 20 (as specified in the Dockerfile)
   - Platform: amd64 architecture (specified in Dockerfile)

2. **Package Manager**:
   - Always use pnpm as the package manager (not npm or yarn)
   - Install pnpm globally if not present: `npm install -g pnpm`
   - Install dependencies with locked versions: `pnpm install --frozen-lockfile`

3. **Environment Variables**:
   - `NEXT_PUBLIC_GHOST_URL`: Required for Ghost CMS integration
   - `NEXT_TELEMETRY_DISABLED=1`: Disables Next.js telemetry
   - `NODE_ENV=production`: For production environments
   - `PORT=3000`: Server port
   - `HOSTNAME=0.0.0.0`: Server hostname

4. **Build Process**:
   - Execute `pnpm build` to create production-ready application
   - The build outputs to the `.next` directory

## Common Commands and Setup Scripts

### Main Commands
- `pnpm install --frozen-lockfile` - Install dependencies with exact versions
- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server after building
- `pnpm lint` - Run linting on the codebase

### Setup Scripts
When working with this project, you may need to run the following setup scripts:

```bash
# Basic environment setup
#!/bin/bash
cd /home/runner/$REPL_SLUG  # For Replit environments
npm install -g pnpm
pnpm install --frozen-lockfile

# Build script
NEXT_TELEMETRY_DISABLED=1 pnpm build

# Start script
NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0 pnpm start
```

These scripts handle:
1. Installation of pnpm globally
2. Installation of project dependencies
3. Building the Next.js application with telemetry disabled
4. Starting the application in production mode

## Code Standards and Practices
- Follow the existing code style and formatting
- Use the existing folder structure for new components and routes
- Keep components modular and reusable
- Write descriptive commit messages

##  Build and Deployment

### Docker Build Process
The project uses a multi-stage Docker build to create optimized production images:

1. **Builder Stage**:
   ```dockerfile
   FROM --platform=amd64 node:20-alpine AS builder
   WORKDIR /app
   ARG NEXT_PUBLIC_GHOST_URL
   ENV NEXT_PUBLIC_GHOST_URL=$NEXT_PUBLIC_GHOST_URL
   RUN npm install -g pnpm
   COPY package.json pnpm-lock.yaml ./
   RUN pnpm install --frozen-lockfile
   COPY . .
   ENV NEXT_TELEMETRY_DISABLED=1
   RUN pnpm build
   ```

2. **Runner Stage**:
   ```dockerfile
   FROM --platform=amd64 node:20-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV=production
   ENV NEXT_TELEMETRY_DISABLED=1
   RUN npm install -g pnpm
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   COPY --from=builder /app/package.json ./package.json
   COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
   COPY --from=builder /app/next.config.mjs ./next.config.mjs
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next ./.next
   COPY --from=builder /app/node_modules ./node_modules
   RUN chown -R nextjs:nodejs /app
   USER nextjs
   EXPOSE 3000
   ENV PORT=3000
   ENV HOSTNAME=0.0.0.0
   CMD ["./node_modules/.bin/next", "start"]
   ```

### Docker Build Commands
- Build: `docker build -t my-nextjs-app --build-arg NEXT_PUBLIC_GHOST_URL=<url> .`
- Run: `docker run -p 3000:3000 my-nextjs-app`

### Important Docker Considerations
- Uses non-root user (nextjs:nodejs)
- Sets specific platform (amd64)
- Copies only necessary files to the runner stage
- Exposes port 3000
- Sets production environment variables

