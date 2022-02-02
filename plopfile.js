module.exports = function (plop) {
  const transformName = (str) => {
    return str.toLowerCase().replace(/ /g, '-')
  }

  // create your generators here
  plop.setGenerator('example', {
    description: 'new example in repo',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Example name: ',
      },
      {
        type: 'list',
        name: 'exampleScopeFolder',
        message: 'Scope (Example folder): ',
        choices: [
          { name: 'Edge Functions', value: 'edge-functions' },
          { name: 'Solutions', value: 'solutions' },
        ],
      },
      {
        type: 'checkbox',
        name: 'options',
        message: 'What options do you like?',
        choices: [
          { name: 'Next.js Middleware Function', value: 'middleware' },
          { name: 'Tailwind CSS', value: 'tailwind', checked: true },
          {
            name: 'Vercel Serverless Functions: Hello world',
            value: 'vercel-api',
          },
          {
            name: 'Next.js API Routes - Serverless Functions: Hello world',
            value: 'next-api-pages',
            checked: true,
          },
          {
            name: 'Vercel.json file',
            value: 'vercel.json',
          },
        ],
      },
    ],
    actions: (data) => {
      const plopExampleName = transformName(data.name)
      const plopPath = `${data.exampleScopeFolder}/${plopExampleName}`

      const filesToAlwaysCopyOver = [
        'README.md',
        'tsconfig.json',
        '.eslintrc.json',
        'next.config.js',
        '.gitignore',
        'next-env.d.ts',
        'package.json',
        'pages/index.tsx',
        'pages/_app.tsx',
      ]

      return [
        ...filesToAlwaysCopyOver.map((file) => {
          return {
            type: 'add',
            path: `{{exampleScopeFolder}}/${plopExampleName}/${file}`,
            templateFile: `plop-templates/example/${file}`,
          }
        }),
        // README.md
        {
          type: 'modify',
          path: `{{exampleScopeFolder}}/${plopExampleName}/README.md`,
          pattern: /(-- PLOP TITLE HERE --)/gi,
          template: `${data.name}`,
        },
        {
          type: 'modify',
          path: `{{exampleScopeFolder}}/${plopExampleName}/README.md`,
          pattern: /(-- PLOP EXAMPLE NAME HERE --)/gi,
          template: `${plopExampleName}`,
        },
        {
          type: 'modify',
          path: `{{exampleScopeFolder}}/${plopExampleName}/README.md`,
          pattern: /(-- PLOP PATH HERE --)/gi,
          template: `${plopPath}`,
        },
        // package.json
        {
          type: 'modify',
          path: `{{exampleScopeFolder}}/${plopExampleName}/package.json`,
          pattern: /(-- PLOP EXAMPLE NAME HERE --)/gi,
          template: `${plopExampleName}`,
        },
        // _app.tsx
        {
          type: 'modify',
          path: `{{exampleScopeFolder}}/${plopExampleName}/_app.tsx`,
          pattern: /(-- PLOP TITLE HERE --)/gi,
          template: `${data.name}`,
        },
        {
          type: 'modify',
          path: `{{exampleScopeFolder}}/${plopExampleName}/_app.tsx`,
          pattern: /(-- PLOP PATH HERE --)/gi,
          template: `${plopPath}`,
        },
        // pages/index.tsx
        {
          type: 'modify',
          path: `{{exampleScopeFolder}}/${plopExampleName}/pages/index.tsx`,
          pattern: /(-- PLOP TITLE HERE --)/gi,
          template: `${data.name}`,
        },
      ]
    },
  })
}
