module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'function-rules/header-max-length': [
      2, // level: error
      'always',
      async (parsed) => {
        const branch = require('branch-name');
        const branchNumber = await branch
          .get()
          .then((name) => name.match(/\d+/));
        const regex = new RegExp(`^HB-${branchNumber}: ([a-zA-Z-& ]{1,})$`);

        if (regex.test(parsed.header)) {
          return [true];
        }

        return [
          false,
          'The name of the commit must look according to the formula: HB-<ticket-number>: <message>.',
        ];
      },
    ],
    'header-max-length': [0], // level: disabled
    'subject-empty': [0, 'never'],
    'type-empty': [0, 'never'],
    'type-enum': [0, 'never'],
  },
};
