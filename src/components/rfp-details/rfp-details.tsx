// 'use client'

// import { useEffect, useState } from 'react';
import { promises as fs } from 'fs';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { fetchRfpSummary } from '@/apis/data';
import RfpSection from './rfp-section';
import RfpImages from './rfp-images';
import ParentPxioChatBot from '../chatbot/chatbot-parent';
import Link from 'next/link';
import RfpCustomerSection from './rfp-customer-section';
import Search from '../general/search';
import PencilIcon from '@heroicons/react/24/outline/PencilIcon';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import { Create, Delete, Update } from '../general/buttons';
import RfpSowSection from './rfp-sow-section';
import RfpQualificationSection from './rfp-qualification-section';
import RfpBdderQuestiosSection from './rfp-bidder-questions';
import RfpTasksSection from './rfp-tasks-section';
//import { AiFillHeart, AiFillCheckCircle, AiFillControl } from 'react-icons/ai'

export default async function RfpDetails({title, content}: {title: string;
  content: string;}) {

    // const [summary, setRFPSummary] = useState({title: "Some Title", content: "Some Content"});
    // useEffect(() => {
    //   console.log("Running useEffect");
    //   fetchRfpSummary("rfp-detroit").then(res => res.json().then((data) => {setRFPSummary({title:"rfp-detroit", content: data["Summary New"]})}))
    // });
    //const pathname = usePathname();
    //const rfpname = pathname.substring(pathname.lastIndexOf('/') + 1);

    //const data = await fetchRfpSummary(title).then(res => res.json()).then(res => ({
    const data = await fetchRfpSummary(title).then(res => res.json()).then(res => ({
      title:title, 
      content: res["summary"],

      summary: res["summary"],
      client: res["client"],

      projectHistory: res["projectHistory"],
      sow: res["sow"],
      proposalTimeline: res["resultProposalTimeline"],
      qualification: res["qualification"],
      financialObligation: res["financialObligation"],
      
      // timelineSow: res["timelineSow"],
      evaluation: res["evaluation"],
      contact: res["contact"],
      submittalProcess: res["submittalProcess"],
    }));
    
    // const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
    // const data = JSON.parse(file);
    const href = `proposals/${title}`
    return (
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col max-w-6xl">                    
          <RfpSection heading="Summary" content={data?.summary}/>
          <RfpCustomerSection heading="Client Information" content={data?.client}/>
          <RfpSection heading="Project History" content={data?.projectHistory}/>
          <RfpSowSection heading="Scope of work" content={data?.sow}/>
          {/* <RfpSection heading="Scope of work" content={data?.sow}/> */}
          <RfpSection heading="Proposal Timeline" content={data?.proposalTimeline}/>
          {/* <RfpSection heading="Timeline and Future Work" content={data?.timelineSow}/> */}
          <RfpQualificationSection heading="Qualification" content={data?.qualification}/>
          {/* <RfpSection heading="Qualification" content={data?.qualification}/> */}
          <RfpSection heading="Evaluation Criteria" content={data?.evaluation}/>
          <RfpSection heading="Financial Obligation" content={data?.financialObligation}/>
          <RfpSection heading="Submittal Process" content={data?.submittalProcess}/>
          <RfpSection heading="Contact" content={data?.contact}/>
          {/* <RfpImages/> */}
          <div className="flex items-left gap-2 md:m-2">
            <Create heading="Attention Areas"/> 
            <Create heading="Go/No-Go Analysis"/> 
          </div>
        </div>  
        <div className='flex flex-col flex-grow pl-2'>
          <div className="border-2 border-blue-400">
            <div className="pl-2 capitalize strong bg-blue-200 text-gray-900 font-bold text-xl space-y-10">Project Drawings</div>
            <div className='flex my-2'>
              <Image
                  src="/rfe1.png"
                  width={200}
                  height={200}
                  alt="Picture of the author"
              />
              <Image
                  src="/des4.jpeg"
                  width={200}
                  height={200}
                  alt="Picture of the author"
              />
              <Image
                  src="/rfe2.jpeg"
                  width={200}
                  height={200}
                  alt="Picture of the author"
              />
              <Image
                  src="/des5.jpeg"
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
            </div>
          </div>
          <div className='flex py-2'>
            <ParentPxioChatBot />
            <button className="ml-2 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Generate Proposal ...
            </button>
          </div>
          <div>
            <RfpBdderQuestiosSection />
          </div>
          <div>
            <RfpTasksSection />
          </div>
        </div>
      </div>
    );
}