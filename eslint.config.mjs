import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: ['.next/**', 'build/**', 'dist/**', 'out/**'],
  },
];

export default config;
