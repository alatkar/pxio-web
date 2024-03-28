"use client"

import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';
import NavLinksRfps from './navlinks-rfps';
import { FormEvent, useState } from 'react';
import RfpUpload from '../rfp-upload/rfp-upload';
// import { signOut } from '@/auth';

export default function SideNavRfps() {
  return (   

    <div className="flex h-full flex-col px-3 py-4 md:px-2">      
      <div className="flex flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">        
        < NavLinksRfps />        
      </div>
      <div><RfpUpload /></div>
    </div>
  );
}
