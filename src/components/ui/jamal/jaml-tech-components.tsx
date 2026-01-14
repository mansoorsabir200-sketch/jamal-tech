"use client";

import { motion } from "framer-motion";
import { Database, Network, Code, GraduationCap } from "lucide-react";
import { Button } from "../button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 ">
        <h1 className="text-2xl font-bold tracking-wide ">Jama Tech</h1>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-300">
            About
          </a>
          <a href="#services" className="hover:text-blue-300">
            Services
          </a>
          <a href="#training" className="hover:text-blue-300">
            Training
          </a>
          <a href="#contact" className="hover:text-blue-300">
            Contact
          </a>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Jama Tech <span className="text-blue-400">Software House</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            A new center for technology, software development, databases, and
            professional network training.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 py-20 bg-blue-900/40">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="text-blue-400" /> Software Development
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              Web applications, enterprise systems, and custom solutions using
              modern technologies.
            </CardContent>
          </Card>

          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="text-blue-400" /> Database Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              Design, build, and manage secure databases for businesses and
              institutions.
            </CardContent>
          </Card>

          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="text-blue-400" /> Network & IT Services
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              Network design, implementation, security, and maintenance.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="px-8 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          Professional Training
        </h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="text-blue-400" /> Networking Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              Practical training for CCIT, CCNA, and CCNP with real-world labs
              and projects.
            </CardContent>
          </Card>

          <Card className="bg-blue-950/60 border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="text-blue-400" /> Software & IT Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-200">
              Learn programming, databases, and system administration from
              professionals.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 bg-blue-950/70 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Jama Tech</h3>
        <p className="text-blue-200 mb-8">
          Let’s build your next technology solution together.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Contact Us
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-blue-300 text-sm">
        © {new Date().getFullYear()} Jama Tech Software House. All rights
        reserved.
      </footer>
    </div>
  );
}
