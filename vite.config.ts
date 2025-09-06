/// <reference types="vitest" />
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { version } from "./package.json";

export default defineConfig({
	plugins: [tanstackRouter(), react()],
	base: "./",
	define: {
		__APP_VERSION__: JSON.stringify(version),
	},
	test: {
		environment: "jsdom",
		setupFiles: ["./test/unit/setup.ts"],
		include: ['./test/unit/**/*.test.{ts,tsx}']
	},
});
