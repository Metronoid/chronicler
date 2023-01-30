import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import glob from 'fast-glob';
import { promises as fs } from "fs";
import { MdxContent } from '#/ui/MdxContent';
import { getMDX } from '#/lib/getMdx';

export default async function Page({
}: {
}) {
  const merits: MDXRemoteSerializeResult[] = await getMDX(`content/character/skills/physical/*.(mdx|md)`)
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Physical Skills
      </h1>
      {merits.map((x, i) => 
        <div className='group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800' key={i}><MdxContent source={x}/></div>)}
    </div>
  );
}
