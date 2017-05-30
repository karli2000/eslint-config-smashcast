module.exports = {
    extends: [
        'airbnb',
    ],
    parser: 'babel-eslint',
    plugins: [
        'react',
    ],
    env: {
        browser: true,
    },
    ecmaFeatures: {
        forOf: true,
        jsx: true,
        es6: true,
    },
    rules: {
        'max-len': 0,
        'indent': [2, 4, {
            SwitchCase: 1,
        }],
        'space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never',
        }],
        'curly': ['error', 'all'],
        'id-length': 0,
        'no-param-reassign': 0,
        'arrow-parens': ['error', 'as-needed'],
        'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
        'no-use-before-define': ['error', { functions: false, classes: true }],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'quote-props': ['error', 'consistent-as-needed'],
        'class-methods-use-this': 0,
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
    },
};
