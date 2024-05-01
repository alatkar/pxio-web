import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
//import { deleteInvoice } from '@/app/lib/actions';

export function CreateWithPlus({ heading }: { heading: string }) {
  return (
    <Link
      href="/"
      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{heading}</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function Create({ heading }: { heading: string }) {
  return (
    <Link
      href="/"
      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{heading}</span>{' '}
    </Link>
  );
}

export function Update({ id }: { id: string }) {
  return (
    <Link
      href={`/`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5 text-blue-500" />
    </Link>
  );
}

export function Delete({ id }: { id: string }) {
  //const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5  text-blue-500" />
      </button>
    </form>
  );
}

export function Add({ id }: { id: string }) {
  //const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <PlusIcon className="w-5" />
      </button>
    </form>
  );
}