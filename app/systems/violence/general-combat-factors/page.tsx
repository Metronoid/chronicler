import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MdxContent } from '#/ui/MdxContent';
import { getMDX } from '#/lib/getMdx';

export default async function Page({
}: {
}) {
  const mdx: MDXRemoteSerializeResult[] = await getMDX(`content/systems/violence/general combat factors/*.(mdx|md)`)
  return (
    <div className="space-y-4">
      {mdx.length > 0 && <MdxContent source={mdx[0]}/>}
    </div>
  );
}
