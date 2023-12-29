# EP02 -Igniting our App (Theory)


## `NPM` (Node Package Manager)
- npm is a package manager for Node.js and JavaScript, facilitating package installation, version management, and project deployment.

## `Parcel` / `Webpack`
- **Purpose:** Bundlers that optimize code by managing and bundling project assets, improving performance and deployment.

## `.parcel-cache`
- **Purpose:** Folder used by Parcel to store cached data, speeding up subsequent builds.

## `npx`
- **Usage:** npm package runner to execute Node.js-based executables without global installation.

## `dependencies` vs `devDependencies`
- **`dependencies`:** Required for production runtime.
- **`devDependencies`:** Used in development, like testing libraries or build tools.

## `Tree Shaking`
- **Definition:** Bundler technique to remove dead code, reducing bundle size and enhancing performance.

## `Hot Module Replacement` (HMR)
- **Purpose:** Allows module replacement without full page reloads during development, speeding up the process.

## `Parcel's Superpowers` (Favorites)
1. **Zero Configuration:** No setup needed, start instantly.
2. **Blazing Fast:** Swift build times, even for large projects.
3. **Automagic Transformations:** Handles diverse file types effortlessly.
4. **Effortless Code Splitting:** Optimizes loading with automatic code chunks.
5. **Hot Module Replacement (HMR):** Instantly updates modules without page refresh.

## `.gitignore`
- **Purpose:** Specifies files/folders Git should ignore in version control.

## `package.json` vs `package-lock.json`
- **`package.json`:** Project metadata and dependencies.
- **`package-lock.json`:** Locks dependency versions for consistent builds.

## Modifying `package-lock.json`
- **Avoid Modification:** Manual changes can lead to version conflicts or inconsistencies.

## `node_modules`
- **Definition:** Folder containing project dependencies.
- **Git Consideration:** Not recommended for Git due to size; include `package.json` and `package-lock.json`.

## `dist` folder
- **Purpose:** Holds optimized code/assets for deployment.

## `browserslist`
- **Definition:** Configures supported browsers for CSS/JS feature compatibility.

## `Caret (^)`
- **Updates Major Version:** Allows upgrading to the latest version within the same major range (`^1.2.3` → `1.x.x`).

## `Tilde (~)`
- **Updates Minor Version:** Permits the latest version within the same minor range (`~1.2.3` → `1.2.x`).

## `Script Types in HTML`
- **JavaScript:** `type="text/javascript"` (Default; not required in HTML5)
- **ECMAScript Modules:** `type="module"` (Enables `import` and `export` statements)
- **JSON:** `type="application/json"` (Indicates JSON content)

These `type` attributes in the `<script>` tag define how the content within is processed by the browser. In modern HTML5, for JavaScript, `type="text/javascript"` is the default and no longer necessary to specify.

## `Bundlers: Vite, Webpack, Parcel`

### Vite:
- **Purpose:** Specifically designed for Vue.js projects, offering a modern build tool.
- **Features:** Blazing fast cold server start, native ES module support, lightning-fast HMR.
- **Advantage:** Utilizes native ES modules for quicker development environment.

### Webpack:
- **Purpose:** Widely used static module bundler for JavaScript applications.
- **Features:** Extensive customization through loaders/plugins, code-splitting for performance.
- **Advantage:** Enables complex configurations for large-scale applications.

### Parcel:
- **Purpose:** Zero-config, rapid web application bundler.
- **Features:** Requires no configuration, handles various file types seamlessly.
- **Advantage:** Simplifies development by eliminating configuration complexities, focusing on speed and simplicity.
