module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: ['variable', 'function'],
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: ['class', 'interface'],
        format: ['PascalCase']
      },
      {
        selector: ['enumMember'],
        format: ['UPPER_CASE'],
        leadingUnderscore: 'allow'
      }
    ],
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    'vue/component-definition-name-casing': ['warn', 'PascalCase'],
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/prop-name-casing': 'warn',
    'vue/custom-event-name-casing': 'warn',
    eqeqeq: 'off',
    'vue/eqeqeq': ['error', 'always'],
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn'
  }
}
