# Playwright QA Automation Portfolio

End-to-end (E2E) test automation project built with **Playwright and TypeScript**, demonstrating practical software quality assurance skills through automated testing of a web application.

## Project Overview

This project automates key user journeys on [SauceDemo](https://www.saucedemo.com/), a sample e-commerce application designed for testing practice.

The goal is to demonstrate test design, browser automation, assertions, debugging, and version control.

## Technologies

- Playwright
- TypeScript
- Node.js
- Git and GitHub
- GitHub Actions (workflow configuration)

## Automated Test Scenarios

| Test Case | Description |
|---|---|
| Valid Login | Verify that a user can log in with valid credentials |
| Invalid Login | Verify that an incorrect password produces an error message |
| Add to Cart | Verify that a product can be added to the shopping cart |
| Remove from Cart | Verify that a product can be removed successfully |

## Test Results

**4 of 4 tests passed locally using Chromium.**

The project uses Playwright assertions to validate application behavior.

## How to Run

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/aceg40/playwright-qa-portfolio.git
cd playwright-qa-portfolio
npm ci
npx playwright install
```

### Run Tests

```bash
npx playwright test --project=chromium
```

### Run Tests with Browser Visible

```bash
npx playwright test --project=chromium --headed
```

### View HTML Report

```bash
npx playwright show-report
```

## Project Structure

```text
playwright-qa-portfolio/
├── .github/workflows/
├── tests/
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── example.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

## Future Improvements

- Checkout workflow automation
- API testing
- Cross-browser testing
- Additional negative test cases
- CI execution validation and reporting

## Author

**Juan Giraldo**

Software Quality Assurance graduate | Junior QA Automation

[LinkedIn](https://www.linkedin.com/in/juan-giraldo-ca)