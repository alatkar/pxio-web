'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { auth, signOut } from '../../../auth';

const links = [
  { name: 'Home', href: '/', icon: HomeIcon, title: 'Home' },
  { name: 'RFPs', href: '/rfps', icon: UserGroupIcon, title: "RFP Page" },
  { name: 'Proposals', href: '/proposals', icon: UserGroupIcon, title: "Proposals Page" },
  { name: 'Profile', href: '/profile', icon: UserGroupIcon, title: "Profile" },
];

export const NavLinks = async() => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link =>(
          <Link key={link.name} href={link.href} className={clsx(
            "rounded-md hover:text-red-400 md:flex-none md:justify-start md:p-2 md:px-3",
            {
              "text-black": pathname === link.href,
            }
          )}>{link.name}</Link>
        )))
      }
    </>      
  );
}