# Michael Amberson III for Tempe Elementary School District

Website for Michael Amberson III campaign running for Tempe Elementary School District Governing Board.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom campaign theme tokens
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) (English and Spanish)
- **Deployment**: [Vercel](https://vercel.com/)
- **CI/CD**: GitHub Actions
- **Accessibility Testing**: Playwright with axe-core

## Campaign Color Palette

The website uses a custom theme with the following colors:
- **Primary (Deep Blue)**: `#1e40af` - Represents trust and stability
- **Secondary (Red)**: `#dc2626` - Represents energy and passion
- **Accent (Amber)**: `#f59e0b` - Represents warmth and optimism
- **Light Background**: `#eff6ff` - Light blue for sections

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jose-gonzalez-garduno/michael-amberson-tesd.git
   cd michael-amberson-tesd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The app will automatically redirect to `/en` (English) by default. To view Spanish, navigate to `/es`.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run test:a11y` - Run accessibility tests with Playwright

## Project Structure

```
.
├── app/
│   ├── [locale]/          # Internationalized pages
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Home page
│   └── globals.css        # Global styles with campaign theme
├── i18n/
│   ├── routing.ts         # i18n routing configuration
│   └── request.ts         # i18n request configuration
├── locales/
│   ├── en.json            # English translations
│   └── es.json            # Spanish translations
├── tests/
│   └── accessibility.spec.ts  # Accessibility tests
├── .github/
│   ├── workflows/
│   │   └── ci.yml         # GitHub Actions CI workflow
│   ├── dependabot.yml     # Dependabot configuration
│   ├── ISSUE_TEMPLATE/    # Issue templates
│   └── pull_request_template.md  # PR template
└── public/                # Static assets
```

## Internationalization

The website supports both English and Spanish:
- English: `http://localhost:3000/en`
- Spanish: `http://localhost:3000/es`

To add or modify translations, edit the JSON files in the `locales/` directory:
- `locales/en.json` - English translations
- `locales/es.json` - Spanish translations

## Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import the Repository**
   - Click "Add New Project" in your Vercel dashboard
   - Select "Import Git Repository"
   - Choose the `jose-gonzalez-garduno/michael-amberson-tesd` repository
   - Vercel will automatically detect Next.js settings

3. **Configure the Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the deployment to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

5. **Add a Custom Domain** (Optional)
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain (e.g., `michaelamberson.com`)
   - Follow Vercel's instructions to configure DNS

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Environment Variables

If you need to add environment variables:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add your variables for Production, Preview, and Development environments

### Automatic Deployments

Once connected to Vercel:
- **Production**: Pushes to the `main` branch automatically deploy to production
- **Preview**: Pull requests automatically generate preview deployments
- Each deployment gets a unique URL for testing

## Continuous Integration

The project uses GitHub Actions for CI/CD with the following checks:

1. **Lint** - Runs ESLint to ensure code quality
2. **Build** - Verifies the application builds successfully
3. **Accessibility** - Runs automated accessibility tests using Playwright and axe-core

These checks run automatically on:
- Push to `main` or `develop` branches
- All pull requests to `main` or `develop` branches

## Dependency Management

The project uses Dependabot to automatically:
- Check for npm package updates weekly (Mondays at 9:00 AM)
- Check for GitHub Actions updates weekly
- Create pull requests for dependency updates
- Security updates are prioritized

## Accessibility

This website is built with accessibility in mind:
- Semantic HTML
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Screen reader support
- Automated testing with axe-core

Run accessibility tests locally:
```bash
npm run test:a11y
```

## Contributing

1. Create a new branch from `develop`
2. Make your changes
3. Run linting and tests
4. Submit a pull request using the PR template
5. Wait for CI checks to pass
6. Request review from team members

## Campaign Information

**Candidate**: Michael Amberson III  
**Position**: Governing Board Member  
**District**: Tempe Elementary School District  

For more information about the campaign, please contact the campaign team.

## License

© 2024 Michael Amberson III Campaign. All rights reserved.  
Paid for by Friends of Michael Amberson III

---

*This website is maintained by the Michael Amberson III campaign team. For questions or issues, please open an issue in this repository.*
