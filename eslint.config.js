const js = require('@eslint/js');

module.exports = [
   js.configs.recommended,
   {
      languageOptions: {
        sourceType: 'commonjs',
        globals: {
          require: 'readonly',
          module: 'writable',
         },
        },
       },
      ];
