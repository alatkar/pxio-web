// 'use client'

// import { useEffect, useState } from 'react';
import { promises as fs } from 'fs';
import { usePathname } from 'next/navigation';
import { fetchRfpSummary } from '@/apis/data';
import RfpSection from './rfp-section';
import RfpImages from './rfp-images';
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

    return (
      <div>        
        <div className="capitalize text-2xl pb-5 font-bold">{title}</div>
        <RfpSection heading="Summary" content={data?.summary}/>
        <RfpSection heading="Client Information" content={data?.client}/>
        <RfpSection heading="Project History" content={data?.projectHistory}/>
        <RfpSection heading="Statement of work" content={data?.sow}/>
        <RfpSection heading="Proposal Timeline" content={data?.proposalTimeline}/>
        {/* <RfpSection heading="Timeline and Future Work" content={data?.timelineSow}/> */}
        <RfpSection heading="Qualification" content={data?.qualification}/>
        <RfpSection heading="Evaluation Criteria" content={data?.evaluation}/>
        <RfpSection heading="Financial Obligation" content={data?.financialObligation}/>
        <RfpSection heading="Submittal Process" content={data?.submittalProcess}/>
        <RfpSection heading="Contact" content={data?.contact}/>
        <RfpImages/>
      </div>
    );
}