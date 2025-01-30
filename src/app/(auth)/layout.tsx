'use client';

import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
}
