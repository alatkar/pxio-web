"use client"

import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';
import { FormEvent, useState } from 'react';
import RfpUpload from '../rfp-upload/rfp-upload';
import { PxioChatBot } from '../chatbot/pxiochatbot';
import {usePathname} from "next/navigation"
// import { signOut } from '@/auth';

export default function ParentPxioChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const pathname = usePathname();

  return (   
   <>
      <button
        type="button" className="flex  bg-blue-500 text-white" 
        onClick={() => {setIsChatOpen(true)}}
        ><img src="/brain.jpeg" width={60}/>
      </button>
      <PxioChatBot 
        isOpen={isChatOpen} 
        onClose = {() => {
          setIsChatOpen(false)}}
        >PXio AI Assistant
      </PxioChatBot>
    </>
  );
}
