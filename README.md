# Citiwatts E2E Tutorial 🎭

Starter repository for learning end-to-end testing on the Citiwatts platform using [Playwright](https://playwright.dev/).

---

## Content

```
├── tests/                      # Your workspace — write and run your tests here
├── tests-examples/             # Examples provided by playwright (not related to citiwatts)
├── playwright.config.js        # Playwright configuration (browsers, base URL, etc.)
└── Playwright_Tutorial_e2e-V2026.pdf   # Full tutorial guide
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

---

## Getting started

**1. Clone the repository**
```bash
git clone https://github.com/zornyy/citiwatts-e2e-tutorial.git
cd citiwatts-e2e-tutorial
```

**2. Install dependencies**
```bash
npm install
```

**3. Install Playwright browsers**
```bash
npx playwright install
```

---

## Running the tests

Run all tests:
```bash
npx playwright test
```

Run tests with the interactive UI mode (recommended for learning):
```bash
npx playwright test --ui
```

Run a specific test file:
```bash
npx playwright test tests/your-test-file.spec.js
```

View the HTML report after a test run:
```bash
npx playwright show-report
```

---

## Useful Playwright commands

| Command | Description |
|---|---|
| `npx playwright test` | Run all tests headlessly |
| `npx playwright test --ui` | Open the interactive test runner |
| `npx playwright test --headed` | Run tests with the browser visible |
| `npx playwright test --debug` | Step through tests with the debugger |
| `npx playwright codegen <url>` | Record a test by clicking around in the browser |

---

## Resources

- 📄 [Playwright Documentation](https://playwright.dev/docs/intro)
- 🔍 [Playwright API reference](https://playwright.dev/docs/api/class-playwright)