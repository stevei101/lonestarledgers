# Lone Star Ledgers

Production-grade accounting services website for Texas-based businesses.

## Tech Stack

- **React 18** - Component-based UI
- **TypeScript** - Type safety
- **Bun** - Fast runtime & package manager
- **Vite** - Modern build tool (configured for React + TS)
- **Tailwind CSS 3** - Utility-first styling
- **Font Awesome 6.4** - Icon library

## Project Structure

```
lonestarledgers/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── DashboardMockup.tsx
│   │   ├── Services.tsx
│   │   ├── Technical.tsx        (with interactive demo)
│   │   ├── Guarantee.tsx
│   │   ├── Contact.tsx          (form with validation)
│   │   └── Footer.tsx
│   ├── App.tsx                  (main component)
│   ├── main.tsx                 (entry point)
│   └── index.css                (Tailwind + custom styles)
├── index.html                   (HTML shell)
├── package.json                 (Bun + dependencies)
├── bunfig.toml                  (Bun config)
├── tsconfig.json                (TypeScript config)
├── vite.config.ts               (Vite build config)
├── tailwind.config.js           (Tailwind config)
├── postcss.config.js            (CSS processing)
└── .github/workflows/           (deployment automation)
```

## Development

### Install Dependencies
```bash
bun install
```

### Development Server
```bash
bun run dev
```
Opens http://localhost:5173 with hot reload.

### Build for Production
```bash
bun run build
```
Generates optimized bundle in `dist/`.

### Type Check
```bash
bun run type-check
```

## Features

### Design
- **Texas Branding** - TX blue (#002868), TX red (#BF0D3E), copper accents
- **Responsive** - Mobile-first, fully responsive layout
- **Animations** - Smooth transitions, floating effects, scanner simulation
- **Interactive** - Live receipt processing demo with progress simulation

### Sections

1. **Navigation** - Sticky header with smooth scroll links
2. **Hero** - Value prop with animated dashboard mockup showing operating cash
3. **Services** - 3-card grid: Precision Ledgering, Pflugerville Pivot, Comptroller Guard
4. **Technical** - "The Guts" section with interactive Rust engine demo
5. **Guarantee** - Trust signals: 100% US staff, real-time visibility, zero outsourcing
6. **Contact** - Lead capture form ("Claim My Audit")
7. **Footer** - Company info, service areas, legal disclosure

## Deployment

### GitHub Actions
Automatic deployment on push to `main` branch.

**Required Secrets** (Settings → Secrets and variables → Actions):
```
LORNU_DEPLOY_KEY   → SSH private key
LORNU_DEPLOY_HOST  → Deployment server (e.g., deploy@lornu.ai)
```

**Workflow File**: `.github/workflows/deploy.yml`
- Builds with Bun
- Deploys `dist/` to `/var/www/lonestarledgers/`

### Manual Deployment
```bash
bun run build
scp -r dist/* user@server:/var/www/lonestarledgers/
```

## Environment

- **Node/Bun Version**: 18+
- **Browser Support**: Modern browsers (ES2020+)
- **External CDN**: Font Awesome, Google Fonts (loaded from CDN)

## Key Components

### DashboardMockup
Animated dashboard showing:
- Operating cash: $482,904.22
- Monthly revenue: +$124,500
- TX tax liability calculation
- Compliance status badge

### Technical Section
Interactive demo:
- Click "Run Live Test" to simulate receipt processing
- Shows progress bar with scanner animation
- Vendor extraction: "Terry Black's BBQ"
- Tax calculation: "8.25% Applied [✓]"

### Contact Form
- Name, email, company fields
- Success message on submit
- Connected for future backend integration

## Branding

### Colors
- **TX Blue**: #002868 (primary)
- **TX Red**: #BF0D3E (accent)
- **Copper**: #B87333 (tertiary)

### Typography
- **Display**: Playfair Display (bold serif)
- **Body**: Inter (clean sans-serif)

### Icons
Font Awesome 6.4: star, hat-cowboy, chart-line, landmark, lock, bolt, brain, etc.

## License

Proprietary - Lone Star Ledgers LLC

---

**Repository**: https://github.com/stevei101/lonestarledgers  
**Domain**: lonestareledgers.com (via lornu.ai infrastructure)  
**Built with**: React + TypeScript + Bun + Tailwind
