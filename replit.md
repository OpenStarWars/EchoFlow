# Echo Chamber Narrative

## Overview

This is a modern full-stack web application built with React and Express, designed to create an immersive "Echo Chamber Narrative" experience. The application features a refined dark-themed interface with practical navigation, clean layouts, and subtle animations to create a thought-provoking digital experience with improved usability and accessibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)

### Sci-fi Holographic Interface Evolution
- **Date**: January 23, 2025
- **Changes Made**:
  - Transformed interface to futuristic sci-fi aesthetic inspired by Iron Man, Minority Report, and Blade Runner
  - Implemented holographic transparent glass panels with angular clip-path designs
  - Added cyan holographic color scheme with glowing borders and text shadows
  - Created animated scan lines effect across entire interface
  - Enhanced navigation with energy pulse animations and scanning borders
  - Added 3D card hover effects with perspective transforms
  - Implemented animated data streams flowing vertically
  - Created technical blueprint grid overlays on sections
  - Updated content to use technical sci-fi terminology (quantum protocols, neural networks, holographic matrices)
  - Enhanced buttons with hover scan effects and glowing indicators
- **Result**: Immersive sci-fi holographic interface that maintains usability while providing cinematic visual experience

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Comprehensive Radix UI component library with shadcn/ui styling
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reload with tsx for development server
- **Production**: esbuild for server bundling

### Data Storage Solutions
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with Zod schema validation
- **Connection**: Neon serverless PostgreSQL driver
- **Migrations**: Drizzle Kit for database schema management
- **Development Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
- **UI Library**: Complete set of accessible UI components based on Radix UI primitives
- **Theming**: Dark-themed design with custom CSS variables for Echo Chamber aesthetic
- **Typography**: Inter font family for clean, modern text rendering
- **Interactive Elements**: Custom scroll-based animations and visual effects

### Backend Components
- **API Routes**: RESTful API structure with `/api` prefix
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging with performance metrics

### Shared Components
- **Schema**: Shared TypeScript types and Zod validation schemas
- **Database Models**: User model with username/password authentication structure

## Data Flow

1. **Client Requests**: React components make API requests using React Query
2. **API Processing**: Express routes handle requests and interact with storage layer
3. **Data Persistence**: Storage interface abstracts database operations
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: React Query manages caching and synchronization

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for production
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling

## Deployment Strategy

### Development Environment
- **Frontend**: Vite development server with hot module replacement
- **Backend**: tsx with automatic restart on file changes
- **Database**: In-memory storage for rapid development iteration
- **Integration**: Vite proxy configuration for seamless API integration

### Production Build
- **Frontend**: Vite production build with optimized bundles
- **Backend**: esbuild compilation to single JavaScript file
- **Database**: PostgreSQL with Drizzle migrations
- **Deployment**: Node.js server serving both API and static assets

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with client, server, and shared code for simplified development and deployment
2. **TypeScript Throughout**: End-to-end type safety from database to UI components
3. **Abstracted Storage**: Interface-based storage design allows switching between development and production databases
4. **Component Library**: Comprehensive UI component system for consistent design and accessibility
5. **Modern Tooling**: Vite and esbuild for fast development and optimized production builds

The application emphasizes performance, type safety, and developer experience while providing a solid foundation for the immersive Echo Chamber Narrative concept with its atmospheric visual design and interactive scrolling effects.