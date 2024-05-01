import { MDXRemote } from 'next-mdx-remote/rsc'
import Markdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { Add, Create, Delete, Update } from '../general/buttons';

export default async function RfpBdderQuestiosSection()
{
  const content = `
  

1. **Are there any existing site investigation data available that we can review during bid?**
    - Get Investigation reports

2. **Is the topographic data available in CAD?**
    - when was the site last surveyed?

3. **Does the owner expect engineer to obtain permits?**
    - If so, what is the owner's expected involvement, how many round of reviews should we assume?
  `
  let newCont = content?.replaceAll("\n", "\n\n")
  newCont = newCont?.replaceAll("\n\n\n\n", "\n\n")
  newCont = newCont?.replaceAll("\n\n", "\n\n &nbsp; ")
  newCont = newCont?.replaceAll("###", "##")
  return (      
    <div className="border-2 border-blue-400">        
        <div className="pl-2 capitalize strong bg-blue-200 text-gray-900 font-bold text-xl space-y-10">Bidder Questions </div>
        {/* <div className="bg-slate-200 mb-4"><MDXRemote source={newCont} /></div>           */}
        <Markdown remarkPlugins={[remarkGfm, rehypeHighlight, rehypeReact, remarkParse, remarkRehype]} className="bg-slate-50">{newCont}</Markdown>

        <div className="flex items-left gap-2 md:m-2">
          <Update id="1"/>
          <Add id="1"/>          
        </div> 
    </div>
  );
}