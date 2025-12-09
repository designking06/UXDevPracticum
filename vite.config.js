import { defineConfig } from 'vite';
export default defineConfig({
  root: 'src',
  // Set the base URL for deployment (important for GitHub Pages project sites)
  base: '/UXDevPracticum/', // Replace 'your-repo-name' with your actual repository name
  build: {
    // Output the build files to the 'dist' folder outside of the 'src' root
    outDir: '../dist',
    // Empty the output directory before building
    emptyOutDir: false,
  },
})