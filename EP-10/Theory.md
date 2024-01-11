# EP10 -Jo Dikhta hai wo Bikta hai!(Theory)

## Ways of Writing CSS:

1. **Inline Styles:**
   ```html
   <div style="color: red; font-size: 16px;">Hello, World!</div>
   ```
2. **Internal Styles (Within HTML):**

```html
<style>
  body {
    background-color: #f0f0f0;
  }
</style>
```

3. **External Styles (Separate CSS file):**

```css
/* styles.css */
body {
  background-color: #f0f0f0;
}
```

4. **CSS-in-JS (e.g., Styled Components in React):**

```jsx
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: red;
  font-size: 16px;
`;
```

## Configuring Tailwind CSS:

1. **Install Tailwind CSS:**

```bash
npm install tailwindcss

```

2. **Create Configuration Files:**

   - Create a tailwind.config.js file.

3. **Configure PostCSS:**

   - Create a .postcssrc or postcss.config.js file.

## `tailwind.config.js` Keys:

- **content:** Specifies files to process for extracting classes.
- **theme:** Defines colors, fonts, spacing, and more.
- **extend:** Allows extending or overriding existing Tailwind CSS classes.
- **plugins:** Enables third-party plugins for additional functionality.

## `.postcssrc` File:

- **Purpose:** Configures PostCSS, a tool for processing CSS with plugins.

- **Example:**

```json
{
  "plugins": {
    "autoprefixer": {},
    "postcss-nested": {}
  }
}
```

The `.postcssrc` file is used to define PostCSS plugins and their configurations for tasks like autoprefixing or nested styles.
