module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': ['@typescript-eslint/eslint-plugin'],
    'rules': {
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/indent': [
            'error',
            2
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            { varsIgnorePattern: '^_'}
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
            }
        ]
    }
};
