/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve("@typescript-eslint/parser"),
    extraFileExtensions: [".vue"]
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "prettier"
  ],

  plugins: ["@typescript-eslint", "vue", "@babel", "prettier", "import"],

  globals: {
    ga: "readonly",
    cordova: "readonly",
    __statics: "readonly",
    __QUASAR_SSR__: "readonly",
    __QUASAR_SSR_SERVER__: "readonly",
    __QUASAR_SSR_CLIENT__: "readonly",
    __QUASAR_SSR_PWA__: "readonly",
    process: "readonly",
    Capacitor: "readonly",
    chrome: "readonly"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"]
      }
    }
  },
  rules: {
    "prettier/prettier": "error",

    "vue/no-mutating-props": "error",
    "vue/multi-word-component-names": "off",

    "vue/no-deprecated-scope-attribute": "error",
    "vue/no-deprecated-slot-attribute": "error",
    "vue/no-deprecated-slot-scope-attribute": "error",

    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",

    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as"
      }
    ],

    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-var-requires": "off",

    // enforce the consistent use of the radix argument when using `parseInt()`
    radix: "error",

    // enforce consistent brace style for all control statements
    curly: ["error", "all"],

    // require use of === and !==
    eqeqeq: ["warn", "always"],

    // disallow declaring the same variable more than once
    "no-redeclare": ["error", { builtinGlobals: false }],

    // disallow use of optional chaining in contexts where the `undefined` value is not allowed
    "no-unsafe-optional-chaining": "error",

    // require or disallow Yoda conditions
    yoda: ["error", "never"],

    // require using Error objects as Promise rejection reasons
    "prefer-promise-reject-errors": "error",

    // suggest using const declaration for variables that are never reassigned after declared
    "prefer-const": ["error", { destructuring: "all" }],

    // require destructuring from arrays and/or objects
    // "prefer-destructuring": "warn",

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": "error",

    // suggest using the rest parameters instead of arguments
    "prefer-rest-params": "error",

    // suggest using the spread operator instead of .apply()
    "prefer-spread": "error",

    // enforce return statements in callbacks of array’s methods
    "array-callback-return": "error",

    // encourage use of dot notation whenever possible
    "dot-notation": ["error", { allowKeywords: true }],

    // specify the maximum cyclomatic complexity allowed in a program
    complexity: ["error", 50],

    // disallow unnecessary function binding
    "no-extra-bind": "error",

    // disallow unnecessary labels
    "no-extra-label": "error",

    // disallow adding to native types
    "no-extend-native": "error",

    // disallow assignments to native objects or read-only global variables
    "no-global-assign": "error",

    // disallow var and named functions in global scope
    "no-implicit-globals": "error",

    // disallow use of eval()-like methods
    "no-implied-eval": "error",

    // disable default no-invalid-this rule in favour of babel version
    // disallow this keywords outside of classes or class-like objects, allows this in class properties
    "no-invalid-this": "off",
    "@babel/no-invalid-this": "error",

    // disallow unnecessary nested blocks
    "no-lone-blocks": "error",

    // disallow use of assignment in return statement
    "no-return-assign": "error",

    // disallow unnecessary return await
    "no-return-await": "error",

    // disallow use of the comma operator
    "no-sequences": "error",

    // disallow usage of expressions in statement position
    "no-unused-expressions": "off",
    "@babel/no-unused-expressions": "error",

    // disallow unnecessary .call() and .apply()
    "no-useless-call": "error",

    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": "error",

    // disallow async functions which have no await expression
    "require-await": "warn",

    // require effective use of strict mode directives
    strict: ["error", "global"],

    // disallow declaration of variables already declared in the outer scope
    "no-shadow": "error",

    // disallow declaration of variables that are not used in the code
    "no-unused-vars": "off",

    // specify the maximum depth that blocks can be nested
    "max-depth": ["error", 4],

    // enforce a maximum file length
    // "max-lines": ["warn", 1000],

    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": ["error", 3],

    // specify the number of parameters that can be used in the function declaration
    "max-params": ["error", 4],

    // specify the maximum number of statement allowed in a function
    "max-statements": ["error", 50],

    // specify the maximum number of statements allowed per line
    "max-statements-per-line": ["error", { max: 1 }],

    // require a capital letter for constructors
    "new-cap": "off",
    "@babel/new-cap": "off",

    // disallow nested ternary expressions
    "no-nested-ternary": "error",

    // disallow duplicate module imports
    "no-duplicate-imports": "error",

    // disallow unnecessary computed property keys in object literals
    "no-useless-computed-key": "error",

    // disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": "error",

    // require let or const instead of var
    "no-var": "error",

    // require method and property shorthand syntax for object literals
    "object-shorthand": ["error", "always"],

    // suggest using template literals instead of strings concatenation
    "prefer-template": "error",

    "no-console": "error",
    "no-debugger": "error",

    "import/extensions": [
      1,
      {
        vue: "always",
        json: "always",
        scss: "always",
        md: "always",
        ts: "never"
      }
    ],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArray: true,
        allowArrowFunction: true,
        allowAnonymousClass: false,
        allowAnonymousFunction: true,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true
      }
    ],
    "import/no-unresolved": 2,

    "vue/custom-event-name-casing": "off"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true
      },
      extends: ["plugin:jest/all"],
      rules: {
        "@babel/new-cap": 0,
        "max-statements": 0,
        "import/first": 0
      }
    },
    {
      files: ["**/*.stories.js"],
      rules: {
        "no-console": 0
      }
    },
    // @typescript-eslint has it's own TS specific versions of these rules
    {
      files: ["**/*.ts"],
      rules: {
        "no-undef": "off",
        "no-shadow": "off"
      }
    }
  ]
};
