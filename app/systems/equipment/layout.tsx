import { TabGroup } from '#/ui/TabGroup';
import React from 'react';
import lodash from 'lodash'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = ['crafting', 'ranged-weapons', 'melee-weapons', 'armor', 'mental-tools', 'physical-tools', 'social-tools', 'services'];
  return (
    <div className="space-y-9">
      <TabGroup
      path="/systems/equipment"
      items={[
        {
          text: 'Docs',
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
