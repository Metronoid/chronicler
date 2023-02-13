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
        name: 'Guide',
        slug: 'character/guide',
        description: 'Learn how to create a character',
      },
      {
        name: 'Attributes and Skills',
        slug: 'character/skills/mental',
        description: 'Learn what to use your attributes and skills for',
      },
      {
        name: 'Merits',
        slug: 'character/merits',
        description: 'Look through the available merits',
      },
      {
        name: 'Experience',
        slug: 'character/experience',
        description: 'Tools for keeping track of experience',
      },
    ],
  },
  {
    name: 'Basic Systems',
    items: [
      {
        name: 'Rolling Dice',
        slug: 'systems/dice',
        description: 'Tools for taking actions and rolling dice',
      },
      {
        name: 'Conditions',
        slug: 'systems/conditions',
        description: 'Tools for keeping track of conditions',
      },
      {
        name: 'Violence',
        slug: 'systems/violence',
        description: 'Tools for resolving combat',
      },
      {
        name: 'Equipment',
        slug: 'systems/equipment',
        description: 'Find out how Equipment works and which are available',
      },
    ],
  },
  {
    name: 'Advanced Systems',
    items: [
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
        name: 'Vehicles',
        slug: 'systems/vehicles',
        description: 'Find out how Vehicles work and which are available',
      },
      {
        name: 'Chases',
        slug: 'systems/chases',
        description: 'Tools for resolving chases',
      },
    ],
  },
];
