import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recifood - Generate and Explore recipes",
  description:
    "Recifood, your ultimate culinary companion, is not just a random food picker and recipe search app",
  authors: [{ name: "Ashish Jaiswar", url: "https://ashishjaiswar.com" }],
  creator: "Ashish Jaiswar",
  publisher: "Ashish Jaiswar",
  keywords: [
    "Recipe",
    "Generate recipe",
    "Random food",
    "Random Recipe",
    "Ashish Jaiswar",
    "Food Search",
    "Recipe Search",
  ],
  openGraph: {
    title: "Recifood - Generate and Explore recipes",
    description:
      "Recifood, your ultimate culinary companion, is not just a random food picker and recipe search app",
    siteName: "Recifood",
    images: [
      {
        url: "https://drive.google.com/file/d/11b-_lfhPVzV1PJJXjVPs_LRwazh0p4GW/view?usp=sharing",
      },
    ],
    url: "https://recifood.com",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-4 md:px-28 text-slate-800`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
