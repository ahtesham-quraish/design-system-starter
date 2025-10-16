import React from 'react';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import '@theme/themes.scss';

// 👇 Apply dark/light data-theme attribute to <html>
const withThemeProvider = (Story, context) => {
  const isDark = useDarkMode();
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  return <Story {...context} />;
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true },
  darkMode: {
    dark: { ...themes.dark, appBg: '#0f172a', appContentBg: '#1e293b' },
    light: { ...themes.normal, appBg: '#ffffff', appContentBg: '#f8fafc' },
    stylePreview: true,
  },
};
