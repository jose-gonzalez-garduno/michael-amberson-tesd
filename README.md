# Michael Amberson III for Tempe Elementary School District

Campaign website for Michael Amberson III running for Tempe Elementary School District Governing Board.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom campaign theme tokens
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) (English and Spanish)
- **Deployment**: [Vercel](https://vercel.com/)
- **CI/CD**: GitHub Actions
- **Accessibility Testing**: Playwright with axe-core
- **Analytics**: Google Tag Manager (GTM), GA4, Meta Pixel, Meta Conversion API

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

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jose-gonzalez-garduno/michael-amberson-tesd.git
   cd michael-amberson-tesd
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional for local development):**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.
   
   The app will automatically redirect to `/en` (English) by default. To view Spanish, navigate to `/es`.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run test:a11y` - Run accessibility tests with Playwright

## Environment Variables

The application uses environment variables for configuration. Create a `.env.local` file (copy from `.env.example`) and set the following variables:

### Required for Production

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL="https://michaelamberson.com"
NEXT_PUBLIC_DEFAULT_LANGUAGE="en"

# Analytics - Google Tag Manager & GA4
NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"          # Get from Google Tag Manager
NEXT_PUBLIC_GA4_ID="G-XXXXXXXXXX"         # Get from Google Analytics 4

# Analytics - Meta (Facebook) Pixel
NEXT_PUBLIC_META_PIXEL_ID="123456789"     # Get from Meta Events Manager
META_CONVERSION_ACCESS_TOKEN="your-token" # Get from Meta Events Manager

# Campaign - Donation Platform
NEXT_PUBLIC_ACTBLUE_URL="https://secure.actblue.com/donate/your-campaign"
```

### Optional (for volunteer form integrations)

```bash
# Email Marketing - Mailchimp
MAILCHIMP_API_KEY="your-api-key"
MAILCHIMP_LIST_ID="your-list-id"

# Data Collection - Google Sheets Webhook
GOOGLE_SHEETS_WEBHOOK_URL="https://hooks.example.com/xxxx"

# Email Service - SendGrid
SENDGRID_API_KEY="your-api-key"
```

### Setting Environment Variables in Vercel

1. Go to your project in the Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable for **Production**, **Preview**, and **Development** environments
4. Redeploy your application for changes to take effect

**⚠️ IMPORTANT:** Never commit real API keys or tokens to the repository. Use the `.env.example` file with placeholders only.

## Project Structure

```
.
├── app/
│   ├── [locale]/              # Internationalized pages
│   │   ├── about/             # About page
│   │   ├── issues/            # Issues/platform page
│   │   ├── endorsements/      # Endorsements page
│   │   ├── events/            # Events page
│   │   ├── donate/            # Donate page
│   │   ├── volunteer/         # Volunteer form page
│   │   ├── contact/           # Contact page
│   │   ├── news/              # News/blog page
│   │   ├── press/             # Press resources page
│   │   ├── layout.tsx         # Locale-specific layout with GTM
│   │   └── page.tsx           # Home page with hero
│   ├── api/
│   │   ├── volunteer/         # Volunteer form API endpoint
│   │   └── track-meta/        # Meta Conversion API endpoint
│   ├── components/            # Reusable React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Hero.tsx           # Hero section
│   │   ├── VolunteerForm.tsx  # Volunteer signup form
│   │   └── IssueCard.tsx      # Issue display card
│   └── globals.css            # Global styles with campaign theme
├── i18n/
│   ├── routing.ts             # i18n routing configuration
│   └── request.ts             # i18n request configuration
├── locales/
│   ├── en.json                # English translations
│   └── es.json                # Spanish translations (marked with VERIFY TRANSLATION)
├── types/
│   └── index.ts               # TypeScript type definitions
├── utils/
│   └── analytics.ts           # Analytics utilities (GTM, Meta)
├── tests/
│   └── accessibility.spec.ts  # Accessibility tests
├── .github/
│   ├── workflows/
│   │   └── ci.yml             # GitHub Actions CI workflow
│   ├── dependabot.yml         # Dependabot configuration
│   ├── ISSUE_TEMPLATE/        # Issue templates
│   └── pull_request_template.md  # PR template
├── public/
│   └── placeholders/          # Placeholder images
└── .env.example               # Example environment variables
```

## Internationalization

The website supports both English and Spanish:
- English: `http://localhost:3000/en`
- Spanish: `http://localhost:3000/es`

