/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

import { Platform } from 'react-native';

const Palette = {
  gold: '#FFD700',
  goldDim: '#B8860B',
  deepIndigo: '#1A1A2E',
  midnightBlue: '#16213E',
  neonPurple: '#B829EA',
  neonGreen: '#00FF9D',
  neonRed: '#FF0055',
  glassWhite: 'rgba(255, 255, 255, 0.1)',
  glassBlack: 'rgba(0, 0, 0, 0.6)',
  textWhite: '#FFFFFF',
  textGray: '#A1A1AA',
};

export const Colors = {
  light: {
    // We are forcing Dark Mode for this app mostly, but keeping light mapping just in case
    text: '#11181C',
    background: '#fff',
    tint: Palette.gold,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: Palette.gold,
    primary: Palette.deepIndigo, 
  },
  dark: {
    text: Palette.textWhite,
    textDim: Palette.textGray,
    background: Palette.deepIndigo,
    tint: Palette.gold,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: Palette.gold,
    card: Palette.glassBlack,
    border: 'rgba(255, 215, 0, 0.2)', // Subtle Gold Border
    success: Palette.neonGreen,
    danger: Palette.neonRed,
    warning: '#FFCC00',
    info: '#29B6F6',
    gradients: {
        background: [Palette.deepIndigo, '#0F0F1A'], // Deep vertical gradient
        card: ['rgba(30, 30, 40, 0.7)', 'rgba(20, 20, 30, 0.8)'],
        gold: [Palette.gold, Palette.goldDim],
    }
  },
};

export const Fonts = Platform.select({
  ios: {
    sku: 'System', 
    sans: 'System', 
    serif: 'System', 
    mono: 'System',
  },
  default: {
    sku: 'sans-serif',
    sans: 'sans-serif',
    serif: 'serif', 
    mono: 'monospace',
  },
});
