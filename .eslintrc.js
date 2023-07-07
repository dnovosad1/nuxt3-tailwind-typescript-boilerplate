module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['@antfu'],
  rules: {
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'no-console': 'error',
    '@typescript-eslint/indent': ['error', 2],
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
  },

}
