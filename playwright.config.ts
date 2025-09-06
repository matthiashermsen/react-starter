import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./test/e2e",
	testMatch: "**/*.test.{ts,tsx}",
	webServer: {
		command: "npm run dev",
		port: 5173, // Default Vite Port
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},
	],
});
