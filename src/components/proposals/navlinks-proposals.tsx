'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CheckCircleIcon,
  CubeIcon, DocumentIcon,
  Square2StackIcon,
  Square3Stack3DIcon,
  DocumentCheckIcon,  
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ForwardRefExoticComponent, RefAttributes, SVGProps, SetStateAction, useEffect, useState } from 'react';
import { fetchRfps } from '@/apis/data';

export default function NavLinksProposals({heading}: {heading: string}) {
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const [rfps, setRFPs] = useState([
    { name: 'Detroit', href: '/proposals/detroit', icon: CheckCircleIcon },
    { name: 'Kirkland', href: '/proposals/kirkland-city', icon: CheckCircleIcon },
    { name: 'Chicago City', href: '/proposals/chyicago-city', icon: CheckCircleIcon },
    { name: 'New York Subway', href: '/proposals/new-york-subway', icon: CheckCircleIcon },
  ]);

  useEffect(() => {
    console.log("Running useEffect");
    fetchRfps().then(res => res.json())
      .then((data) => {
        console.log("Response 1: " + data["res"])
        const newrfps: SetStateAction<{ name: string; href: string; icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & RefAttributes<SVGSVGElement>>; }[]> = []
        data["res"].forEach((element: string) => {
          newrfps.push({"name": element, "href": `/proposals/${element}`, "icon": DocumentCheckIcon})
        }); 
        setRFPs(newrfps)
        console.log("RFPs: " + JSON.stringify(newrfps))
      });
    console.log("Finished useEffect");
  }, []);

  const pathname = usePathname();
  return (
    <>
      <h1 className="capitalize text-lg pb-2 font-bold pl-2 strong bg-blue-200"> {heading}</h1>  
      {rfps.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "capitalize flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <svg className="h-6 w-6 flex-none fill-blue-300 stroke-black stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
