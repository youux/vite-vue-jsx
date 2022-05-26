module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'comma-dangle': 'off',
    quotes: 'off',
    indent: ['error', 2, { SwitchCase: 1 }], // 使用两个空格作缩进
    'keyword-spacing': 2 // 关键字前后的空格
  }
}
