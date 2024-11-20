"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
        <nav>
        <Link href="/show_counter">show counter</Link>
        <br />
        <Link href="/counter">counter</Link>
        </nav>
      <div>
        {/* Optional: Add a header or footer here */}
        {children}
      </div>
    </Provider>
    </body>
    </html>
  );
}
