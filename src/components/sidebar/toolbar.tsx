'use client'

import {
  UserGroupIcon,
  BuildingLibraryIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'PXiO AI', href: '/', icon: UserGroupIcon },
  { name: 'Knowledge Base', href: '/', icon: AcademicCapIcon },
  { name: 'Training', href: '/', icon: BuildingLibraryIcon },
];

export default function ToolBar() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <button
            key={link.name}
            className={clsx(
              "flex h-[48px]justify-right gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </button>
        );
      })}
    </>
  );
}