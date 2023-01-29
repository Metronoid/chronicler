import { TabGroup } from '#/ui/TabGroup';
import lodash from 'lodash';
import React from 'react';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = ['down-and-dirty-combat'];
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
