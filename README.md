# FounderVerse

Welcome to the FounderVerse repository! This is a premium startup networking application built with React Native and Expo. 

This repository contains the initial scalable, production-ready skeleton for the team to build upon.

---

# 🚨 STOP: CRITICAL INSTALLATION RULE 🚨

# DO NOT USE `npm install <package>`!

**ALWAYS** use the following command to add new dependencies:

### `npx expo install <package-name>`

### Why?
Expo heavily manages package versions to ensure compatibility with our specific SDK (SDK 54). If you blindly use `npm install`, you risk pulling in incompatible newer versions of packages that will break the build (especially Babel and Metro bundler errors). `npx expo install` automatically checks our SDK version and grabs the exact, safe version of the package.

---

## Architecture & Folder Structure

The project uses **Expo Router** and a highly modular folder structure to ensure enterprise-level scalability.

### `app/` (Routing)
This directory handles all the navigation and screens. 
- `app/(tabs)/`: Contains the main bottom-tab navigation screens (Home, Map, Deals, etc.).
- `app/_layout.tsx`: The root layout of the application.

### `src/` (Implementation)
This is where the actual logic, components, and design system live.
- `src/assets/`: Images, fonts, and local media.
- `src/components/`: Reusable React components.
  - `src/components/ui/`: Dumb, primitive UI components (Buttons, Cards, Inputs). Every screen must use these primitives to maintain design consistency.
- `src/theme/`: The Design System. Contains our specific color palettes, spacing, and typography tokens. Tailwind and runtime styles share the same color tokens.
- `src/hooks/`: Custom React hooks.
- `src/store/`: Global state management.
- `src/types/`: TypeScript interfaces and types.
- `src/utils/`: Helper functions and utilities.
- `src/__tests__/`: Jest tests to ensure code quality.

## Tech Stack

* **Framework:** React Native 0.81 & React 19
* **Platform:** Expo SDK 54 & Expo Go
* **Routing:** Expo Router
* **Styling:** NativeWind v4 (Tailwind CSS)
* **Language:** TypeScript
* **Testing:** Jest & `@testing-library/react-native`

## Development Setup

1. Clone the repository.
2. Run `npm install` (this is safe for the initial setup).
3. Run `npx expo start -c` to start the Metro bundler with a cleared cache.
4. Scan the QR code with the Expo Go app on your physical device, or press `a` or `i` to open in an emulator.

## Pre-commit Hooks

This project is configured with **Husky** and **lint-staged**. 
Before you can commit code, the system will automatically run type-checking and Jest tests on the files you've changed. You cannot commit broken code!
