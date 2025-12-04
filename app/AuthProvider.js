'use client';
import { StackProvider, StackClientApp } from "@stackframe/stack";
import { useEffect, useState } from "react";

const app = new StackClientApp({
  tokenStore: 'nextjs-cookie',
});

export default function AuthProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <StackProvider app={app}>{children}</StackProvider>;
}
