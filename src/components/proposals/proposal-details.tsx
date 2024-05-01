// 'use client'

// import { useEffect, useState } from 'react';
import { promises as fs } from 'fs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { fetchProposal, fetchRfpSummary } from '@/apis/data';
import ParentPxioChatBot from '../chatbot/chatbot-parent';
import Markdown from 'react-markdown';
import ProposalOutline from './proposal-outline';
//import { AiFillHeart, AiFillCheckCircle, AiFillControl } from 'react-icons/ai'

export default async function ProposalDetails({title, content}: {title: string;
  content: string;}) {
    const data = await fetchProposal(title).then(res => res.json()).then(res => ({
      title:title, 
      proposal: res["proposal"],
    }));

    let newCont = data.proposal?.replaceAll("\n", "\n\n")
    newCont = data.proposal?.replaceAll("\n\n\n\n", "\n\n")
    newCont = data.proposal?.replaceAll("\n\n", "\n\n &nbsp; ")
    newCont = data.proposal?.replaceAll("###", "##")

    return (
      <div className="flex flex-row w-full h-full">
        <div className='flex flex-col min-w-6xl'>
          <ProposalOutline/>  
        </div>
        <div className="flex flex-col flex-grow pl-2">
          <div className="border-2 border-blue-400">
            <div className="pl-2 capitalize strong bg-blue-200 text-gray-900 font-bold text-xl space-y-10">Proposal: {title}</div>        
            <Markdown className="bg-slate-50 border-2">{data.proposal}</Markdown>          
          </div>
          <div className="border-2 border-blue-400">
            <div className="pl-2 capitalize strong bg-blue-200 text-gray-900 font-bold text-xl space-y-10">Project Drawings</div>
            <div className='flex my-2'>
              <Image
                src="/des1.jpeg"
                width={200}
                height={200}
                alt="Picture of the author"
              />
              <Image
                  src="/des2.jpeg"
                  width={200}
                  height={200}
                  alt="Picture of the author"
              />
              <Image
                  src="/des3.jpeg"
                  width={200}
                  height={200}
                  alt="Picture of the author"
              />
            </div>
          </div>          
          <div className='flex py-2'>
            <ParentPxioChatBot />
            <button className="ml-2 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Export Proposal ...
            </button>
          </div>        
        </div>        
      </div>        
    );
}