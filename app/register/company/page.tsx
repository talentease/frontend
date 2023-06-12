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
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [companyName, setCompanyName] = React.useState('');
  const [companyAddress, setCompanyAddress] = React.useState('');
  const [companyDescription, setCompanyDescription] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const router = useRouter();

  const handleForm = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Create the user object with email and password
    const user = {
      email,
      password,
      firstName,
      lastName,
      companyName,
      companyAddress,
      companyDescription,
      phoneNumber,
    };

    try {
      const response = await fetch('https://backend-rylkweeqaa-et.a.run.app/api/v1/auth/register/company', {
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
    <section className="flex items-center justify-center my-10 mx-4">
      <div className="flex max-w-[980px] flex-col">
        <form onSubmit={handleForm} className="form">
          <Card>
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl">Company Sign Up</CardTitle>
              <CardDescription>
                Fill the field below to create the company account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2 px-4 mx-2">
                <Label htmlFor="text">First Name</Label>
                <Input
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="Olivia"
                />
              </div>
              <div className="grid gap-2 px-4 mx-2">
                <Label htmlFor="text">Last Name</Label>
                <Input
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Rodrigo"
                />
              </div>
              <div className="grid gap-2 px-4 mx-2">
                <Label htmlFor="email">Admin Email</Label>
                <Input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2 px-4 mx-2">
                <Label htmlFor="password">Admin Password</Label>
                <Input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  placeholder="********"
                />
              </div>
              <div className="grid gap-2 px-4 mx-2">
                <Label htmlFor="text">Company Name</Label>
                <Input
                  id="companyName"
                  onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  placeholder="Company Name"
                />
              </div>
              <div className="grid gap-2 px-4 mx-2">
                <Label htmlFor="text">Company Address</Label>
                <Input
                  id="companyAddress"
                  onChange={(e) => setCompanyAddress(e.target.value)}
                  type="text"
                  placeholder="Jl. Bangkit no 23"
                />
              </div>
              <div className="grid gap-2 px-4 mx-2">
                <Label htmlFor="text">Company Description</Label>
                <Input
                  id="companyDescription"
                  onChange={(e) => setCompanyDescription(e.target.value)}
                  type="text"
                  placeholder="Describe your company"
                />
              </div>
              <div className="grid gap-2 px-4 mx-2">
                <Label htmlFor="text">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text"
                  placeholder="081234567890"
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
                Register for Candidate Account?{' '}
                <Link href="/register" className="underline underline-offset-1 -mt-2">
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
