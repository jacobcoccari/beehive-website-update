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

### Docker Environment
The application uses a multi-stage Docker build process:

1. **Builder Stage**:
   - Based on node:20-alpine
   - Installs pnpm and dependencies
   - Builds the application 
   - Sets NEXT_PUBLIC_GHOST_URL from build arguments

2. **Runner Stage**:
   - Based on node:20-alpine
   - Runs as non-root user (nextjs:nodejs, uid/gid: 1001)
   - Only copies necessary files from the builder stage
   - Exposes port 3000

### Replit Environment
- Replit runs on Ubuntu 24.04 LTS
- Environment variables are managed through Replit secrets
- The startup script handles the build and run process

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

## Testing and Validation

### Testing Process
1. **Dependency Verification**:
   - Ensure all dependencies are correctly installed: `pnpm list`
   - Check for any dependency conflicts: `pnpm why <package-name>`

2. **Development Testing**:
   - Run the application in development mode: `pnpm dev`
   - Verify hot reloading works correctly
   - Test all routes and features

3. **Production Build Testing**:
   - Build the application: `pnpm build`
   - Start the production server: `pnpm start`
   - Verify all routes and features in production mode
   - Check for console errors and warnings

4. **Environment Variable Testing**:
   - Verify all required environment variables are set
   - Test with different NEXT_PUBLIC_GHOST_URL values if applicable

5. **Docker Image Testing** (if applicable):
   - Build the Docker image: `docker build -t my-nextjs-app --build-arg NEXT_PUBLIC_GHOST_URL=<url> .`
   - Run the container: `docker run -p 3000:3000 my-nextjs-app`
   - Verify the application works correctly in the container

## Pull Request Guidelines
- Title format: `[Feature/Fix/Refactor]: Brief description of changes`
- Include a detailed description of the changes
- List any new dependencies added
- Reference any related issues
- Include screenshots for UI changes

## Docker Build and Deployment

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

## Troubleshooting

### Common Issues and Solutions

1. **Build Failures**:
   - Check that all environment variables are correctly set
   - Verify Node.js version matches the one in Dockerfile (v20)
   - Clear the pnpm store: `pnpm store prune`
   - Delete node_modules and reinstall: `rm -rf node_modules && pnpm install --frozen-lockfile`
   - Check for duplicate dependencies: `pnpm dedupe`

2. **Runtime Errors**:
   - Check the server logs for detailed error messages
   - Verify that the NEXT_PUBLIC_GHOST_URL is correctly set and accessible
   - Ensure the application is listening on the correct port (3000)
   - For permission issues in production, verify user/group ownership (nextjs:nodejs)

3. **Deployment Issues**:
   - When deploying to Replit, ensure the startup script is correctly set
   - For Docker deployments, verify build arguments and environment variables
   - Check network settings, especially HOSTNAME and PORT settings

4. **Performance Issues**:
   - Run Lighthouse or similar tools to identify bottlenecks
   - Check for unoptimized images or excessive JavaScript
   - Verify proper implementation of Next.js features like Image optimization and SSR/SSG

## Performance Considerations
- Optimize images and static assets
- Implement proper code splitting and lazy loading
- Be mindful of client-side versus server-side code
- Use Next.js built-in optimizations where appropriate