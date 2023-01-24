import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MdxContent } from '#/ui/MdxContent';
import { getMDX } from '#/lib/getMdx';

export default async function Page({
}: {
}) {
  const mdx: MDXRemoteSerializeResult[] = await getMDX(`content/systems/dice/willpower/*.(mdx|md)`)
  return (
    <div className="space-y-4">
      <MdxContent source={mdx[0]}/>
    </div>
  );
}
