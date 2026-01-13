"use client"

import { Link, Link2, Menu } from "lucide-react";
import { Button } from "../button";
import { Sheet, SheetContent,  SheetHeader, SheetTitle, SheetTrigger } from "../sheet";

export default function Header(){
    return (
      <div>
        <nav>
          <header className="flex top-0   justify-between px-8 py-6 backdrop-blur-2xl fixed min-w-full">
            <h1 className="text-2xl font-bold text-gray-200 tracking-wide">
              Jama Tech
            </h1>
            <nav className="hidden md:flex gap-6  font-sans text-xl">
              <a href="/" className="hover:text-blue-300  text-gray-200">
                Home
              </a>
              <a href="/About" className="hover:text-blue-300  text-gray-200">
                About
              </a>
              <a
                href="/services"
                className="hover:text-blue-300  text-gray-200"
              >
                Services
              </a>
              <a
                href="/training"
                className="hover:text-blue-300  text-gray-200"
              >
                Training
              </a>
              <a href="/Contact" className="hover:text-blue-300  text-gray-200">
                Contact
              </a>
            </nav>
            <div className="flex md:hidden ">
              <Sheet>
                <SheetTrigger>
                  <Menu className="size-10 text-gray-300 hover:scale-102 cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="bg-blue-900 text-white ">
                  <SheetHeader>
                    <SheetTitle className="text-xl mb-4 duration-1000 text-gray-200"> Jamal tech and software house</SheetTitle>
                    <div className="flex flex-col gap-y-4 items-center    ">
                      <a
                        href="/"
                        className="hover:text-blue-300  text-gray-200"
                      >
                        Home
                      </a>
                      <a
                        href="/About"
                        className="hover:text-blue-300  text-gray-200"
                      >
                        About
                      </a>
                      <a
                        href="/services"
                        className="hover:text-blue-300  text-gray-200"
                      >
                        Services
                      </a>
                      <a
                        href="/training"
                        className="hover:text-blue-300  text-gray-200"
                      >
                        Training
                      </a>
                      <a
                        href="/Contact"
                        className="hover:text-blue-300  text-gray-200"
                      >
                        Contact
                      </a>
                     
                      <a href="https://msabir.netlify.app" className="flex gap-1 justify-center items-center hover:text-blue-400 bg-gray-800 px-12 rounded-sm"> <Link className="size-4"/>devloper</a>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
           
          </header>
        </nav>
      </div>
    );
}