"use client"
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import PxioLogo from '../navbar/pxio-logo';
import { Navbar } from '../navbar/navbar';
import { LoginButtonComp } from '../login/login-button';
import { Button } from '../ui/button';

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';


export default function HomePage() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div className="mt-2 flex grow flex-col gap-1 md:flex-row">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 md:w-2/6 md:px-20">
        <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
          <>Welcome to PX iO.</> {' '}
          <a href="https://phoenixio.one/" className="text-blue-500 strong">
            Efficiently evaluate RFPs, identify risk items, and craft superior
          </a>
          {' '}proposals with your own AEC-specific enterprise-grade AI tool.
        </p>
        <LoginButtonComp>
          <Button className="flex items-center gap-5 self-start rounded-lg bg-slate-300 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-red-400 md:text-base" variant="ghost">
            Log in <ArrowRightIcon className="w-5 md:w-6" />
          </Button>
        </LoginButtonComp>
        {/* <Link
          href="/login"
          className="flex items-center gap-5 self-start rounded-lg bg-slate-300 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-red-400 md:text-base"
        >
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link> */}
      </div>
      <div className="flex flex-col grow items-center justify-center bg-gray-50 ">
        <Carousel className="items-center justify-center w-full max-w-5xl"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          >
          <CarouselContent className="-ml-1">            
            <CarouselItem>
              <Image
                src="/focus2.png"
                width={1000}
                height={460}
                className="hidden md:block"
                alt="Phoenix iO Logo of Desktop Version"
                priority
              />
              <Image
                src="/focus2.png"
                width={360}
                height={420}
                className="block md:hidden"
                alt="Phoenix iO Logo of Mobile Version"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/focus3.png"
                width={1000}
                height={460}
                className="hidden md:block"
                alt="Phoenix iO Logo of Desktop Version"
                priority
              />
              <Image
                src="/focus3.png"
                width={360}
                height={420}
                className="block md:hidden"
                alt="Phoenix iO Logo of Mobile Version"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/focus4.png"
                width={1000}
                height={460}
                className="hidden md:block"
                alt="Phoenix iO Logo of Desktop Version"
                priority
              />
              <Image
                src="/focus4.png"
                width={360}
                height={420}
                className="block md:hidden"
                alt="Phoenix iO Logo of Mobile Version"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/focus5.png"
                width={1000}
                height={460}
                className="hidden md:block"
                alt="Phoenix iO Logo of Desktop Version"
                priority
              />
              <Image
                src="/focus5.png"
                width={360}
                height={420}
                className="block md:hidden"
                alt="Phoenix iO Logo of Mobile Version"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/focus6.png"
                width={1000}
                height={460}
                className="hidden md:block"
                alt="Phoenix iO Logo of Desktop Version"
                priority
              />
              <Image
                src="/focus6.png"
                width={360}
                height={420}
                className="block md:hidden"
                alt="Phoenix iO Logo of Mobile Version"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <div className="flex flex-col grow items-center justify-center p-6 rounded-lg bg-gray-50  md:px-28 md:py-12">         
          <div className="">
            <Image
              src="/focus1.png"
              width={1000}
              height={460}
              className="hidden md:block"
              alt="Phoenix iO Logo of Desktop Version"
              priority
            />
            <Image
              src="/focus1.png"
              width={360}
              height={420}
              className="block md:hidden"
              alt="Phoenix iO Logo of Mobile Version"
            />        
          </div>
          <div className="py-10">
            <Link
              href="/contactus"
              className="flex items-center gap-5 self-start rounded-lg bg-slate-300 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-red-400 md:text-base"
            >
              <span>Contact us</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>       
        </div> */}
        {/*<div className="flex ustify-center p-2  bg-gray-50  md:w-3/5 md:px-28 md:py-12">
          <strong>Contact us</strong> {' '}
          <form action="">
              <input type="text" placeholder="Name and Surname" />
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number (Optional)" />
              <textarea
                name=""
                id=""              
                placeholder="Message"
              ></textarea>
              <button>Send</button>
          </form>
        </div> */}
      </div>
      
    </div>
  );
}
