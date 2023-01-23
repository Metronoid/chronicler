import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import glob from 'fast-glob';
import { promises as fs } from "fs";
import { MdxContent } from './mdx-content';

async function getMerits() {
  const merits: MDXRemoteSerializeResult[] = [];
  const meritFiles = glob.sync(`content/merits/mental/*.(mdx|md)`, {onlyFiles: true});
  for (const filepath of meritFiles) {
    const raw = await fs.readFile(filepath, "utf-8");
    const serialized = await serialize(raw, {
      parseFrontmatter: true,
      mdxOptions: {
        format: 'mdx'
      }
    });
    merits.push(serialized)
  }
  return merits;
}

export default async function Page({
}: {
}) {
  const merits: MDXRemoteSerializeResult[] = await getMerits()
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Mental Merits
      </h1>
      {merits.map((x, i) => 
        <div className='group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800' key={i}><MdxContent source={x}/></div>)}
    </div>
  );
}
