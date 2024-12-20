import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoginDataFetchProvider from "@/components/LoginDataFetchProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OutfitZen",
  description: "Best clothing brand for fashionable and trendy clothes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

      <html lang="en">
      <head>
        <title>OutfitZen</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
     
      </head>
      <body className="background text-white">
          <LoginDataFetchProvider/>
          {children}
       
        </body>
    </html>

    
  );
}
