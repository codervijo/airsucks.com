// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Pure-data + engine tests; no DOM needed (jsdom isn't installed).
    environment: 'node',
    globals: true,
  },
});
