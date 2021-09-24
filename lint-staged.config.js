module.exports = {
  '*': ['prettier --check'],
  'src/**/*.{ts,tsx}': ['yarn test --passWithNoTests', () => 'yarn typecheck', 'yarn lint:check'],
};
