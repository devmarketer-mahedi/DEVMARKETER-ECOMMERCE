import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import AuthProvider from "@/app/AuthProvider";
import "./globals.css";

if (typeof global !== 'undefined') {
    try {
        if (global.localStorage && typeof global.localStorage.getItem !== 'function') {
            console.log('Fixing broken localStorage (force)');
            const mockStorage = {
                getItem: () => null,
                setItem: () => {},
                removeItem: () => {},
                clear: () => {}
            };
            Object.defineProperty(global, 'localStorage', {
                value: mockStorage,
                writable: true,
                configurable: true
            });
        } else if (!global.localStorage) {
             global.localStorage = {
                getItem: () => null,
                setItem: () => {},
                removeItem: () => {},
                clear: () => {}
            };
        }
    } catch (e) {
        console.error('Failed to patch localStorage:', e);
    }
}

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    title: "DEVMARKETER - Shop smarter",
    description: "DEVMARKETER - Shop smarter",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${outfit.className} antialiased`} suppressHydrationWarning>
                <AuthProvider>
                    <StoreProvider>
                        <Toaster />
                        {children}
                    </StoreProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
