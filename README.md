# Electro Cart

A modern e-commerce application for an electronics store built with Angular 19 and Material Design.

## Features

- Product browsing with filtering capabilities
- Search by name and type
- Price range filtering
- Product categories (TVs, Appliances, Phones, Video Games)
- Product details modal with reviews
- Shopping cart functionality using NgRx state management
- Responsive grid layout
- Modern Material Design UI

## Project Structure

```
src/
├── app/
│   ├── core/                  # Core functionality used across the app
│   │   ├── models/            # Data models and interfaces
│   │   ├── services/          # Global services like API communication
│   │   └── store/             # NgRx state management
│   │       └── cart/          # Cart-specific state
│   ├── features/              # Feature-specific modules
│   │   ├── products/          # Product browsing and details
│   │   │   ├── product-list/
│   │   │   └── product-details/
│   │   └── cart/              # Cart feature
│   ├── shared/                # Shared components, directives, and pipes
│   ├── app.component.ts       # Root component
│   ├── app.config.ts          # App configuration
│   └── app.routes.ts          # App routing

```

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd electro-cart
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## Technology Stack

- Angular 19
- Angular Material
- NgRx for state management
- RxJS for reactive programming
- TypeScript

## Development

The app uses a modular, feature-based architecture:

1. **Core Module**: Contains services, models, and store logic used throughout the app.
2. **Features**: Separate features are isolated in their own directories with related components.
3. **Shared**: Components that are reused across different features.

This structure allows for better maintainability and scalability as the application grows.

## Features Implemented

1. Product Browsing

   - Grid layout with 3 cards per row
   - Load more functionality
   - Product filtering

2. Product Details

   - Modal view with detailed information
   - Customer reviews
   - Add to cart functionality

3. Shopping Cart
   - Cart summary
   - Remove items
   - Total calculation
   - Persistent state with NgRx

## Future Improvements

1. Add authentication
2. Implement checkout process
3. Add product categories management
4. Add user reviews functionality
5. Implement real backend API
6. Add unit tests
7. Add e2e tests
