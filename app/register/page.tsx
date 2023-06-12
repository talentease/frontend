'use client'
import React from "react";
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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleForm = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Create the user object with email and password
    const user = {
      email,
      password,
    };

    try {
      const response = await fetch('https://backend-rylkweeqaa-et.a.run.app/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success('Sign-up successful');
        // Redirect to the login page or any other desired page
        router.push('/login');
      } else {
        // @ts-ignore
        toast.error('Error signing up');
      }
    } catch (error) {
      // Handle error if fetch request fails
      console.error('Error:', error);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen -mt-10 mx-4">
      <div className="flex max-w-[980px] flex-col">
        <form onSubmit={handleForm} className="form">
          <Card>
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl">Candidate Sign Up</CardTitle>
              <CardDescription>
                Enter your email and password below to create an account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  placeholder="********"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </CardFooter>
            <CardFooter>
              <p className="text-sm">
                Already have an account?{' '}
                <Link href="/login" className="underline underline-offset-1">
                  Login here
                </Link>
              </p>
            </CardFooter>
            <CardFooter>
              <p className="text-sm">
                Register for Company Account?{' '}
                <Link href="/register/company" className="underline underline-offset-1 -mt-2">
                  Register here
                </Link>
              </p>
            </CardFooter>
          </Card>
        </form>
      </div>
      <Toaster />
    </section>
  );
}
