'use client';
export const dynamic = 'force-dynamic';
import { CredentialSignUp } from "@stackframe/stack";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <CredentialSignUp />
      </div>
    </div>
  );
}
