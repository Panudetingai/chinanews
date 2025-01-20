// app/providers.tsx
'use client'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from "next/navigation";

export function NextuiProviders({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <NextUIProvider navigate={router.push}>
            {children}
        </NextUIProvider>
    )
}