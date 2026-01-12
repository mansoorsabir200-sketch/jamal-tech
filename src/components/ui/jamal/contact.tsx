"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 text-white px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact Jama Tech
        </h1>
        <p className="text-blue-200 text-lg">
          Get in touch with us for education, training, or software development
          services.
        </p>
      </motion.div>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
        <Card className="bg-blue-950/60 border-blue-800  hover:bg-blue-950/85 duration-600 hover:z-100 hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-2  text-blue-200 font-semibold">
              <Phone className="text-blue-400" /> Phone / WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-200">
            <p className="mb-4">0700267728</p>
            <a href="https://wa.me/93700267728" target="_blank">
              <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                <MessageCircle /> Chat on WhatsApp
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-blue-950/60 border-blue-800  hover:bg-blue-950/85 duration-600 hover:z-100 hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-200 font-semibold">
              <Mail className="text-blue-400" /> Email
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-200">
            jamatech@gmail.com
          </CardContent>
        </Card>

        <Card className="bg-blue-950/60 border-blue-800 hover:bg-blue-950/85 duration-600 hover:z-100 hover:scale-105 ">
          <CardHeader>
            <CardTitle className="flex items-center gap-2  text-blue-200 font-semibold">
              <MapPin className="text-blue-400" /> Location
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-200">
            Afghanistan Helmand{" "}
            <span className="block">(On-site & Online Services) </span>
          </CardContent>
        </Card>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto bg-blue-950/60 border border-blue-800 rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Send Us a Message
        </h2>

        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-blue-900/60 border border-blue-700 text-white placeholder-blue-300 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-blue-900/60 border border-blue-700 text-white placeholder-blue-300 focus:outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 resize-none h-38 py-3 rounded-xl bg-blue-900/60 border border-blue-700 text-white placeholder-blue-300 focus:outline-none"
          />

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Send Message
          </Button>
        </form>
      </section>
    </div>
  );
}
