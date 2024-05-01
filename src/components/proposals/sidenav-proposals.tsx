"use client"

import NavLinksProposals from './navlinks-proposals';
// import { signOut } from '@/auth';

export default function SideNavProposals() {
  return (   
    <div className="flex h-full flex-col px-3 py-4 md:px-2">      
      <div className="flex flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">        
        < NavLinksProposals heading="Your Proposals"/>        
      </div>     
    </div>
  );
}
