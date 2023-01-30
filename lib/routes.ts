export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const routes: { name: string; items: Item[] }[] = [
  // {
  //   name: 'Characters',
  //   items: [
  //     // {
  //     //   name: 'Create a Character',
  //     //   slug: 'create-character',
  //     //   description: 'Create a character for your chronicle',
  //     // },
  //     // {
  //     //   name: 'Saved Characters',
  //     //   slug: 'saved-characters',
  //     //   description: "Manage the characters you've saved",
  //     // },
  //   ],
  // },
  {
    name: 'Character Creation',
    items: [
      {
        name: 'Character Creation',
        slug: 'character/creation',
        description: 'Learn how to create a character',
      },
      {
        name: 'Anchors',
        slug: 'character/anchors',
        description: 'Learn about anchors',
      },
      {
        name: 'Aspirations',
        slug: 'character/aspirations',
        description: 'Learn about aspirations',
      },
      {
        name: 'Attributes',
        slug: 'character/attributes',
        description: 'Look through the available attributes',
      },
      {
        name: 'Skills',
        slug: 'character/skills',
        description: 'Look through the available skills',
      },
      {
        name: 'Merits',
        slug: 'character/merits',
        description: 'Look through the available merits',
      },
    ],
  },
  {
    name: 'Systems',
    items: [
      {
        name: 'Rolling Dice',
        slug: 'systems/dice',
        description: 'Tools for taking actions and rolling dice',
      },
      {
        name: 'Integrity',
        slug: 'systems/integrity',
        description: 'Tools for handling your integrity',
      },
      {
        name: 'Conditions',
        slug: 'systems/conditions',
        description: 'Tools for keeping track of conditions',
      },
      {
        name: 'Experience',
        slug: 'systems/experience',
        description: 'Tools for keeping track of experience',
      },
      {
        name: 'Investigation',
        slug: 'systems/investigation',
        description: 'Tools for finding clues',
      },
      {
        name: 'Social Maneuvering',
        slug: 'systems/social',
        description: 'Tools for maneuvering the social combat',
      },
      {
        name: 'Chases',
        slug: 'systems/chases',
        description: 'Tools for resolving chases',
      },
      {
        name: 'Tilts',
        slug: 'systems/tilts',
        description: 'Look through the available tilts',
      },
      {
        name: 'Violence',
        slug: 'systems/violence',
        description: 'Tools for resolving combat',
      },
      {
        name: 'Sources of Harm',
        slug: 'systems/sources-of-harm',
        description: 'Find out the different sources of damage',
      },
      {
        name: 'Vehicles',
        slug: 'systems/vehicles',
        description: 'Find out how Vehicles work and which are available',
      },
      {
        name: 'Equipment',
        slug: 'systems/equipment',
        description: 'Find out how Equipment works and which are available',
      },
    ],
  },
  // {
  //   name: 'Rolling Dice',
  //   items: [
  //     {
  //       name: 'loading.js',
  //       slug: 'loading',
  //       description:
  //         'Create meaningful loading UI for specific parts of an app',
  //     },
  //     {
  //       name: 'error.js',
  //       slug: 'error-handling',
  //       description: 'Create error UI for specific parts of an app',
  //     },
  //     {
  //       name: 'head.js',
  //       slug: 'head',
  //       description: 'Configure the <head> tag of a route segment',
  //     },
  //   ],
  // },
  // {
  //   name: 'Data Fetching',
  //   items: [
  //     {
  //       name: 'Static-Site Generation',
  //       slug: 'ssg',
  //       description: 'Generate static pages',
  //     },
  //     {
  //       name: 'Server-Side Rendering',
  //       slug: 'ssr',
  //       description: 'Server-render pages',
  //     },
  //     {
  //       name: 'Incremental Static Regeneration',
  //       slug: 'isr',
  //       description: 'Get the best of both worlds between static & dynamic',
  //     },
  //   ],
  // },
  // {
  //   name: 'Components',
  //   items: [
  //     // TODO: Re-add this page once hooks have been updated.
  //     // {
  //     //   name: 'Hooks',
  //     //   slug: 'hooks',
  //     //   description:
  //     //     'Preview the hooks available for Client and Server Components',
  //     // },
  //     {
  //       name: 'Client Context',
  //       slug: 'context',
  //       description:
  //         'Pass context between Client Components that cross Server/Client Component boundary',
  //     },
  //   ],
  // },
  // {
  //   name: 'Styling',
  //   items: [
  //     {
  //       name: 'CSS and CSS-in-JS',
  //       slug: 'styling',
  //       description: 'Preview the supported styling solutions',
  //     },
  //   ],
  // },
];
