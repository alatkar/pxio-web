import HomePage from "@/components/home/home-page";
import Image from "next/image";
import {auth} from '../../auth'
import { cookies, headers } from 'next/headers'

async function myfunc() {
  const forwarded = headers().get("x-forwarded-for")
  console.log("Visitor IP address", forwarded)
  /* const ip = forwarded ? forwarded.split(/, /)[0] : Conneconnection.remoteAddress
  return {
    props: {
      ip,
    },
  } */
}

export default async function Home() {
  await myfunc();
  return (    
    <>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      <HomePage />      
    </>
  );
}
