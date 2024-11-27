import "./globals.css";

import { cn } from "@/libs/utils";
import { ThemeProvider } from "./providers";
import { Calistoga, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const calistoga = Calistoga({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-calistoga",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          poppins.className,
          calistoga.variable,
          "bg-gray-100 antialiased dark:bg-dark-950"
        )}
      >
        <ThemeProvider attribute='class' enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
