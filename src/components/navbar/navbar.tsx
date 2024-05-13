
import { Suspense } from 'react';
import Search from '../general/search'
import {Links} from './links'
import PxioLogo from './pxio-logo'
import Image from "next/image";

interface nvabarProps {
  isLoggedIn: boolean
}

export const Navbar = ({isLoggedIn}: nvabarProps) => {
  return (
    <div className="w-full h-20 bg-red-600 rounded-lg sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <PxioLogo/> 
          <Suspense>
            <div className="w-100"><Search placeholder='Search...'/></div>
          </Suspense>
          <div>
          {isLoggedIn && <Links/>}            
          </div>
        </div>
      </div>
    </div>  
  )
}