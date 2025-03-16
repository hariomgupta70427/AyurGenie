# Ayurvedic DNA Genius

## Overview

This project is a modern web application that combines ancient Ayurvedic wisdom with cutting-edge DNA analysis to provide personalized health recommendations. The platform helps users understand their unique body constitution (Prakriti) and offers tailored wellness advice based on their genetic predispositions.

## Features

- Personalized Dosha assessment (Vata, Pitta, Kapha)
- DNA-based health insights
- Custom Ayurvedic diet recommendations
- Lifestyle modification suggestions
- Interactive wellness dashboard
- Progress tracking and reporting

## Technology Stack

This project is built with a modern tech stack:

- Vite - Next generation frontend tooling
- TypeScript - For type-safe code
- React - UI component library
- shadcn-ui - Beautiful UI components
- Tailwind CSS - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```sh
# Clone the repository
git clone <YOUR_REPOSITORY_URL>

# Navigate to the project directory
cd ayurvedic-dna-genius

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` by default.

## Project Structure

```
ayurvedic-dna-genius/
├── public/            # Static assets
├── src/               # Source files
│   ├── components/    # Reusable UI components
│   ├── lib/           # Utility functions and helpers
│   ├── pages/         # Application pages
│   ├── styles/        # Global styles
│   └── App.tsx        # Main application component
├── package.json       # Project dependencies and scripts
└── vite.config.ts     # Vite configuration
```

## Deployment

This project can be deployed to any static hosting service:

1. Build the production-ready assets:
   ```sh
   npm run build
   # or
   yarn build
   ```

2. Deploy the contents of the `dist` directory to your hosting provider of choice (Netlify, Vercel, GitHub Pages, etc.)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
