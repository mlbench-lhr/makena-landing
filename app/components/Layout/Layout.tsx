import Footer from "../Footer/Footer";
import Navbar from "../Navbar/navbar";




export const metadata = {
  title: "TrueDrop",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        
        {/* Navbar */}
       <Navbar/>
        {/* Page Content */}
        <main className="">
          {children}
        </main>
       <Footer/>
        {/* Footer */}
       
</div>
  );
}
