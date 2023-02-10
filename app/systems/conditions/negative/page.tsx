import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MdxContent } from '#/ui/MdxContent';
import { getMDX } from '#/lib/getMdx';

export default async function Page({
}: {
}) {
  const merits: MDXRemoteSerializeResult[] = await getMDX(`content/systems/conditions/negative/*.(mdx|md)`)
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Negative Conditions
      </h1>
      {merits.map((x, i) => 
        <div className='group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800' key={i}><MdxContent source={x}/></div>)}
    </div>
  );
}
