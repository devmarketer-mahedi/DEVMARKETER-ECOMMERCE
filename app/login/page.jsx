'use client';
export const dynamic = 'force-dynamic';
import { CredentialSignIn } from "@stackframe/stack";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <CredentialSignIn />
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
