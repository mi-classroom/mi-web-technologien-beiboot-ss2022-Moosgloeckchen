module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'react/no-unknown-property': ['off'],
        'react/prop-types': ['off']
    }
};