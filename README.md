# Interactive Developer Portfolio

A premium, interactive personal portfolio website designed for **Software Engineering Interns and Web Developers**. Built with **React.js**, **Vite**, and **Vanilla CSS** (using custom HSL theme tokens), it features interactive canvas particles, a scroll reveal system, and smooth dark/light theme transitions.

---

## 🚀 Key Features

*   **Dual Theme Support**: Beautiful dark mode and light mode, syncing automatically with user system preferences and caching selections locally (`localStorage`).
*   **Ambient Backdrop**: A fluid HTML5 Canvas particle network that responds to mouse hover and repels nodes dynamically.
*   **Interactive Showcases**:
    *   **Hero Typewriter Loop**: Dynamic introduction loops.
    *   **Projects Gallery**: Grouped filter tabs and full-screen detail popup modals.
    *   **Skills Grid**: Tabbed expertise dashboards featuring glowing progress meters.
    *   **Interactive Timeline**: Alternating vertical tracks tracing work, education, and courses.
*   **Responsive Forms**: Message inputs with instant client-side validation alerts.
*   **Fully Responsive**: Grid & flex layouts optimized for Mobile, Tablet, and Desktop screens.

---

## 🛠️ Technology Stack

*   **Frontend Library**: [React.js](https://react.dev/) (v18)
*   **Build Tool**: [Vite](https://vite.dev/) (v5)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Styling**: Custom CSS3 variables with frosted glass layouts (`backdrop-filter`).

---

## 💻 Local Setup Instructions

Follow these steps to run the portfolio on your local machine:

1.  **Clone or Open Workspace**:
    Make sure you are in the project folder:
    ```bash
    cd d:/Aakanksha/portfolio
    ```

2.  **Install Dependencies**:
    Ensure you have [Node.js](https://nodejs.org/) installed, then run:
    ```bash
    npm install
    ```

3.  **Start Development Server**:
    Launch the hot-reloading dev server:
    ```bash
    npm run dev
    ```
    Open the address printed in the terminal (usually `http://localhost:5173`) in your browser.

4.  **Production Build**:
    To compile and minify assets into the `/dist` directory:
    ```bash
    npm run build
    ```

---

## 🌐 Deployment to GitHub Pages

Here are the step-by-step instructions to deploy this portfolio to your GitHub account:

### Option A: Automatic Deployment using GitHub Actions (Recommended)

This compiles and publishes your site automatically every time you push code to `main`.

1.  **Create Github Actions Directory**:
    Create a folder named `.github/workflows` in the root of your project.
2.  **Add Deployment Script**:
    Create a file named `deploy.yml` inside that folder with this content:
    ```yaml
    name: Deploy to GitHub Pages

    on:
      push:
        branches: [ "main" ]

    permissions:
      contents: read
      pages: write
      id-token: write

    concurrency:
      group: "pages"
      cancel-in-progress: true

    jobs:
      deploy:
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v4
          - name: Set up Node
            uses: actions/setup-node@v4
            with:
              node-version: 20
              cache: npm
          - name: Install dependencies
            run: npm ci
          - name: Build
            run: npm run build
          - name: Upload artifact
            uses: actions/upload-pages-artifact@v3
            with:
              path: ./dist
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4
    ```

3.  **Initialize Git & Push to GitHub**:
    Run these commands in your project folder:
    ```bash
    git init
    git add .
    git commit -m "feat: initial commit of portfolio website"
    git branch -M main
    # Link your GitHub repository (replace with your repository URL)
    git remote add origin https://github.com/aakanksha-tech/portfolio.git
    git push -u origin main
    ```

4.  **Enable GitHub Actions on Pages Settings**:
    *   Go to your repository on GitHub.
    *   Click **Settings** (gear icon) > **Pages** (in the sidebar).
    *   Under **Build and deployment** > **Source**, change from *Deploy from a branch* to **GitHub Actions**.
    *   Within minutes, your workflow will run and deploy the site!

> ⚠️ **Important Vite Configuration Note**:
> If your site URL is `https://aakanksha-tech.github.io/portfolio/` (it has a subfolder named `/portfolio/`), you **must** update [vite.config.js](file:///d:/Aakanksha/portfolio/vite.config.js) to set the `base` URL before pushing:
> ```javascript
> export default defineConfig({
>   base: '/portfolio/', // Match your repository name
>   plugins: [react()],
> })
> ```
