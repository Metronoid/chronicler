import { TabGroup } from '#/ui/TabGroup';
import React from 'react';
import lodash from 'lodash'
import glob from 'fast-glob';

function getMeritCategories() {
  const cats: string[] = [];
  const categories = glob.sync('content/merits/**', {onlyDirectories: true});
  for (const category of categories) {
    const files = glob.sync(`${category}/*.(mdx|md)`);
    if(files.length > 0){
      const spl = category.split('/');
      cats.push(spl[spl.length-1])
    }
  }
  return cats;
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = getMeritCategories();
  return (
    <div className="space-y-9">
      <TabGroup
      path="/merits"
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