To add or modify translations, edit the JSON files in the `locales/` directory:
- `locales/en.json` - English translations
- `locales/es.json` - Spanish translations (items marked with "VERIFY TRANSLATION" need review)

The language toggle is available in both the header and footer of every page.

## Testing & Quality Assurance

### Accessibility Testing

Run accessibility tests with Playwright and axe-core:

```bash
npm run test:a11y
```

This will check all pages for common accessibility issues including:
- Missing alt text on images
- Insufficient color contrast
- Missing ARIA labels
- Keyboard navigation issues
- Screen reader compatibility

### Testing the Volunteer Flow

1. **Navigate to the volunteer page:**
   ```
   http://localhost:3000/en/volunteer
   ```

2. **Fill out and submit the form** to test client-side validation

3. **Open browser developer tools** (F12) and check:
   - Console for dataLayer push events
   - Network tab to verify API calls to `/api/volunteer` and `/api/track-meta`

4. **Test dataLayer push:**
   ```javascript
   // In browser console, check the dataLayer:
   console.log(window.dataLayer);
   // Should show volunteer_signup event after form submission
   ```

### Testing the Meta Conversion API

You can test the Meta Conversion API endpoint with curl:

```bash
curl -X POST http://localhost:3000/api/track-meta \
  -H "Content-Type: application/json" \
  -d '{
    "eventName": "volunteer_signup",
    "eventParams": {"language": "en"},
    "user": {
      "email": "test@example.com",
      "firstName": "Test",
      "lastName": "User"
    }
  }'
```

Expected response if credentials are not configured:
```json
{"ok": true, "skipped": true}
```

### Testing the Donate Button Analytics

1. Navigate to the donate page
2. Open developer tools console
3. Click the "Donate via ActBlue" button
4. Check the console - you should see a dataLayer push for the `donate_click` event

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

## Analytics & Tracking

The website includes several analytics integrations:

### Google Tag Manager (GTM)

GTM is loaded in the layout and manages all tracking tags. The GTM container ID is configured via `NEXT_PUBLIC_GTM_ID`.

### Meta Pixel & Conversion API

- **Client-side tracking**: Meta Pixel (configured via `NEXT_PUBLIC_META_PIXEL_ID`)
- **Server-side tracking**: Meta Conversion API (`/api/track-meta` endpoint)
- PII (email, phone) is automatically hashed using SHA256 before sending to Meta

### Events Tracked

- `volunteer_signup` - When volunteer form is successfully submitted
- `donate_click` - When user clicks the ActBlue donation button
- `email_signup` - When user signs up for email newsletter (if implemented)

All events are pushed to `window.dataLayer` for GTM to process and can optionally trigger server-side Meta conversions.

## Security & Privacy

### Important Security Notes

⚠️ **Before deploying to production:**

1. **Add reCAPTCHA to forms** - The volunteer form needs reCAPTCHA verification to prevent spam
2. **Implement rate limiting** - Add rate limiting to API endpoints (volunteer, track-meta)
3. **Verify third-party integrations** - Check Mailchimp list IDs, SendGrid templates, etc.
4. **Review Spanish translations** - All items marked "VERIFY TRANSLATION" need professional review
5. **Check legal compliance** - Ensure FEC compliance for donation disclaimers
6. **Never commit secrets** - Use environment variables for all API keys and tokens

### What's Stubbed (TODO)

The following integrations are stubbed and need implementation:

- **Mailchimp API** - `app/api/volunteer/route.ts` (see commented code)
- **Google Sheets webhook** - `app/api/volunteer/route.ts` (see commented code)
- **SendGrid confirmation email** - `app/api/volunteer/route.ts` (see commented code)

## Pull Request Guidelines

⚠️ **DO NOT merge this PR automatically** - Require at least one human reviewer and passing CI before any merge.

⚠️ **DO NOT commit real API keys** - All environment variables should use placeholders in the repository.

### Before Merging

1. Review the Vercel preview deployment
2. Test the volunteer form and verify dataLayer pushes
3. Test the language toggle (EN/ES)
4. Verify the donate button links to ActBlue with UTM parameters
5. Run accessibility tests and fix any critical issues
6. Set environment variables in Vercel:
   - `NEXT_PUBLIC_GTM_ID`
   - `NEXT_PUBLIC_META_PIXEL_ID`
   - `META_CONVERSION_ACCESS_TOKEN`
   - `NEXT_PUBLIC_ACTBLUE_URL`

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
