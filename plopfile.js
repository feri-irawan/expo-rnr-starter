import fs from 'fs';

const features = fs.readdirSync('src/features');

const featurePrompt = [
  {
    type: 'confirm',
    name: 'isExistFeature',
    message: 'Want to create in existing feature?',
    default: true,
  },
  {
    type: 'input',
    name: 'feature',
    message: 'Please enter feature name:',
    when: (answers) => answers.isExistFeature === false,
  },
  {
    type: 'list',
    name: 'feature',
    message: 'Please select feature:',
    choices: features,
    when: (answers) => answers.isExistFeature === true,
  },
];

/**
 * Generators
 * @param {import('plop').NodePlopAPI} plop
 */
export default function (plop) {
  // Screen
  plop.setGenerator('screen', {
    description: 'Create a new screen',
    prompts: [
      ...featurePrompt,
      {
        type: 'input',
        name: 'name',
        message: 'Please enter screen name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase feature}}/screens/{{pascalCase name}}Screen.tsx',
        templateFile: 'templates/screen.tsx.hbs',
      },
    ],
  });

  // Component
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      ...featurePrompt,
      {
        type: 'input',
        name: 'name',
        message: 'Please enter component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase feature}}/components/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
    ],
  });

  // Service
  plop.setGenerator('service', {
    description: 'Create a new service',
    prompts: [
      ...featurePrompt,
      {
        type: 'input',
        name: 'name',
        message: 'Please enter service name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase feature}}/api/services/{{kebabCase name}}.service.ts',
        templateFile: 'templates/api/service.ts.hbs',
      },
    ],
  });

  // Contract
  plop.setGenerator('contract', {
    description: 'Create a new api contract',
    prompts: [
      ...featurePrompt,
      {
        type: 'input',
        name: 'name',
        message: 'Please enter contract name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase feature}}/api/contracts/{{kebabCase name}}.contract.ts',
        templateFile: 'templates/api/contract.ts.hbs',
      },
    ],
  });

  // Mock
  plop.setGenerator('mock', {
    description: 'Create a new mock',
    prompts: [
      ...featurePrompt,
      {
        type: 'input',
        name: 'name',
        message: 'Please enter mock name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase feature}}/api/mocks/{{kebabCase name}}.mock.ts',
        templateFile: 'templates/api/mock.ts.hbs',
      },
    ],
  });

  // Store
  plop.setGenerator('store', {
    description: 'Create a new store',
    prompts: [
      ...featurePrompt,
      {
        type: 'input',
        name: 'name',
        message: 'Please enter store name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase feature}}/stores/use{{pascalCase name}}Store.ts',
        templateFile: 'templates/store.ts.hbs',
      },
    ],
  });

  // Query
  plop.setGenerator('query', {
    description: 'Create a new query',
    prompts: [
      ...featurePrompt,
      {
        type: 'input',
        name: 'name',
        message: 'Please enter query name:',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Please select query type:',
        choices: ['basic', 'infinite'],
      },
    ],
    actions: (answers) => {
      const actions = [];

      if (answers?.type === 'basic') {
        actions.push({
          type: 'add',
          path: 'src/features/{{kebabCase feature}}/queries/use{{pascalCase name}}Query.ts',
          templateFile: 'templates/query.ts.hbs',
        });
      }

      if (answers?.type === 'infinite') {
        actions.push({
          type: 'add',
          path: 'src/features/{{kebabCase feature}}/queries/use{{pascalCase name}}InfiniteQuery.ts',
          templateFile: 'templates/query-infinite.ts.hbs',
        });
      }

      return actions;
    },
  });

  // Mutation
  plop.setGenerator('mutation', {
    description: 'Create a new mutation',
    prompts: [
      ...featurePrompt,
      {
        type: 'input',
        name: 'name',
        message: 'Please enter mutation name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase feature}}/mutations/use{{pascalCase name}}Mutation.ts',
        templateFile: 'templates/mutation.ts.hbs',
      },
    ],
  });

  // Hooks
  plop.setGenerator('hook', {
    description: 'Create a new hook',
    prompts: [
      ...featurePrompt,
      {
        type: 'list',
        name: 'type',
        message: 'Please select hook type:',
        choices: ['basic', 'form'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Please enter hook name:',
      },
    ],
    actions: (answers) => {
      const actions = [];

      if (answers?.type === 'basic') {
        actions.push({
          type: 'add',
          path: 'src/features/{{kebabCase feature}}/hooks/use{{pascalCase name}}.ts',
          templateFile: 'templates/hook.ts.hbs',
        });
      }

      if (answers?.type === 'form') {
        actions.push({
          type: 'add',
          path: 'src/features/{{kebabCase feature}}/hooks/use{{pascalCase name}}Form.ts',
          templateFile: 'templates/hook-form.ts.hbs',
        });
      }

      return actions;
    },
  });
}
