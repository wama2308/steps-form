import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StepsFormProvider } from "@/context/StepsFormProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Registro de perfil",
  description: "Registro de perfil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <StepsFormProvider>{children}</StepsFormProvider>
      </body>
    </html>
  );
}
