export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Talentease",
  description:
    "Get the talent you need with Talentease!",
  mainNav: [
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Register",
      href: "/register",
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
