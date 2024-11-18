import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import {Bricolage_Grotesque , Oswald} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import GrainEffect from "@/components/visualEffects/GrainEffect";
import { Cursor } from "@/components/Cursor/Cursor";

// Fonts
const MainFont = Bricolage_Grotesque({subsets:["latin"]});
const OswaldFont = Oswald({subsets:["latin"], variable:"--font-oswald"});
const Pixelfont = localFont({
  src:"../app/fonts/GeistMonoVF.woff",
  variable:"--font-pixel"
})

//Metadata
export const metadata: Metadata = {
  title: "HAMZA ALI",
  description: "hamza ali offical portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(MainFont.className, OswaldFont.variable, Pixelfont.variable)}
      >
        <GrainEffect/>
        <Cursor color="#fff"/>
        {children}
      </body>
    </html>
  );
}
