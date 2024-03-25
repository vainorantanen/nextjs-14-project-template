"use client"

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button as ShadButton } from "@/components/ui/button";
import React from "react";
import SignOutButton from "../buttons/SignOutButton";

export default function Navbar() {

  const { data: session } = useSession();

  return (
    <nav className="p-4 bg-white border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center mr-1">
          <button className="text-black text-2xl font-bold hover:underline">
            <Link href="/">Next.js 14 Template</Link>
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
          {!session && (
            <ShadButton>
            <Link href="/login">Log in</Link>
          </ShadButton>
          )}
          {session && (
            <SignOutButton />
          )}
        </div>
        </div>
    </nav>
  );
}