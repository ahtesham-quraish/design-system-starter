import path from 'path';
import { mergeConfig } from 'vite';

export default {
  stories: [
    '../../../packages/ui/src/**/*.stories.@(ts|tsx|js|jsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  core: { disableTelemetry: true },
  docs: { autodocs: 'tag' },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../../packages/ui/src'),
          '@theme': path.resolve(__dirname, '../../../packages/ui/src/theme'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ['legacy-js-api'], // optional, avoid sass warnings
          },
        },
      },
      optimizeDeps: {
        include: ['react', 'react-dom'],
      },
      server: {
        fs: {
          // 👇 This is the key fix: explicitly allow Storybook to serve from root
          allow: [
            path.resolve(__dirname, '../../../packages'),
            path.resolve(__dirname, '../../..'),
          ],
        },
      },
      root: path.resolve(__dirname), // 👈 ensure Storybook knows its true root
    });
  },
};
