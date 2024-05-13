import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { signOut } from '../../../auth';
import { NavLinks } from './nav-links';

export const Links = () => {
  return (
    <div className="hidden md:flex gap-x-6 text-white">
      <NavLinks />        


      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="rounded-md hover:text-red-400 md:flex-none md:justify-start md:p-2 md:px-3">           
          <div className="">Sign Out</div>
        </button>
      </form>
    </div>
  );
}