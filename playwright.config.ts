import { defineConfig, devices } from "@playwright/test";
import { PlaywrightTestConfig } from "@playwright/test";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testDir: "./tests",
  timeout: 10 * 1000,
  expect: {
    timeout: 2000,
  },

  /* Run tests in files in parallel */
  fullyParallel: true,

  reporter: [
    ["line"],
    [
      "allure-playwright",
      {
        outputDir: "allure-results",
        categories: [
          {
            name: "Outdated tests",
            messageRegex: ".*FileNotFound.*",
          },
        ],
        environmentInfo: {
          framework: "playwright",
        },
      },
    ],

  ],
  use: {

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
    headless: false,
  },

  /* Configure projects for major browsers */


  
  
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "webkit",
     use: {
        ...devices["Desktop Safari"],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "Microsoft Edge",
      use: { ...devices["Desktop Edge"], channel: "msedge" },
    },
    {
      name: 'Google Chrome',
       use: { ...devices['Desktop Chrome'], channel: 'chrome' },
     },
  ],
 });
