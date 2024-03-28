import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function RfpSection({heading, content}: {heading: string; content: string})
  {
    const newCont = content?.replaceAll("\n\n", " <br/> &emsp; ")
    return (      
      <div className="shadow-sm">        
          <p className="capitalize strong bg-blue-200 text-gray-900 font-bold text-xl mb-4">{heading}</p>
          <div className="bg-slate-200 mb-4"><MDXRemote source={newCont} /></div>          
      </div>
    );
  }