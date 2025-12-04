'use client'
export const dynamic = 'force-dynamic';
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
    </div>
  )
}
