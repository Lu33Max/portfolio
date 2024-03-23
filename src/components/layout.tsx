import { type ReactNode } from "react";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer/Footer";

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
      <main className="font-poppins">
        <Navbar/>
        <div className="flex flex-col min-h-[91.5vh] md:mt-20 mt-10">
          <div className="xl:max-w-[1300px] max-w-full mb-0 mt-6 mx-auto relative max-xl:mx-6 py-0 px-[1.5rem] xl:px-0 flex-1">
            <>{children}</>
          </div>
          <Footer/>
        </div>
      </main>
    )
  }