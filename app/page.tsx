import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center justify-center gap-2 pt-12">
        <h1 className="text-center text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl">
          Get the talent you need with TalentEase!
        </h1>
        <p className="max-w-2xl text-center text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Link
          rel="noreferrer"
          href={'/login'}
          className={buttonVariants({ variant: "default" })}
        >
          Explore
        </Link>
      </div>
    </section>
  )
}
