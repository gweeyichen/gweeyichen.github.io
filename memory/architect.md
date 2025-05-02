# Alchemy Project Architecture

## Overview

Alchemy is a React-based website for Deal Alchemy Consortium, built with Vite, React, TypeScript, and TailwindCSS. The project follows a component-based architecture with a focus on internationalization (i18n) support for English and Chinese languages.

## Tech Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router v6
- **State Management**: React Context API
- **UI Components**: Shadcn UI

## Project Structure

```
/src
  /components        # Reusable UI components
  /contexts          # React Context providers
  /hooks             # Custom React hooks
  /lib               # Utility functions and helpers
  /pages             # Page components
  /translations      # Internationalization files
  /types             # TypeScript type definitions
  /ui                # Shadcn UI components
  App.tsx            # Main application component
  main.tsx           # Entry point
```

## Key Components

- **Navbar**: Main navigation component with language toggle
- **Footer**: Site-wide footer component
- **TeamMember**: Component for displaying team member information
- **HeroSection**: Homepage hero section
- **ProcessPreview**: Process overview component
- **FounderQuote**: Quote component for the founder
- **GlobalConnections**: Interactive map showing global network and team locations
- **ScrollToTop**: Component that scrolls to top on route change

## Pages

- **Index**: Homepage
- **About**: About page
- **Team**: Team page with equal-sized principal cards
- **HowWeWork**: Process page with five-step roadmap
- **Sectors**: Industry sectors page with case studies
- **Insights**: Blog/insights page
- **Contact**: Contact page with forms for deal submission and inquiries
- **NotFound**: 404 page

## Internationalization (i18n)

The project uses a custom internationalization system built with React Context API:

- **LanguageContext**: Provides language state and translation functions
- **translations/index.ts**: Central repository for all translations
- **localStorage**: Persists language preference

Translation structure:
- **commonTranslations**: Shared across multiple components (navigation, footer, etc.)
- **pageTranslations**: Page-specific translations
- **componentTranslations**: Component-specific translations

Translation access methods:
- **useLanguage**: Basic hook for language context
- **usePageTranslations**: Hook for page-specific translations
- **useComponentTranslations**: Hook for component-specific translations
- **getCommonT**: Function to get common translations
- **getPageT**: Function to get page-specific translations
- **getComponentT**: Function to get component-specific translations

## Routing

React Router v6 is used for routing with the following features:
- **BrowserRouter**: Main router component
- **ScrollToTop**: Component that scrolls to top on route change
- **Routes/Route**: Route definitions

## Styling

- **TailwindCSS**: Utility-first CSS framework
- **Custom classes**: 
  - `investment-navy`: Primary dark blue color
  - `investment-gold`: Accent gold color
  - `investment-slate`: Text color
  - `investment-light-gray`: Light background color
  - `investment-charcoal`: Dark background color
- **Shadcn UI**: Component library built on Radix UI
  - Dialog
  - Button
  - Other UI primitives

## Animation

- CSS animations with delay classes:
  - `animate-fade-in`: Base fade-in animation
  - `animate-fade-in-delay-1` through `animate-fade-in-delay-5`: Staggered animations

## Interactive Elements

- **GlobalConnections Map**: Interactive map with clickable locations
  - Shows team members by location when clicked
  - Animated connection lines between locations
  - Hover effects for better user experience

- **TeamMember Cards**: Interactive cards that open detailed dialogs
  - Equal sizing for all principals
  - Consistent styling and animations
  - Modal dialogs for detailed information

- **Language Toggle**: Button in the navbar to switch between English and Chinese
  - Persists preference in localStorage
  - Updates all content immediately

## Best Practices

1. **Component Structure**: Each component is in its own file with a clear, single responsibility
2. **TypeScript**: Strong typing for props and state
3. **Responsive Design**: Mobile-first approach with responsive breakpoints
4. **Accessibility**: Semantic HTML and ARIA attributes
5. **Performance**: Optimized images and lazy loading
6. **Code Organization**: Clear separation of concerns

## Development Guidelines

1. **Naming Conventions**:
   - Components: PascalCase (e.g., `TeamMember.tsx`)
   - Utilities/hooks: camelCase (e.g., `useLanguage.ts`)
   - Files: kebab-case for non-component files (e.g., `global-styles.css`)

2. **Component Creation**:
   - Each component should have a clear, single responsibility
   - Use TypeScript interfaces for props
   - Document complex components with comments

3. **Styling**:
   - Use TailwindCSS utility classes
   - Create custom utility classes for repeated patterns
   - Use the `cn()` utility for conditional class names

4. **Translations**:
   - Add new translations to the central translation files
   - Use the appropriate translation function based on scope
   - Provide fallbacks for missing translations
   - Always update all language versions simultaneously

5. **Routing**:
   - Define routes in App.tsx
   - Use Link component for internal navigation
   - Implement proper 404 handling

## Deployment

- Development server runs on port 8080
- Production build creates optimized assets in the `dist` folder
- Deployment process TBD

## Future Enhancements

1. **SEO Optimization**: Meta tags, structured data
2. **Performance Monitoring**: Analytics integration
3. **Content Management**: Potential CMS integration
4. **Form Handling**: Contact form submission and validation
5. **Animation Enhancements**: More sophisticated animations