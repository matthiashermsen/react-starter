import { test, expect } from '@playwright/test';

test("has title 'React Starter'", async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("React Starter");
});