'use client'
import React from "react";
import signIn from "@/src/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

import { Icons } from "@/components/icons"
import toast, {Toaster} from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleForm = async (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    const { result, error } = await signIn(email, password);

    if (error) {
      // @ts-ignore
      toast.error("Invalid email or password")
      return;
    }

    // else successful
    toast.success("Login successful")
    return;
  }

  return(
    <section className="flex items-center justify-center h-screen -mt-10">
      <div className="flex max-w-[980px] flex-col">
        <form onSubmit={handleForm} className="form">
          <Card>
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl">Login Account</CardTitle>
              <CardDescription>
                Enter your email and password below to login
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="********" />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Login</Button>
            </CardFooter>
            <CardFooter>
              <p className="text-sm">Create your account <Link href="/register" className="underline underline-offset-1">here</Link></p>
            </CardFooter>
          </Card>
        </form>
      </div>
      <Toaster />
    </section>
  )
}
