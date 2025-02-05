import Footer from "@/components/footer/Footer";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

import { Roboto_Condensed } from "next/font/google";
import AuthProvider from "@/services/AuthProvider";
const manrope = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Travel Vista", template: "%s | Travel Vista" },
  description:
    "Discover breathtaking destinations, plan your perfect trip, and explore the world with Travel Vista. Your ultimate travel companion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <AuthProvider>
          <div>
            {" "}
            <Navbar></Navbar>
          </div>
          {children}
          <div>
            {" "}
            <Footer></Footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
