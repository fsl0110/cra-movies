module.exports = {
  '*': ['prettier --write'],
  'src/**/*.{ts,tsx}': [
    'yarn test --passWithNoTests',
    () => 'yarn typecheck',
    'yarn lint:check',
  ],
};
