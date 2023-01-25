import { TabGroup } from '#/ui/TabGroup';
import lodash from 'lodash';
import React from 'react';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = ['examples'];
  return (
    <div className="space-y-9">
      <TabGroup
      path="/systems/social/"
      items={[
        {
          text: 'Social Maneuvering',
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
