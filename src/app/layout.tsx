import { Baloo_Chettan_2, Cabin, Montserrat } from "next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import StoreProvider from "@/contexts/StoreProvider";
// import NextAuthProvider from "@/contexts/NextAuthProvider";

const balooChettan2 = Baloo_Chettan_2({
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  subsets: ["latin"],
  variable: "--font-baloo-chettan-2"
});

const montSerrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  subsets: ["latin"],
  variable: "--font-montserrat"
});

const cabin = Cabin({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  subsets: ["latin"],
  variable: "--font-cabin"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${balooChettan2.variable} ${montSerrat.variable} ${cabin.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>

      <body className={cabin.className} style={{ minWidth: 400 }}>
        {/* <NextAuthProvider> */}
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer />
          </ThemeProvider>
        </StoreProvider>
        {/* </NextAuthProvider> */}
      </body>
    </html>
  );
}
