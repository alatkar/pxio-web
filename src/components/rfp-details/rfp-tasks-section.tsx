import { MDXRemote } from 'next-mdx-remote/rsc'
import Markdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { Add, Create, Delete, Update } from '../general/buttons';

export default async function RfpTasksSection()
{
  const content = `
  

1. **review specs and identify all testing needs**
    - Do we have all testing equipment necessary to do the work

2. **Shortlist few firms we can partner**
    - Look for firms with similar experience

3. **Build the team that will perform the work.**
    - Align qualifications with personnel
  `
  let newCont = content?.replaceAll("\n", "\n\n")
  newCont = newCont?.replaceAll("\n\n\n\n", "\n\n")
  newCont = newCont?.replaceAll("\n\n", "\n\n &nbsp; ")
  newCont = newCont?.replaceAll("###", "##")
  return (      
    <div className="border-2 border-blue-400">        
        <div className="pl-2 capitalize strong bg-blue-200 text-gray-900 font-bold text-xl space-y-10">Tasks </div>
        {/* <div className="bg-slate-200 mb-4"><MDXRemote source={newCont} /></div>           */}
        <Markdown remarkPlugins={[remarkGfm, rehypeHighlight, rehypeReact, remarkParse, remarkRehype]} className="bg-slate-50">{newCont}</Markdown>

        <div className="flex items-left gap-2 md:m-2">
          <Update id="1"/>
          <Add id="1"/>          
        </div> 
    </div>
  );
}