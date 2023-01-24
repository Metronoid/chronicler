import { getMDX } from "#/lib/getMdx";
import { MdxContent } from "#/ui/MdxContent";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export default async function Page({}: {}) {
const merits: MDXRemoteSerializeResult[] = await getMDX(`content/merits/*.(mdx|md)`)
  return (
    <div className="space-y-4">
      <MdxContent source={merits[0]}/>
    </div>
  );
}
