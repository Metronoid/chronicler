import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import glob from 'fast-glob';
import { promises as fs } from 'fs';

export async function getMDX(pattern: string) {
  const mdx: MDXRemoteSerializeResult[] = [];
  const meritFiles = glob.sync(pattern, {
    onlyFiles: true,
  });
  for (const filepath of meritFiles) {
    const raw = await fs.readFile(filepath, 'utf-8');
    const serialized = await serialize(raw, {
      parseFrontmatter: true,
      mdxOptions: {
        format: 'mdx',
      },
    });
    mdx.push(serialized);
  }
  return mdx;
}
