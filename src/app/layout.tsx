import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { auth } from "../../auth";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PX iO",
  description: "Build Superior Proposals",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="flex min-h-screen flex-col p-6">
          <Navbar isLoggedIn = {!!session?.user}/>
            {children}          
        </main>
      </body>
    </html>
  );
}
