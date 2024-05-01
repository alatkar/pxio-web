"use client"

import { FormEvent, useEffect, useState } from "react";
import { useChat } from 'ai/react';
import { chat } from "@/apis/chat";
import { MDXRemote } from "next-mdx-remote/rsc";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {XMarkIcon, AcademicCapIcon,  UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { usePathname } from "next/navigation";

export const PxioChatBot = ({
  isOpen,
  onClose,
  children
}: {
  isOpen: boolean,
  onClose: () => void,
  children: React.ReactNode
}) => {
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if  (event.key === "Escape")
        onClose();
    };
    window.addEventListener("keydown", handleKeyDown)
  }, [onClose])

  let path = usePathname();
  path = path.substring(path.lastIndexOf('/') + 1);

  function format(input:string)
  {
    let newCont = input?.replaceAll("\n", "\n\n")
    newCont = newCont?.replaceAll("\n\n\n\n", "\n\n")
    newCont = newCont?.replaceAll("\n", "\n\n &nbsp; ")
    newCont = newCont?.replaceAll("###", "\n ##")
    return newCont
  }
  //const [messages, setmessages] = useState<string[]>([]);

  const { messages, input, handleInputChange, handleSubmit } = useChat({ 
    api: `http://localhost:5000/rfps/${path}/chat`,
    // initialMessages: [
    //   { id: "system", role: "system", content: "You are a philosopher." },
    // ],
  }); 

  /* async function handleSubmit(e: FormEvent<HTMLFormElement>)
  {
    e.preventDefault();
    const formData = new FormData();
    
    messages.forEach((message) => {
      console.log ("Message => " + message)      
      formData.append("messages", message);
    })

    // Tell Typescript about "elements" to prevent error 
    const form = e.currentTarget
    const formElements = form.elements as typeof form.elements & {
      rfpid: {value: string}
    }
    formData.append("rfpid", formElements.rfpid.value);


    const ans = await chat(formData).then(res => JSON.stringify(res));
    console.log("Chat Response => " + ans)
  } */
  //const [messages, setMessages] = useState([]);
  
  return (
    isOpen && 
    <>   
{/*       <div className="fixed overflow-y-auto right-0 inset-0 bg-black bg-opacity-50 flex justify-right items-center transition-opacity duration-300">
        <div className="bg-white p-5 rounded-md shadow-lg max-w-sm md:ax-w-md mx-auto">
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      </div> */}

{/*     <div className="fixed z-10 inset-0 overflow-y-auto"></div>
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
         sm:p-0">
      <button onClick={onClose}>Close</button>
      {children}
    </div> */}
    
    <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center '>
      <div className="bg-white p-10 rounded-md shadow-md absolute right-5 bottom-5 h-[60rem] w-[80rem] overflow-auto border-double border-stone-500 border-8">
        <button className=" bg-blue-200 absolute top-0 right-0" onClick={onClose}><XMarkIcon width={40}height={26} onClick={onClose}/> </button>      
        <div className="flex mb-8">
          <Image src="/brain.jpeg" alt="Sunset in the mountains" width={40} height={20}/>
          <h1 className='pl-2 pr-2 font-bold text-left text-xl  text-blue-500'>PXiO AI Assistant</h1>   
        </div>
        
        <form onSubmit={handleSubmit}>          
            {           
            messages.map((message) => (              
              <div>
                {
                  message.role == "user" ?               
                  (
                    <div >
                      <div className="flex">
                        <UserIcon width={40}height={26}/>    
                        <div className="font-bold">{"You"}</div>
                      </div>
                      <div className="flex bg-orange-100 border-2 p-1 my-2"> 
                        <Markdown >{message?.content}</Markdown>
                      </div>
                    </div>
                  )
                  :
                  (
                    <div>
                      <div className="flex">
                        <AcademicCapIcon width={40}height={26}></AcademicCapIcon>         
                        <div className="font-bold">{"PxiO Assistant"}</div>
                      </div>      
                      <div className="bg-slate-100 border-2 p-1 my-2">                                                                 
                        <Markdown className="bg-slate-50 border-2">{format(message.content)}</Markdown>
                      </div>
                    </div>
                  )
                }
              </div>
            ))}
            <div className="flex my-2">
              <textarea 
                cols={60}
                rows={1}           
                onChange={handleInputChange}
                value={input}
                className="text-black rounded border-4 border-sky-400"
              />

              <button className='text-[#771505]  bg-blue-200 font-bold flex items-center gap-1 p-4' type="submit">Ask Question</button>
          </div>
        </form>
      
        {/* <p>
          Are you sure you want to delete <b>Charle Kasasira</b>
          <p className='bg-[#ffe9d9] p-2 border-l-2 border-[#fa703f] text-[#bc4c2e] flex flex-col text-sm my-1'>
            <span className='text-[#771505] font-bold flex items-center gap-1'>
               Warning
            </span>
            By Deleting this account, you won't be able to access the system.
          </p>
        </p>
        
        <div className='flex justify-between mt-5'>
          <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
          onClick={onClose}
          >No, Cancel</button>
          <button className='outline outline-1 outline-[#101f20] hover:bg-[#101f20] hover:text-white py-2 px-4 bg-transparent text-black'
          onClick={() => console.log("Please like and subscribe")}
          >Yes, Delete</button>
        </div> */}
      </div>
    </div>
    </>
  );
}