"use client"; // This is required!

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

export const Card = (props: React.HTMLProps<HTMLDivElement>) => (
    <div
      className='group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800'
      {...props}
    />
  )

/** Place your custom MDX components here */
const MdxComponents = {
  a: (props: React.HTMLProps<HTMLHeadingElement>) => {
    const href = props.href
    if(href){
      return <Link href={href}>{props.children}</Link>
    }
    return <div {...props}/>
  },
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-xl font-medium" {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-xl font-medium" {...props} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className="text-l font-medium" {...props} />
  ),
  /** Card component */
  Card: Card,
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={MdxComponents}/>;
}
