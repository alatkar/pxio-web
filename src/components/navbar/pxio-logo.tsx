import Image from 'next/image';
import Link from "next/link";
// import { lusitana } from '@/app/ui/fonts';

export default function PxioLogo() {
  return (
    <Link
      href={'/'}>
      <Image
            src="/Phoenix-Logos-white.png"
            alt="PX iO Image"
            width={200}
            height={160}
            priority
      />
      {/*<GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      {/* <p className="text-[44px]">Acme</p> */}
    </Link>
  );
}