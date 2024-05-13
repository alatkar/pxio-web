import HomePage from "@/components/home/home-page";
import Image from "next/image";
import {auth} from '../../auth'

export default function Home() {
  return (
    <>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      <HomePage />      
    </>
  );
}
