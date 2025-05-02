# Project Memory

This document serves as a central repository for important decisions, requirements, and changes made to the Alchemy project. It should be consulted before making any significant changes to ensure consistency with previous decisions.

## Key Requirements

### Team Page
- Principals should be equal in size (no special sizing for the founder)
- Thomas Sim should be positioned third beside Wu Zhong
- Team member cards should have consistent styling and animations
- The `isFounder` prop exists in the TeamMember component but is not currently used for sizing differences

### Navigation
- When changing pages, the page should scroll to the top automatically
- This is implemented via the ScrollToTop component in the BrowserRouter
- The component uses useLocation and useEffect to detect route changes and scroll to top

### Internationalization
- The website must support both English (en) and Chinese (zh) languages
- Language preference is stored in localStorage for persistence
- All text content should be available in both languages
- Translations are centralized in the translations directory and organized into:
  - commonTranslations: Shared across multiple components
  - pageTranslations: Page-specific translations
  - componentTranslations: Component-specific translations
- Specialized hooks are available for retrieving translations:
  - useLanguage: Basic language context
  - usePageTranslations: For page-specific translations
  - useComponentTranslations: For component-specific translations
- When adding or editing content, always update all language versions simultaneously
- Never add content to only one language version

### Design Elements
- Color scheme: navy blue, gold, slate, light gray, charcoal
- Custom color classes:
  - investment-navy: Primary dark blue color
  - investment-gold: Accent gold color
  - investment-slate: Text color
  - investment-light-gray: Light background color
  - investment-charcoal: Dark background color
- Animations: Fade-in with staggered delays for list items
- Responsive design: Mobile, tablet, and desktop layouts
- Typography: Serif fonts for headings, sans-serif for body text
- UI Components: Uses Shadcn UI components for consistent styling

### Global Connections Map
- Interactive SVG map showing actual country shapes with clear white borders
- Uses react-simple-maps for geographic visualization
- Locations: Singapore, Japan, Hong Kong, China
- Team members by location:
  - Singapore: Yichen/Thomas
  - China: Thomas/Cermain
  - Hong Kong: Wu Zhong/Cermain/Terence
  - Japan: Wu Zhong/Yichen
- Expertise buttons arranged in a grid (3 top, 3 bottom) without blocking country views
- Expertise buttons have consistent styling in both English and Chinese
- Clicking on a location opens a dialog showing team members and expertise for that location
- Map has hover effects, animated connection lines, and pulse animations for active locations
- Dark gradient background with white country borders for maximum visibility

### Branding
- The website should display 'Deal Alchemy' in white at the top
- Use deal-alchemy-logo.svg from the images folder for all logos
- The website should display 'Deal Alchemy Consortium' as '交易炼金联盟' in Chinese
- The founder's name '魏义成' should be correctly displayed at the bottom of the website
- Japanese company name should be displayed as '株式会社 山神' (not hotate-yamajin)

## Important Changes

### 2023-10-XX: Initial Setup
- Created project with Vite, React, TypeScript, and TailwindCSS
- Set up basic routing and page structure
- Implemented initial components

### 2023-XX-XX: Team Page Update
- Modified TeamMember component to make all principals equal in size
- Reordered team members to place Thomas Sim in the third position
- Fixed styling issues with team member cards

### 2023-XX-XX: Chinese Language Support
- Added Chinese translations for all content
- Implemented language toggle in the Navbar
- Created LanguageContext for managing language state
- Added localStorage persistence for language preference

### 2023-XX-XX: Scroll Behavior
- Added ScrollToTop component to reset scroll position on page navigation
- Integrated with React Router to detect route changes

### 2023-XX-XX: Translation System Improvements
- Centralized translations in dedicated files
- Added localStorage persistence for language preference
- Created specialized hooks for retrieving translations

### 2023-XX-XX: Name and Company Updates
- Changed "hotate-yamajin" to "株式会社 山神" throughout the site
- Ensured "魏义成" is used instead of "桂奕晨" in all Chinese text

### 2023-XX-XX: Sectors Update
- Added Systems Integrator as a separate sector with case study (20% higher bid sale)
- Added Construction sector with Yichen's case study (30% higher valuation sale)
- Ensured all sectors are properly translated in both English and Chinese
- Implemented consistent grid layout for sectors with color-coded headers

### 2023-XX-XX: Global Connections Map Enhancement
- Replaced abstract map with detailed SVG map showing actual country shapes
- Implemented react-simple-maps for geographic visualization
- Arranged expertise buttons in a grid layout to avoid blocking country views
- Removed caption text that was blocking bottom expertise buttons
- Added white country borders for better visibility
- Enhanced interactive elements with hover effects and pulse animations
- Improved dialog to show both team members and expertise for each location

## Pending Tasks

- Complete remaining page content
- Optimize images for better performance
- Add SEO metadata
- Implement contact form functionality
- Add analytics tracking

## Design Decisions

### Component Structure
- Each UI element is a separate component for reusability
- Page components compose multiple smaller components
- Context providers handle cross-cutting concerns

### State Management
- React Context API for global state (language, theme)
- Component state for local UI state
- No Redux or other external state management libraries needed at this time

### Performance Considerations
- Lazy loading for images
- Code splitting for routes
- Optimized animations to prevent layout shifts

## Accessibility Guidelines

- Use semantic HTML elements
- Provide alt text for all images
- Ensure sufficient color contrast
- Support keyboard navigation
- Test with screen readers

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported

## Reading Instructions

This memory document should be reviewed:
1. Before starting work on a new feature
2. When making significant changes to existing components
3. When adding new translations or content
4. When modifying the project architecture

Updates to this document should be made whenever:
1. New requirements are established
2. Significant changes are implemented
3. Important decisions are made about the project direction
4. Technical debt or issues are identified for future resolution