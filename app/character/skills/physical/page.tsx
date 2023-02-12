import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MdxContent } from '#/ui/MdxContent';
import { getMDX } from '#/lib/getMdx';

export default async function Page({
}: {
}) {
  const attributes: MDXRemoteSerializeResult[] = await getMDX(`content/character/attributes/physical/*.(mdx|md)`)
  const skills: MDXRemoteSerializeResult[] = await getMDX(`content/character/skills/physical/*.(mdx|md)`)
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Physical Attributes
      </h1>
      {attributes.map((x, i) => 
        <div className='group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800' key={i}><MdxContent source={x}/></div>)}
      <h1 className="text-xl font-medium text-gray-400/80">
        Physical Skills
      </h1>
      {skills.map((x, i) => 
        <div className='group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800' key={i}><MdxContent source={x}/></div>)}
    </div>
  );
}
