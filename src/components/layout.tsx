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
        <div className="flex flex-col min-h-[91.5vh] md:mt-20 mt-10 items-center">
          <div className="xl:max-w-[1300px] 2xl:max-w-[1500px] max-w-full mb-0 mt-6 max-[1400px]:mx-6 mx-auto relative py-0 px-[1.5rem] xl:px-0 flex-1">
            <>{children}</>
          </div>
          <Footer/>
        </div>
      </main>
    )
  }