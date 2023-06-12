import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image";
import { Icons } from "@/components/icons"


export default function IndexPage() {
  return (
    <section className="container mx-auto flex h-screen flex-col items-center justify-center">
      <div className="flex max-w-[980px] flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl">
          Get The Talent You Need with TalentEase!
        </h1>
        <p className="max-w-xl py-3 text-center text-lg text-muted-foreground">
          Platform that helps you customize your career site and find the right talent for you!
        </p>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Link
          rel="noreferrer"
          href={'/login'}
          className={buttonVariants({ variant: "default" })}
        >
          Explore
        </Link>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center">
        <p className="text-md -mb-9 text-center text-muted-foreground">Supported by</p>
        <a href="https://g.co/bangkit" className="flex items-center justify-center">
          <Icons.bangkit className="w-2/6" />
        </a>
      </div>
    </section>


  )
}
