import "./globals.css";

import { cn } from "@/libs/utils";
import { ThemeProvider } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn("bg-gray-100 antialiased dark:bg-dark-950")}>
        <ThemeProvider attribute='class' enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
