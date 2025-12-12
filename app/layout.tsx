import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";



export const metadata = {
  title: "TrueDrop",
  // description: "Best AI Solution",
  icons: {
    icon: "/assets/images/icon/favicon.svg", // SVG favicon
  },
};
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.variable} suppressHydrationWarning>
       
        {/* Navbar */}
      {/* <Navbar/> */}
        {/* Page Content */}
        <main className="">
          {children}
        </main>

        {/* Footer */}
       {/* <Footer/> */}
        
</body>
      
 </html>
  );
}
