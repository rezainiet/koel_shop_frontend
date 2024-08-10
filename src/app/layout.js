import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Koel Group - Towards inclusive &amp; sustainable growth",
  description: "Koel Group is committed to fostering inclusive and sustainable growth, focusing on initiatives that drive economic development while ensuring equitable opportunities for all. By integrating environmental stewardship with business strategies, Koel Group aims to create lasting value that benefits communities and future generations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Include the Navbar here */}
        <main>{children}</main>
      </body>
    </html>
  );
}
