"use client"

import { Menu } from "lucide-react";
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
                  <Menu />
                </SheetTrigger>
                <SheetContent className="bg-blue-900 text-white ">
                  <SheetHeader>
                    <SheetTitle className="text-xl mb-4 text-gray-200"> Jamal tech and software house</SheetTitle>
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
                      <p> by Mansoor sabir :</p>
                      <a href="https://msabir.netlify.app">devloper</a>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </header>
        </nav>
      </div>
    );
}