import { TabGroup } from '#/ui/TabGroup';
import lodash from 'lodash';
import React from 'react';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = ['down-and-dirty-combat', 'willpower', 'intent', 'initiative', 'attack', 'defense', 'objects', 'unarmed-combat', 
  'ranged-combat', 'general-combat-factors', 'weapons-and-armor', 'injury-and-healing', 'sources-of-harm'];
  return (
    <div className="space-y-9">
      <TabGroup
      path="/systems/violence/"
      items={[
        {
          text: 'Violence',
        },
        ...categories.map((x) => ({
          text: lodash.startCase(`${x}`),
          slug: x.toLowerCase(),
        })),
      ]}/>
      <div>{children}</div>
    </div>
  );
}
