"use client"

import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';
import NavLinksRfps from './navlinks-rfps';
import { FormEvent, useState } from 'react';
import RfpUpload from '../rfp-upload/rfp-upload';
import { fetchRfps } from '@/apis/data';
import { Rfp } from '@/lib/pxTypes';
// import { signOut } from '@/auth';

export default async function SideNavRfps() {

  const rfpsApi = await fetchRfps().then(res => res.json());
  const newrfps : Rfp[] = [];
  rfpsApi["res"].forEach((element: string) => {
    newrfps.push({"name": element, "href": `/rfps/${element}`})
  });  

  return (   
    <div className="flex h-full flex-col px-3 py-4 md:px-2">      
      <div className="flex flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">        
        < NavLinksRfps heading="Your RFPs" rfps={newrfps}/>        
      </div>     
    </div>
  );
}
