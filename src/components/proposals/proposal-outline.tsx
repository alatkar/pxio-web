import { MDXRemote } from 'next-mdx-remote/rsc'
import Markdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { Add, Create, Delete, Update } from '../general/buttons';

export default async function ProposalOutline()
{
  const content = `
  

1. **Cover Page**
    - Include **Firm Name** and **Project Title**
    - Date of Submission

2. **Table of Contents**
    - Clearly outline the sections of the proposal

3. **Firm’s Background and Qualifications**
    - History and overview of the firm
    - Core competencies and areas of expertise
    - Summary of similar projects completed, including outcomes and impacts
    - Professional certifications and memberships

4. **Understanding of the Project Scope and Objectives**
    - Detailed interpretation of the project scope
    - Discussion of the project objectives
    - Identification of key challenges and opportunities

5. **Project Approach and Methodology**

- Outline of your proposed methodology to meet the project's objectives
- Description of the project phases and key tasks
- Innovation and technologies to be utilized
- Approach to managing project risks and uncertainties

6. **Project Team and Management Structure**
- Structure of the project team
- Key personnel profiles, including experience and qualifications
- Roles and responsibilities within the project
- Communication and decision-making processes

7. **Work Plan and Schedule**
- Detailed work plan aligning with the project's objectives and milestones
- Project timeline with key deliverables and deadlines
- Resource allocation plan

8. **Quality Assurance and Control Measures**
- Overview of quality management policies and procedures
- Methods for ensuring quality in project deliverables
- Compliance with industry standards and best practices

9. **Health, Safety, and Environmental Management**
- Health and safety policies and procedures
- Environmental impact assessment and mitigation strategies
Compliance with local regulations and standards

10. **Financial Proposal**
- Detailed cost breakdown of the project components
- Pricing strategy and justification
- Payment terms and conditions

11. **Legal and Ethical Compliance**
- Overview of compliance with relevant laws and regulations
- Ethical considerations and commitments

12. **References and Credentials**
- List of references from past clients
- Credentials and awards

13. **Appendices**
- Supporting documents
- Technical specifications
- Any additional information relevant to the proposal
  `
  let newCont = content?.replaceAll("\n", "\n\n")
  newCont = newCont?.replaceAll("\n\n\n\n", "\n\n")
  newCont = newCont?.replaceAll("\n\n", "\n\n &nbsp; ")
  newCont = newCont?.replaceAll("###", "##")
  return (      
    <div className="border-2 border-blue-400">        
        <div className="pl-2 capitalize strong bg-blue-200 text-gray-900 font-bold text-xl space-y-10">Proposal Outline</div>
        {/* <div className="bg-slate-200 mb-4"><MDXRemote source={newCont} /></div>           */}
        <Markdown remarkPlugins={[remarkGfm, rehypeHighlight, rehypeReact, remarkParse, remarkRehype]} className="bg-slate-50">{newCont}</Markdown>

        <div className="flex items-left gap-2 md:m-2">
          <Update id="1"/>
          <Add id="1"/>
          <button className="ml-2 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Import Proposal Outline ...
            </button>
        </div> 
    </div>
  );
}