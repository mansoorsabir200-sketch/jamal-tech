"use client"

import { Button } from "../button";

export default function Header(){
    return (
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
            <a href="/services" className="hover:text-blue-300  text-gray-200">
              Services
            </a>
            <a href="/training" className="hover:text-blue-300  text-gray-200">
              Training
            </a>
            <a href="/Contact" className="hover:text-blue-300  text-gray-200">
              Contact
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </header>
      </nav>
    );
}