import { MDXRemote } from 'next-mdx-remote/rsc'
import Markdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

export default async function RfpSection({heading, content}: {heading: string; content: string})
{
  let newCont = content?.replaceAll("\n", "\n\n")
  newCont = newCont?.replaceAll("\n\n\n\n", "\n\n")
  newCont = newCont?.replaceAll("\n\n", "\n\n &nbsp; ")
  newCont = newCont?.replaceAll("###", "##")
  return (      
    <div className="border-2 border-blue-400">        
        <div className="pl-2 capitalize strong bg-blue-200 text-gray-900 font-bold text-xl space-y-10">{heading}</div>
        {/* <div className="bg-slate-200 mb-4"><MDXRemote source={newCont} /></div>           */}
        <Markdown remarkPlugins={[remarkGfm, rehypeHighlight, rehypeReact, remarkParse, remarkRehype]} className="bg-slate-50">{newCont}</Markdown>
    </div>
  );
}