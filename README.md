# Lone Star Ledgers

Production-ready accounting services website for Texas-based businesses.

## Build & Deploy

- **Repository**: https://github.com/stevei101/lonestarledgers
- **Domain**: lonestareledgers.com (via lornu.ai infrastructure)
- **Infrastructure**: Deployed through lornu.ai systems

## Local Development

Simply open `index.html` in a browser. No build process required.

### Tech Stack
- Tailwind CSS 3
- Playfair Display + Inter fonts
- Font Awesome 6.4 icons
- Vanilla JavaScript

## Features

- Texas-themed branding (TX blue, TX red, copper accents)
- Fully responsive design
- Smooth animations and transitions
- Interactive dashboard mockup
- Live receipt processing simulator
- Contact form with validation

## Sections

1. **Navigation** - Sticky header with smooth nav links
2. **Hero** - Value proposition with animated dashboard
3. **Services** - Three core offerings (Precision Ledgering, Pflugerville Pivot, Comptroller Guard)
4. **Technical** - "The Guts" section showcasing Rust engine and AI integration
5. **Guarantee** - "The Handshake" trust signals
6. **Contact** - Lead capture form
7. **Footer** - Company info and legal disclosure

## Deployment

Push to `main` branch. GitHub Actions automatically deploys to lornu.ai infrastructure.

### Environment Variables Required
- `LORNU_DEPLOY_KEY` - SSH private key for deployment
- `LORNU_DEPLOY_HOST` - Target deployment server

## License

Proprietary - Lone Star Ledgers LLC
