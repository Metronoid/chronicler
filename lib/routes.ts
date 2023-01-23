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
    name: 'Database',
    items: [
      {
        name: 'Merits',
        slug: 'merits',
        description: 'Look through the available merits',
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
