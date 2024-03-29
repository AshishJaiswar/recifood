import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";

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
    "Kya khaye",
    "What to eat",
    "Khaye",
    "Food",
    "Lunch",
    "Breakfast",
    "Dinner",
    "Indian",
    "Indian recipes",
    "Generate recipe",
    "Random food",
    "Random Recipe",
    "Ashish Jaiswar",
    "Food Search",
    "Recipe Search",
    "recipe recipes",
    "all recipe",
    "recipe ideas",
    "cooking",
    "easy recipe",
  ],
  openGraph: {
    title: "Recifood - Generate and Explore recipes",
    description:
      "Recifood, your ultimate culinary companion, is not just a random food picker and recipe search app",
    siteName: "Recifood",
    images: [
      {
        url: "https://media.graphassets.com/c4nvksLkQFcEJOQu2xlt",
      },
    ],
    url: "https://recifood.fun",
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
      <GoogleTagManager gtmId="G-1389E1865C" />
    </html>
  );
}
