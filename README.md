# Identifying Duplicate Elements with Playwright

## Overview
This project demonstrates how to identify and interact with duplicate elements on a webpage using [Playwright](https://playwright.dev/), a powerful automation tool for web testing. You will learn how to handle elements with the same **ID** or **class names** using **XPath**, **CSS Selectors**, and Playwright’s locator methods.

## What You Will Learn
- How to use Chrome DevTools to identify duplicate elements
- The differences between **XPath** and **CSS Selectors** when selecting elements
- How to use Playwright’s `.locator()` method to find and interact with elements
- Selecting specific elements from multiple matches using `.nth(index)`
- Writing a test case to count and interact with duplicate elements

## Prerequisites
Before running the examples, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Playwright](https://playwright.dev/) 
- Basic knowledge of TypeScript or JavaScript
- Chrome DevTools for inspecting elements

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/playwright-duplicate-elements.git
   cd playwright-duplicate-elements
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Running the Test
To execute the test case, run the following command:
```sh
npx playwright test
```

## File Structure
```
├── tests/
│   ├── duplicateElements.spec.ts  # Test file for handling duplicate elements
├── package.json
├── playwright.config.ts  # Playwright configuration
└── README.md
```

## Key Playwright Methods Used
- `.locator(selector)`: Find elements using CSS or XPath
- `.nth(index)`: Select a specific element from a list of matching elements
- `.count()`: Count the number of matched elements
- `.click()`: Interact with a specific element

## Example Code
Here's a sample Playwright test case for selecting duplicate elements:
```ts
import { test, expect } from '@playwright/test';

test('Identify and interact with duplicate elements', async ({ page }) => {
  await page.goto('https://example.com');
  
  // Select duplicate elements using CSS selector
  const elements = page.locator('.duplicate-class');
  
  // Count the number of matching elements
  const count = await elements.count();
  console.log(`Number of duplicate elements found: ${count}`);
  
  // Interact with a specific duplicate element
  await elements.nth(1).click();
});
```

## Why Use This Project?
- **Beginner-Friendly**: Assumes a basic understanding of TypeScript, Chrome DevTools, XPath, and CSS selectors.
- **Hands-on Learning**: Includes practical examples for real-world test scenarios.
- **Playwright-Focused**: Learn best practices for handling dynamic web pages efficiently.

## Contributing
Feel free to submit issues or pull requests to enhance this project!

## Stay Connected
Subscribe for more Playwright tutorials and test automation tips!

Happy Testing! 🚀
